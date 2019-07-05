const express       = require("express");
const bodyParser    = require("body-parser");
const port          = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTES
const episodeRoute    = require("./routes/episode.routes");
const commentRoute    = require("./routes/comment.routes");
const characterRoute  = require("./routes/character.route");

app.get("/", (req, res) => {
    res.status(200).json({
        "status": "success",
        "message": "Welcome to the Api do well to check my github"
    });
})
// route to Get the EPISODES
app.use("/", episodeRoute);

// ADDING AND LISTING COMMENTS FOR AN EPISODE
app.use("/", commentRoute);
app.use("/", commentRoute);

// GET CHARACTER LIST FOR AN EPISODE 
app.use("/", characterRoute);

app.listen(port, () => {
    console.log('The server for your challenge just got started');
});