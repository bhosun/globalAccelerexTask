const fetch = require("node-fetch");

const getCharacters = (req, res) => {
    const id = req.params.id;
    if(id != 'undefined' && id != '') {
        fetch(`https://rickandmortyapi.com/api/episode/${id}`)
        .then(res => res.json())
        .then((json) => {
            const characterUrl = json["characters"]
            for(let i = 0; i < characterUrl.length; i++) {
                const great = characterUrl[i].length - 1;
                const lastNumber = characterUrl[i][great];
                fetch(`https://rickandmortyapi.com/api/character/${lastNumber}`)
                .then(res => res.json())
                .then((json) => {
                    // Filter by gender
                    if(json.gender == req.query.gender) {
                        const names = json["name"];
                        console.log(names);
                    }
                });
            }
        })
    } else {
        res.status(400).json("There is an error with the Id Inputed")
    }
}

module.exports = getCharacters;