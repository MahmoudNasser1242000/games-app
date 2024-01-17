class GetData {
    constructor (api, options) {
        this.api = api;
        this.options = options;
    }

    async displayGames(category) {
        const data = await fetch(`${this.api}${category}`, this.options);
        const res = await data.json();
        return res;
    }

    async gameInfo(gameId) {
        const data = await fetch(`${this.api}${gameId}`, this.options);
        const res = await data.json();
        return res;
    }
}

const url1 = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=';
const url2 = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3fd7da5eb8msh7aa6912b459c195p10e9fdjsnb53b91c7a337',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

export const getGames = new GetData(url1, options);
export const getInfo = new GetData(url2, options);

/*
(async function() {
    const x = await getGames.displayGames("shooter");
    console.log(x);
})();

(async function() {
    const x = await getInfo.gameInfo("540");
    console.log(x);
})();
*/
