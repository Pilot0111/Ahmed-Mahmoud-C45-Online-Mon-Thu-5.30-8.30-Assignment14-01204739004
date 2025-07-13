import { Details } from "./Details.js";
import { Ui } from "./Ui.js";

export class Game {
  constructor() {
    this.ui = new Ui();
    this.getGames();
    document.getElementById("loading").classList.remove("d-none");

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        document
          .querySelectorAll(".nav-link")
          .forEach((el) => el.classList.remove("active"));
        link.classList.add("active");
        const category = e.target.textContent.trim().toLowerCase();
        document.getElementById("loading").classList.remove("d-none");

        this.getGames(category);
      });
    });

    document.getElementById("gamesBody").addEventListener("click", (e) => {
      const card = e.target.closest(".col");
      if (card) {
        const gameId = card.getAttribute("gid");
        document.getElementById("loading").classList.remove("d-none");

        this.details = new Details(gameId);
      }
    });
  }

  async getGames(category) {
    if (category == undefined || category == "all") {
      var url = `https://free-to-play-games-database.p.rapidapi.com/api/games`;
    } else {
      var url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    }

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "b58707a16amshf82097476e50be9p173aa6jsnfecdf529f967",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    let data = await fetch(url, options);
    data = await data.json();
    console.log(data);
    document.getElementById("details").classList.add("d-none");
    this.ui.showGames(data);
    document.getElementById("loading").classList.add("d-none");
  }
}
