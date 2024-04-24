export function termekOsszeallit(lista) {
  let txt = "<div class='card'>";
  txt += "<div class='card-header'>Header</div>";

  txt += "<div class='card-body'>Content</div>";

  txt += "<div class='card-footer'>Footer</div>";

  txt += "</div>";
  return txt;
}

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

export function megjelenit(txt) {
  const divELEM = $(".adatok");
  divELEM.html(txt);
}