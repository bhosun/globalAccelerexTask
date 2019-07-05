const express = require("express");
const router = express.Router();
const getEpisodes = require("../controllers/episode.controller");

// ROUTE FOR GETTING ALL THE EPISODES
router.get("/episodes", getEpisodes);

module.exports = router;