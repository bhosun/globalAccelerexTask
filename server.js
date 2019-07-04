const express       = require("express");
const bodyParser    = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTES
const episodeRoute    = require("./routes/episode.routes");
const commentRoute    = require("./routes/comment.routes");
const characterRoute  = require("./routes/character.route");

// route to Get the EPISODES
app.use("/", episodeRoute);

// ADDING AND LISTING COMMENTS FOR AN EPISODE
app.use("/", commentRoute);
app.use("/", commentRoute);

// GET CHARACTER LIST FOR AN EPISODE 
app.use("/", characterRoute);

app.listen(3000, () => {
    console.log('The server for your challenge just got started');
});