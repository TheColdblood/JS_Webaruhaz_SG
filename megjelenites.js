export function termekOsszeallit(lista) {
  let txt = "";
  for (let index = 0; index < lista.length; index++) {
    txt += `
    <div class='card col-lg-3'>
      <div class="card-header">
        <h4>${lista[index].nev}</h4>
      </div>

      <div class="card-body">
        <img class="card-img-top img-thumbnail" src="${lista[index].kep}" alt="${lista[index].nev}" >
        <p class="card-text">${lista[index].leiras}</p>
      </div>

      <div class="card-footer">
        <p class="float-start">${lista[index].ar}</p>
        <div>
          <button class="gomb float-end" id="${index}">Kosárba</button>
        </div>
      </div>
    </div>`;
  }
  return txt;
}

export function kosarOsszeallit(lista) {
  let txt="<table class='table table-striped'>"
  txt+="<thead><tr><th>Termék</th><th>Kép</th><th>Leírás</th><th>Ár</th>Kosaram<th></th></tr>"
  txt+="<tbody>"
  lista.forEach((elem,index) => {
      txt+=`<tr>`
      for (const kulcs in elem) {
          txt += `<td>${elem[kulcs]}</td>`;
      }
      txt += `<td class='torol' id=${index}>🗑️</td>`;
      txt += `</tr>`;
  });
  txt+="</tbody></table>";
  return txt;
}

export function megjelenit(txt) {
  const divELEM = $(".adatok");
  divELEM.html(txt);
}
