### Esercizio:
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

### Svolgimento:
1. creare una funzione che al click genera una griglia in pagina:
- facile: 100 caselle;
- medio: 81 caselle;
- difficile: 49 caselle;

2. creiamo le costante per la scelta della difficoltà;
3. creiamo la costante per l'avvio del gioco;
4. al click sulla cella, cambia colore;

**logica del programma**
- [ ] definire il numero massimo di tentativi consentiti: 100 / 81 / 49 -16 "bombe"
- [ ] array di numeri " non bombe" cliccate dal giocatore per avere il punteggio
***
- [ ] al click sulla cella della griglia
  - [X] leggo il numero cliccato
  - [ ] SE il numero cliccato fa parte dell'array delle bombe
    - [ ] la cella deventa rossa
    - [ ] fine del gioco --> utente perde
  - [ ] ALTRIMENTI 
    - [ ] la cella diventa azzurra
    - [ ] SE questo numero non è stato gia cliccato precedentemente
      - [ ] aggiungere il numero all'array di "non bombe" cliccati
    - [ ] ALTRIMENTI se la lunghezza dell'array di "non bombe" è uguale al numero massimo di tentativi
      - [ ] fine del gioco --> utente vince 
***
**Output**
srampare in pagina se il giocatore ha vinto, con i tentativi effettuati, e se ha perso, sempre mostrando con quanti tentativi.