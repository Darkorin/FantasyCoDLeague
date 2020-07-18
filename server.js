// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
const path = require("path");
const axios = require("axios");

require("dotenv").config();

// Requiring passport as we've configured it
const passport = require("./config/passport");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// / Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  const players = [
    "Word#5968877",
    "Appa#2546284",
    "Aristo#3502113",
    "Asylate#2110730",
    "Athens#2718532",
    "Colors#3684810",
    "DirtyStyxx#2654357",
    "Flick#1732420",
    "Goku#8692749",
    "Hschreddz401#3720690",
    "huntfalcons#7806932",
    "iZsimply-#5025015",
    "Jamflowman03#8529024",
    "Jyrell#3712230",
    "LordChuy0_0#6456354",
    "Masta Splinter#7138518",
    "Mil#7326489",
    "Nick#8253622",
    "Not_Sickness#9491992",
    "OVOFinesse6ix#6657015",
    "Oxyclean#6587377",
    "Pickle Rick#8063705",
    "Qztp#9238347",
    "Student Athlete#9814800",
    "Tank#1793909",
    "TheMilkMan#7521651",
    "Tune#3334777",
    "Vision#2601760",
    "Woolley Mammoth#7681032"
  ];
  let playerNum = 0;
  const seedInt = setInterval(() => {
    const currPlayer = playerNum;
    playerNum++;
    if (currPlayer === players.length) {
      clearInterval(seedInt);
      return;
    }
    axios({
      method: "GET",
      url: `https://call-of-duty-modern-warfare.p.rapidapi.com/multiplayer/${encodeURIComponent(
        players[currPlayer]
      )}/uno`,
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
        "x-rapidapi-key": process.env.COD_API_KEY,
        useQueryString: true
      }
    })
      .then(response => {
        console.log("COD API RESPONSE: ", response);
        db.Player.create({
          activisionId: players[currPlayer],
          displayName: players[currPlayer].split("#")[0],
          kdRatio: response.data.lifetime.all.properties.kdRatio,
          wlRatio: response.data.lifetime.all.properties.winLossRatio,
          scoreMinute: response.data.lifetime.all.properties.scorePerMinute,
          scoreGame: response.data.lifetime.all.properties.scorePerGame,
          totalKills: response.data.lifetime.all.properties.kills,
          mostKills: response.data.lifetime.all.properties.bestKills,
          accuracy: response.data.lifetime.all.properties.accuracy * 100
        })
          .then(() => console.log("Added"))
          .catch(err => console.error(err));
      })
      .catch(error => {
        console.log(error);
        clearInterval(seedInt);
      });
  }, 5000);

  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
