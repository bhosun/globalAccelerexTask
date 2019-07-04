const fetch = require("node-fetch");

const getEpisodes = (req, res) => {
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
}

module.exports = getEpisodes;