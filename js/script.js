const btnPlay = document.getElementById("play-btn");
btnPlay.addEventListener("click", play);
const result = document.querySelector(".result")

let notBomb = [];
let myScore = 0;
let maxClick = 0;
let gameOver = false

// funzione al play del button
function play() {
  gameOver = false;
  myScore = 0;
  result.innerHTML = "";

  // aggiungo class grid 
  const elemGrid = document.querySelector(".wrapper > div");
  elemGrid.classList.add("grid");

  // seleziono i valori dell'input choice
  let level = document.getElementById("choose-level").value;

  // scegliamo il tipo di difficoltà, e poi passiamo al ciclo for
  let gridSize = "";

  if(level === 'Easy'){
    gridSize = numArray(100);
  } else if (level === 'Medium') {
    gridSize = numArray(81);
  } else if (level === 'Hard') {
    gridSize = numArray(49)
  };

  maxClick = parseInt(gridSize.length - 16);
  console.log(maxClick);

  // generare le bombe
  const bombs = generateBombs(gridSize.length);
  console.log(bombs, "const = bombs");

  // creo la griglia
  const grid = document.querySelector(".grid");
  grid.classList.remove("bg-loss");
  grid.innerHTML = "";

  // creo il ciclo for per l'array
  for (let i = 0; i < gridSize.length; i++) {
    const arrayI = gridSize[i];
    const div = document.createElement("div");
    div.innerHTML = `<span>${arrayI}</span>`;
    div.classList.add('cell');

    if(level === 'Easy'){
      div.classList.add('easy');

    } else if (level === 'Medium') {
      div.classList.add('medium');

    } else if (level === 'Hard') {
      div.classList.add('hard');
    };

    // al click di ogni casella si colora di blue
    div.addEventListener("click", function () {
      const clickNumber = parseInt(this.textContent);
      console.log(clickNumber);
      if(!gameOver) {

        if (bombs.includes(clickNumber)) {
          console.log("Hai trovato una Bomba!");
          result.innerHTML = `HAI PERSO DOPO ${myScore} TENTATIVI`;
          this.classList.add("boom");
          grid.classList.add("bg-loss");
          gameOver = true;

        } else {
          this.classList.add("safe");
          this.classList.add("unclicked");
          myScore ++;
          console.log("il tuo punteggio è di: ", myScore);
        };

        if(myScore == maxClick) {
          result.innerHTML = "COMPLIMENTI HAI VINTOOO!!!"
          gameOver = true;
        };

      };
      
      return myScore;

    });

    grid.append(div);

  };
};

/***************************************************************************************/

// Creiamo la funzione che mi dia come risultato un array che va da 1 fino a 100, 81, 49
function numArray(num) {
  const numbers = [];

  let i = 1;
  while (numbers.length < num) {
    numbers.push(i);
    i++;
  };
  return numbers;
};

// Funzione che genera un numero random
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Funzione che genera un array di 16 numeri casuali diversi tra loro e senza ripetizioni compresi tra 1 e max
function generateBombs(max) {
  const result = [];
  while (result.length < 16) {
    const rndNum = getRndInteger(1, max);
    if(!result.includes(rndNum)) {
      result.push(rndNum)
    };
  };
  return result;
};

// funzione per terminare il gioco
function endGame(isWin) {
  
}