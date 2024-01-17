import {getGames} from "./handle-data.js";

class DisplayData {
    async displayGames(category) {
        const games = await getGames.displayGames(category);
        return games;
    }
}

const getData = new DisplayData();

const display = document.querySelector(".display");
let category = "mmorpg";
const displayGames = async (ctg)=> {
    const res = await getData.displayGames(ctg);

    let data = ``;
    res.forEach((game) => {
        data += `<div class="col-lg-3 col-md-4 col-sm-6"">
                    <div class="card rounded-2" game-id="${game.id}">
                        <div class="p-3">
                            <img src="${game.thumbnail}" class="card-img-top" alt="${game.title}">
                            <div class="card-body px-0 pb-0">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h4 class="card-title text-white">${game.title}</h4>
                                    <button class="btn btn-primary py-1">Free</button>
                                </div>
                                <p class="card-text text-center pt-3 pb-0 text-white opacity-50">This is a wider card
                                    ${game.short_description.length > 20? game.short_description.slice(0, 21) + " ..." : game.short_description}
                                </p>
                            </div>
                        </div>
                        <div class="card-footer d-flex justify-content-between align-items-center">
                            <span class="badge text-bg-dark rounded-1">${game.genre}</span>
                            <span class="badge text-bg-dark rounded-1">${game.platform}</span>
                        </div>
                    </div>
                </div>`;
    });
    display.innerHTML = data;
}
displayGames(category);

const categories = document.querySelectorAll(".nav-link");
categories.forEach(btn => {
    btn.addEventListener("click", (e)=> {
        category = e.target.getAttribute("category");
        displayGames(category);
    })
});