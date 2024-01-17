import { getInfo } from "./handle-data.js";

class GameInfo {
    async getGameInfo(gameId) {
        const info = await getInfo.gameInfo(gameId);
        return info;
    }
}

const game_info = new GameInfo()

const gameContainer = document.querySelector(".game-info");
const getGame = async (index)=> {
    const data = await game_info.getGameInfo(index);
    // console.log(data);

    if (gameContainer.classList.contains("d-none")) {
        gameContainer.classList.remove("d-none");
        gameContainer.classList.add("d-block");

        gameContainer.innerHTML = `<div class="container">
                                    <div class="d-flex justify-content-between align-items-center my-4">
                                        <h2 class="fs-1">Details Game</h2>
                                        <span class="fs-3 close">&#x2718;</span>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-5 col-sm-6">
                                            <img src="${data.thumbnail}" class="w-100" alt="${data.title}">
                                        </div>
                                        <div class="col-lg-7 col-sm-6 mt-4 mt-sm-0">
                                            <h3 class="fs-2">Title: ${data.title}</h3>
                                            <p>Category: <span class="badge text-bg-info rounded-1">${data.genre}</span></p>
                                            <p>Platform: <span class="badge text-bg-info rounded-1">${data.platform}</span></p>
                                            <p>Status: <span class="badge text-bg-info rounded-1">${data.status}</span></p>

                                            <p class="mt-3 desc">
                                                ${data.description}
                                            </p>
                                            <a class="btn btn-outline-warning text-white fs-5" href="${data.game_url}" target="_blank">Show Game</a>
                                        </div>
                                    </div>
                                </div>`;

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }
}

const displayGame = document.querySelector(".display");
displayGame.addEventListener("click", (e)=> {
    let card = e.target.offsetParent.classList.contains("card");
    if (card) {
        getGame(e.target.offsetParent.getAttribute("game-id"));
    }
})

gameContainer.addEventListener("click", (e)=> {
    if (e.target.classList.contains("close")) {
        if (gameContainer.classList.contains("d-block")) {
            gameContainer.classList.remove("d-none");
            gameContainer.classList.add("d-none");
            gameContainer.innerHTML = "";
        }
    }
})