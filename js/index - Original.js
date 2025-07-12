// "https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter";

async function showGames() {
  const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";

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
  // console.log()

  var cartona = "";
  for (let i = 1; i < data.length; i++) {
    cartona += ` 
          <div class="col  cardOuter" gid=${data[i].id}>
            <div class="card h-100  bg-dark ">
            
              <img src=${data[i].thumbnail} class="card-img-top  " alt="game picture" />
               <div class="card-body ">
                <div class="d-flex justify-content-between">
                  <h3 class=" h6 fs-6 text-white">${data[i].title}</h3>
                  <small class="badge text-bg-primary p-2">free</small>
                </div>
                <p class="card-text text-center text-white-50 pt-3 ">${data[i].short_description}</p>
              </div>
              <div class="card-footer d-flex justify-content-between ">
                <span class="badge badge-color p-2">${data[i].genre}</span>
                <span class="badge badge-color p-2">${data[i].platform}</span>
              </div>
            </div>
          </div>`;
  }
  document.getElementById("gamesBody").innerHTML = cartona;
  // const cards = document.querySelectorAll(".col");
  // cards.forEach((card) => {
  //   card.addEventListener("click", () => {
  //     const gameId = card.getAttribute("gid");
  //     showGameDetails(gameId);
  //   });
  // });
  document.getElementById("gamesBody").addEventListener("click", function(e) {
  const card = e.target.closest('.col');
  if (card) {
    const gameId = card.getAttribute("gid");
    showGameDetails(gameId);
  }
});

}

showGames();

async function showGameDetails(id = 452) {
  const Surl = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
  const Soptions = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "b58707a16amshf82097476e50be9p173aa6jsnfecdf529f967",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  let Dres = await fetch(Surl, Soptions);
  Dres = await Dres.json();
  console.log(Dres);

  document.getElementById("gameDetails").innerHTML = `
  
    <div class="col-md-5">
            <img src="${Dres.thumbnail}" alt="Game Picture" class=" " style="object-fit: fill; width: % " />
          </div>
          <div class="col-md-7 fs-6">
            <h2 class="">Title: <span>${Dres.title}</span></h2>
            <p>Category: <span class="badge text-bg-info">${Dres.genre}</span></p>
            <p>Platform: <span class="badge text-bg-info">${Dres.platform}</span></p>
            <p>Status: <span class="badge text-bg-info">${Dres.status}</span></p>
            <p>
              ${Dres.description}
            </p>
            <a href="${Dres.game_url}" class="btn btn-warning">Show Game</a>
          </div>
    `;
}

showGameDetails();
