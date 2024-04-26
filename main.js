import { termekekLISTA } from "./adat.js";
import { megjelenit, termekOsszeallit } from "./megjelenites.js";

termekOsszeallit(termekekLISTA)

const oldalELEM = $(".adatok")
console.log(termekOsszeallit(termekekLISTA))
oldalELEM.html(termekOsszeallit(termekekLISTA))

//Admin:
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