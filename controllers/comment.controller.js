const bodyParser    = require("body-parser");
const pool          = require("../models/basics");

const getallComments = (req, res) => {
    pool.query('SELECT * FROM comment', (err, data) => {
        if(err) {
            throw err;
        }
        res.status(200).json(data.rows)
    });
}


const postAComment = (req, res) => {
    const { comment } = req.body;
    if(!comment) {
        res.status(400).json("Make sure to input the given fields");
    }
    pool.query('INSERT INTO comment (comment) VALUES ($1)', [comment], (err, data) => {
        if(err) {
            throw err
        }
        console.log(req.body);
        res.status(201).json("Successfully added!!");
    });
}

module.exports = {
    getallComments,
    postAComment
};