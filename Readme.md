# Webáruház

## Specifikáció:

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
1. **htmlOszeallit(lista)->txt** | összállatja a táblázat htm szerkezetét egy szöveges változóba

2.  **megjelenit(txt)** -  megjelnítette egy adott html elemben a paraméterénben kapott szöveget. 

3. **rendez(lista, irany) -> rendezettLista** | a paraméterében kapott listát név szerint megrendezi; a függvény akkor fut le, ha a táblázat név fejlécére kattintunk. 

4. **adatHozzaadas(lista) -> kibovitettLista** |  Összegyűjti az űrlapról az adatokat és összeállít belőlök egy objektumot, majd azt beleteszi a listába.; a függvény akkor fut le, ha rákattintunk a Hozzáad gombra. 

5. **torol(lista,id )->tLista** | kitorli a listából az adott id-jű elemet.
Akkor fog lefutni, ha sor melletti torol gombra kattintunk. 

6. **szures(lista, keresoSzoveg) -> szurtLista** | a keresőmezőbe beírt szöveget keresi a lista objektumainak név mezőjében. mindez akkor fut le, ha beírunk valamit a keresőmezőbe. 

kosarLista  tartalmába kerül gombnyomás után
megjelenik a felületen

kosarbaTesz(kosarLista, termekLista, id) -> 