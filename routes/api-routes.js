// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const { Op } = require("sequelize");

module.exports = function(app) {
  app.post("/api/draft", (req, res) => {
    db.Draft.findOne({
      where: {
        userId: req.body.userId
      }
    }).then(result => {
      let draftArr = result.dataValues;
      const index = Object.values(draftArr).indexOf(req.body.currentTurn);
      for(let i = index + 1; i < index + 4; i++) {
        if (Object.values(draftArr)[i] === null) {
          draftArr[`${Object.keys(draftArr)[i]}`] = req.body.playerName;
          i = index + 5;
          db.Draft.update(draftArr ,{
            where: {
              userId: req.body.userId
            }
          }).then(() => {
            res.end();
          }).catch(err => {
            console.log(err);
          });
        } else {
          if (i === index + 3) res.end();
        }
      };
    }).catch(err => {
      console.log(err);
    });
  });

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.get("/api/players", (req, res) => {
    db.Player.findAll()
      .then(data => {
        console.log(data);
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
  });
};
