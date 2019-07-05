const express         = require("express");
const router          = express.Router();
const getallComments  = require("../controllers/comment.controller");
// const postAComment    = require("../controllers/comment.controller");

router.get("/comments", getallComments.getallComments);
router.post("/comments", getallComments.postAComment);

module.exports = router;