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
### megjelenites.js:
1. **termekOsszeallit(lista)->txt** | Összállatja a termékek kártyáit (BS5 használatával) egy szöveges változóba.

2. **kosarOsszeallit(lista)->txt** | Összállatja a kosár táblázat szerkezetét egy szöveges változóba.

3. **megjelenit(txt)** -  Megjelnítette egy adott html elemben a paraméterénben kapott szöveget. 

### w.i.p:
4. **rendez(lista, irany) -> rendezettLista** | A paraméterében kapott listát név szerint megrendezi; a függvény akkor fut le, ha a táblázat név fejlécére kattintunk. 

5. **adatHozzaadas(lista) -> kibovitettLista** |  Összegyűjti az űrlapról az adatokat és összeállít belőlök egy objektumot, majd azt beleteszi a listába.; a függvény akkor fut le, ha rákattintunk a Hozzáad gombra. 

6. **torol(lista,id )->tLista** | Kitörli a listából az adott id-jű elemet.
Akkor fog lefutni, ha sor melletti töröl gombra kattintunk. 

7. **szures(lista, keresoSzoveg) -> szurtLista** | a keresőmezőbe beírt szöveget keresi a lista objektumainak név mezőjében. mindez akkor fut le, ha beírunk valamit a keresőmezőbe. 

kosarLista  tartalmába kerül gombnyomás után
megjelenik a felületen

kosarbaTesz(kosarLista, termekLista, id) -> 