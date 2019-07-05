const express         = require("express");
const router          = express.Router();
const getCharacter    = require("../controllers/character.controller");

router.get("/characters/:id", getCharacter);

module.exports = router;
