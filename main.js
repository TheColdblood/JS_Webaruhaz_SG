import { termekekLISTA } from "./termekek.js";
import { megjelenit, termekOsszeallit, kosarOsszeallit } from "./megjelenites.js";
termekOsszeallit(termekekLISTA);

const oldalELEM = $(".adatok");
oldalELEM.html(termekOsszeallit(termekekLISTA));

init(termekekLISTA);

/* Kosár: */
const KOSAR = []
const kosarba = $("#kosarHely")

function init(lista) {
  kosarEsemeny(lista);
}

function kosarInit(lista){
  kosarba.html(kosarOsszeallit(KOSAR))
  torolEsemeny();
}

function kosarEsemeny() {
  const gombElem = $(".kosarbaGomb")
  gombElem.on("click",function (event) {
    const ID = event.target.id 
    KOSAR.push(termekekLISTA[ID])
    kosarInit()
  })
}
/* Törlés */
function torol(lista,id){
  lista.splice(id,1);
  return lista;
}

function torolEsemeny(){
  const torolGomb=$(".torol")
  console.log(torolGomb)
  torolGomb.on("click",function (event) {
    let id = event.target.id;
    console.log(id)
    const LISTA = torol(KOSAR,id);
    kosarInit()
  });
}
