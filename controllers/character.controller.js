const fetch = require("node-fetch");

class characters { 
    
    static async getCharacters(req, res) {
        try {
            const id = req.params.id;
            if(id != 'undefined' && id != '') {
                const fetchedEpisode = await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
                const converted = await fetchedEpisode.json();
                const charactersUrl = await converted["characters"]
                let lastSet, lastNumber;
                charactersUrl.map(now => {
                    lastSet = now.length - 1
                    lastNumber = now[lastSet]
                    console.log(lastNumber);
                    fetch(`https://rickandmortyapi.com/api/character/${lastNumber}`)
                    .then(res => res.json())
                    .then(json => {
                        if(json.gender == req.query.gender) {
                            const names = json["name"];
                            console.log(names);
                        }
                    })    
                });
            } else {
                res.status(400).json("There is an error with the id inputed!")
            }
        }
        catch(err) {
            res.status(400).json({
                status: "error!!",
                message: err.message
            })
        };
    }

}

module.exports = characters;

