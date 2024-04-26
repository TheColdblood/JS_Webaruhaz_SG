kosarEsemeny(){

}

kosarLISTA=[]

export function kosarOsszeallit(lista) {
    let txt = "<table class='table table-striped'>";
    txt +=
      "<thead><tr><th>Név</th><th>Kor</th><th>Nem</th><th></th></tr></thead>";
    txt += "<tbody>";
    lista.forEach((elem, index) => {
      txt += `<tr>`;
  
      for (const kulcs in elem) {
        txt += `<td>${elem[kulcs]}</td>`;
      }
      txt += `<td class='torol' id=${index}>🗑️</td>`;
      txt += `</tr>`;
    });
    txt += "</tbody></table>";
    return txt;
  }
  

// Minden divben Kosár gomb id

// Gombra kattintás után:
// - lehívjuk az indexet
// termekLISTA[index] elemét  betesszük a kosárba

//kosarbaTesz(obj, kosarLISTA)

//táblaösszeállít(kosarLISTA)
//megjelenítjük a kosárELEM-et