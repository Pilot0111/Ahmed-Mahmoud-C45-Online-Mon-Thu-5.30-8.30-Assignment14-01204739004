
import {Ui} from "./Ui.js"



export class Details{

constructor(gameId){
this.ui = new Ui()
this.showGameDetails(gameId)

document.getElementById("closeD").addEventListener("click", e=>{
   document.getElementById("details").classList.add("d-none")
  document.getElementById("games").classList.remove("d-none")
    document.getElementById("nav").classList.remove("d-none")
})

}

async  showGameDetails(gameId) {
  const Surl = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`;
  const Soptions = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "b58707a16amshf82097476e50be9p173aa6jsnfecdf529f967",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  let Dres = await fetch(Surl, Soptions);
  Dres = await Dres.json();
  document.getElementById("details").classList.remove("d-none")
document.getElementById("games").classList.add("d-none")
    document.getElementById("nav").classList.add("d-none")
  document.getElementById("loading").classList.add("d-none")
  this.ui.showGameDetail(Dres)
        

console.log("data ret")  

}


}