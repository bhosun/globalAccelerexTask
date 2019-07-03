const express       = require("express");
const fetch         = require("node-fetch");
const Pool          = require("pg").Pool;
const bodyParser    = require("body-parser");

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'codechallenge',
    password: 'bosunbosun71',
    port: 5432
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// route to Get the EPISODES
app.get("/episodes", (req, res) => {
    fetch("https://rickandmortyapi.com/api/episode")
    .then(res => res.json())
    .then(json => json["results"])
    .then((yea) => {
            res.status(200).json({
                status: "success",
                data: yea.forEach((ini) => {
                    console.log(`EPISODE: ${ini.episode} ======= TITLE: ${ini.name}`);
                 })
            });
    })
    .catch((err) => {
        console.log(`you have an error: ${err.message}`)
    })
});

// ADDING AND LISTING COMMENTS FOR AN EPISODE
app.get("/comments", (req, res) => {
    pool.query('SELECT * FROM comment', (err, data) => {
        if(err) {
            throw err;
        }
        res.status(200).json(data.rows)
    });
});

app.post("/comments", (req, res) => {
    const { comment } = req.body;
    if(!comment) {
        res.status(400).json("bobo yii oti gbe gbagii");
    }

    pool.query('INSERT INTO comment (comment) VALUES ($1)', [comment], (err, data) => {
        if(err) {
            throw err
        }
        console.log(req.body);
        res.status(201).json("Successfully added!!");
    });
});


// GET CHARACTER LIST FOR AN EPISODE 
app.get("/characters/:id", (req, res) => {
    const id = req.params.id;
    console.log(req.query);
    fetch(`https://rickandmortyapi.com/api/episode/${id}`)
    .then(res => res.json())
    .then((json) => {
        if(typeof req.query.gender != 'undefined') {
            for(let i = 0; i < json["characters"].length; i++) {
                const dele = json["characters"][i];
                const tryio = dele[dele.length - 1];
                fetch(`https://rickandmortyapi.com/api/character/${tryio}`)
                .then(res => res.json())
                .then((ayinde) => {
                    if((ayinde.gender == req.query.gender) && (req.query.sortBy && req.query.orderBy)){
                        // console.log(ayinde.name + " + " + ayinde.id);
                        const gbenga = [ayinde.name];
                        // console.log(gbenga);
                        console.log("==============================");
                        const dele = gbenga.sort();
                        console.log(dele);
                    }
                })
            }
        }
        // SORT PARAMETER
        if(req.query.sortByname && req.query.orderByasc) {

        }
    })
});
// console.log(json["characters"]);

app.listen(3000, () => {
    console.log('The server for your challenge just got started');
});