import { termekekLISTA } from "./termekek.js";
import { megjelenit, termekOsszeallit, kosarOsszeallit } from "./megjelenites.js";
termekOsszeallit(termekekLISTA);

const oldalELEM = $(".adatok");
console.log(termekOsszeallit(termekekLISTA));
oldalELEM.html(termekOsszeallit(termekekLISTA));

init(termekekLISTA);

/* Kosár: */
const KOSAR = []
const kosarba = $("#gomb")

function init(lista) {
  kosarEsemeny(lista);
  torolEsemeny();
}

function kosarEsemeny() {
  const gombElem = $(".gomb")
  gombElem.on("click",function (event) {
      const ID = event.target.id 
      KOSAR.push(termekekLISTA[ID])
      kosarba.html(kosarOsszeallit(KOSAR))
  })
}
/* Törlés */
function torol(lista,id){
  lista.splice(id,1);
  return lista;
}

function torolEsemeny(){
  const torolGomb=$(".torol")
  torolGomb.on("click",function (event) {
    let id = event.target.id;
    const LISTA = torol(termekekLISTA,id);
    init(LISTA);
  });
}
