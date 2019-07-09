const pool = require("../models/basics");

class comments{
    static async getallComments(req, res) {
        try {
            pool.query('SELECT * FROM comment', (err, data) => {
                if(err) {
                    throw err;
                }
                return res.status(200).json(data.rows);
            });
        }
        catch(err) {
            return res.status(400).json({
                status: "error!",
                message: err.message
            });
        }
    }
    
    
    static async postAComment(req, res) {
        try {
            const { comment } = await req.body;
            if(!comment) {
                res.status(400).json("Make sure to input the given fields");
            }
            pool.query('INSERT INTO comment (comment) VALUES ($1)', [comment], (err, data) => {
                if(err) {
                    throw err
                }
                return res.status(201).json("Successfully added!!");
            });
        }
        catch(err) {
            return res.status(400).json({
                status: "error!!",
                message: err.message
            });
        }
    }
}

module.exports = comments;