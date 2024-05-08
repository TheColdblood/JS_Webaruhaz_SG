import { termekekLISTA } from "./termekek.js";
import { termekOsszeallit, kosarOsszeallit } from "./megjelenites.js";
import { nevRendez, arRendez } from "./rendezes.js";
termekOsszeallit(termekekLISTA);

const termekElem = $("#termekek");
termekElem.html(termekOsszeallit(termekekLISTA));

const oldalELEM = $(".adatok");
oldalELEM.html(termekOsszeallit(termekekLISTA));

init(termekekLISTA);


/* Kosár: */
const KOSAR = []
const kosarba = $("#kosarHely")

function init(lista) {
  rendezEsemeny(lista)
  kosarEsemeny(lista);
}

function kosarInit(){
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
  //console.log(torolGomb)
  torolGomb.on("click",function (event) {
    let id = event.target.id;
    //console.log(id)
    const LISTA = torol(KOSAR,id);
    kosarInit()
  });
}

/* Rendezés */
let irany = 1;

function rendezEsemeny(lista) {
  const nevElem = $("#RNev");
  const arElem = $("#RAr");

  nevElem.on("click", function () {
      const rLista = nevRendez(lista.slice(), irany);
      termekElem.html(termekOsszeallit(rLista));
      irany *= -1;
  });

  arElem.on("click", function () {
      const rLista = arRendez(lista.slice(), irany);
      termekElem.html(termekOsszeallit(rLista));
      irany *= -1;
  });
}