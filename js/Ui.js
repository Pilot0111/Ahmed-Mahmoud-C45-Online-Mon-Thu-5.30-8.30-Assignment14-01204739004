export class Ui{

    showGames(data){
  let cartona = "";
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
}


showGameDetail(Dres) {
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
            <a href="${Dres.game_url}" class="btn btn-outline-warning">Show Game</a>
          </div>
    `;
}


}