# Webáruház

## Specifikáció:
A webáruházat ajánlom katonai hagyományőrzők figyelmébe ugyanis a(z) egyenruhák/felszerelésektől a hadijátékokon használatos fegyverekig minden megtalálható.

### ADMIN FELÜLET 
A táblázat fejlécére kattintva tudjunk rendezni növekvő, illetve csökkenő sorrendbe az adatokat
A táblázat minden sora mellett van egy törlés gomb, amivel az adott sort tudjuk törölni a táblázatból. 
A táblázat minden sora mellett van egy szerkesztés gomb, ahol tudjuk szerkeszteni a lista adott sorát!

### PUBLIKUS FELÜLET 
A publikus felületen div-ekben jelenítjük meg az adatokat.
A publikus felületen a terméket helyezheted a kosárba. A kosárban lévő termékeket listázhatod, törölheted, módosíthatod az elemszámát, majd leadhatod a rendelést!
Minden termékhez tartozik egy gomb, amivel meg tudjuk nézni azt az egyetlen terméket.
A kiemelt termék mellett megjelenik egy bal és egy jobb léptető gomb, amivel léptetni tudjuk a terméket.


## Metódusok

### main.js:
1. **init(lista)** | Meghívja a rendezEsemeny(lista) és kosarEsemeny(lista) metódusokat.

2. **kosarInit()** | Megjeleníti a kosarat és meghívja a torolEsemeny() metódust.

3. **kosarEsemeny()** | A "Kosárba" gombra eseményt tesz amely aktiválódás után hozzáfűzi a termékeket a KOSAR listába.

4. **torol(lista,id) -> lista** | Feldarabolja a paraméterben megadott listát.

5. **torolEsemeny()** | A "🗑️" gombra eseményt tesz amely aktiválódás után ledarabolja a termékeket a KOSAR listából.

6. **rendezEsemeny(lista)** | A "Rendezési szempontok" menün belül lévő "Név" és "Ár" gombokra eseményt tesz amely aktiválódás után név illetve ár szerint rendezi a termékeket.


### megjelenites.js:
1. **termekOsszeallit(lista)->txt** | Összállatja a termékek kártyáit (BS5 használatával) egy szöveges változóba.

2. **kosarOsszeallit(lista)->txt** | Összállatja a kosár táblázat szerkezetét egy szöveges változóba.

3. **megjelenit(txt)** -  Megjelnítette egy adott html elemben a paraméterénben kapott szöveget. 


### rendezes.js:
1. **nevRendez(lista, irany) -> lista** | A listában található elemeket név szerint rendezi növekvő és csökkenő irányban.

2. **arRendez(lista, irany) -> lista** | A listában található elemeket ár szerint rendezi növekvő és csökkenő irányban.


### w.i.p:
1. **adatHozzaadas(lista) -> kibovitettLista** |  Összegyűjti az űrlapról az adatokat és összeállít belőlök egy objektumot, majd azt beleteszi a listába.; a függvény akkor fut le, ha rákattintunk a Hozzáad gombra. 

2. **szures(lista, keresoSzoveg) -> szurtLista** | a keresőmezőbe beírt szöveget keresi a lista objektumainak név mezőjében. mindez akkor fut le, ha beírunk valamit a keresőmezőbe. 