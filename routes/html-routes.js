// Requiring path to so we can use relative routes to our HTML files
const exphbs = require("express-handlebars");
const Handlebars = require("handlebars");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

module.exports = function(app) {
  // Set Handlebars as the default templating engine.
  app.engine("handlebars", exphbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");

  Handlebars.registerHelper("checkDrafted", (displayName, users) => {
    let available = true;
    users.forEach(user => {
      if (user.d1 === displayName) {
        available = false;
      } else if (user.d2 === displayName) {
        available = false;
      } else if (user.d3 === displayName) {
        available = false;
      }
    });
    return available;
  });

  Handlebars.registerHelper("checkDraftedSpecific", (displayName, user) => {
    let available = true;
    if (user.d1 === displayName) {
      available = false;
    } else if (user.d2 === displayName) {
      available = false;
    } else if (user.d3 === displayName) {
      available = false;
    }
    return available;
  })

  Handlebars.registerHelper("checkTurn", currentTurn => {
    return currentTurn === "1 (YOU)";
  });

  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect(`/members/${req.user.id}`);
    }
    res.render("signup");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect(`/members/${req.user.id}`);
    }
    res.render("login");
  });

  app.get("/tournament/:id", isAuthenticated, (req, res) => {
    db.Draft.findOne({
      where: {
        userId: req.user.id
      }
    })
      .then(draft => {
        draft = Object.values(draft.dataValues);
        let draftArr = [];
        for (let i = 2; i < Object.keys(draft).length - 3; i = i + 4) {
          draftArr.push({
            name: draft[i],
            d1: draft[i + 1],
            d2: draft[i + 2],
            d3: draft[i + 3]
          });
        }

        const shuffleArray = array => {
          for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * i);
              const temp = array[i];
              array[i] = array[j];
              array[j] = temp;
          };
          return array;
        };

        draftArr = shuffleArray(draftArr);

        db.Players.findAll()
          .then(players => {
            players = players.map(player => player.dataValues);
            res.render("tournament", {
              players: players,
              users: draftArr
            });
          })
            .catch(err => {
              console.log(err);
              res.status(401).json(err);
            })
      })
        .catch(err => {
        console.log(err);
        res.status(401).json(err);
      });
  });
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members/:id", isAuthenticated, (req, res) => {
    const render = draft => {
      const checkNullDraft = drafted => {
        if (drafted === null) {
          drafted = "Empty";
        }
        return drafted;
      };

      draftArr = [];
      for (let i = 2; i < Object.keys(draft).length - 3; i = i + 4) {
        draftArr.push({
          name: draft[i],
          d1: checkNullDraft(draft[i + 1]),
          d2: checkNullDraft(draft[i + 2]),
          d3: checkNullDraft(draft[i + 3])
        });
      }

      db.Player.findAll()
        .then(players => {
          players = players.map(player => player.dataValues);
          res.render("members", {
            players: players,
            users: draftArr,
            currentTurn: draft[draft.length - 3],
            totalPlayers: players.length
          });
        })
        .catch(err => {
          console.log(err);
          res.status(401).json(err);
        });
    };

    const findDraft = () => {
      db.Draft.findOne({
        where: {
          userId: req.user.id
        }
      })
        .then(draft => {
          if (draft === null) {
            db.Draft.create({
              userId: req.user.id,
              p1Display: "1 (YOU)",
              p2Display: "2 (CPU)",
              p3Display: "3 (CPU)",
              p4Display: "4 (CPU)",
              p5Display: "5 (CPU)",
              p6Display: "6 (CPU)",
              p7Display: "7 (CPU)",
              p8Display: "8 (CPU)",
              currentTurn: "1 (YOU)"
            }).then(() => {
              findDraft();
            });
          } else {
            render(Object.values(draft.dataValues));
          }
        })
        .catch(err => {
          console.log(err);
          res.status(401).json(err);
        });
    };
    findDraft();
  });
};
