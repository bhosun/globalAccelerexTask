const express       = require("express");
const bodyParser    = require("body-parser");
const port          = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTES
const episodeRoute    = require("./controllers/episode.controller");
const commentRoute    = require("./controllers/comment.controller");
const characterRoute  = require("./controllers/character.controller");

app.get("/", (req, res) => {
    res.status(200).json({
        "status": "success",
        "message": "Welcome to the Api do well to check my github"
    });
})

app.get("/episodes", episodeRoute);
app.get("/comments", commentRoute.getallComments);
app.post("/comments", commentRoute.postAComment);
app.get("/characters/:id", characterRoute.getCharacters);

app.listen(port, () => {
    console.log('The server for your challenge just got started');
});