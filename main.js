import { termekekLISTA } from "./termekek.js";
import { megjelenit, termekOsszeallit } from "./megjelenites.js";
termekOsszeallit(termekekLISTA);

const oldalELEM = $(".adatok");
console.log(termekOsszeallit(termekekLISTA));
oldalELEM.html(termekOsszeallit(termekekLISTA));

/* Kosár: */
const KOSAR = []
const kosarba = $("#gomb")

function init(lista) {
  kosarEsemeny(lista);
}

function kosarEsemeny() {
  const gombElem = $(".gomb")
  gombElem.on("click",function (event) {
      const ID = event.target.id 
      KOSAR.push(TASKALISTA[ID])
      kosarba.html(tablaOsszeallit(KOSAR))
  })
}



/* Admin: */
export function rendez(lista, irany) {
  lista.sort(function (e1, e2) {
    let eredmeny = 1;
    if (e1.nev < e2.nev) {
      eredmeny = -1;
    }
    return eredmeny * irany;
  });
  return lista;
}

export function szures(lista, keresoSzoveg) {
  const szurtLISTA = lista.filter(function (ember) {
    return ember.nev.toUpperCase().includes(keresoSzoveg.toUpperCase());
  });
  return szurtLISTA;
}

export function torol(lista, id) {
  lista.splice(id, 1);
  return lista;
}
