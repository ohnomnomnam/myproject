//starting the game
const inputWord = document.querySelector(`.box`);
const goButton = document.querySelector(`.goButton`);
const theWordBank = document.querySelector(`.wordBank`);
const lifeBar = document.querySelector(`.lifePoints`);
const life10 = document.querySelector(`.life10`);
const life9 = document.querySelector(`.life9`);
const life8 = document.querySelector(`.life8`);
const life7 = document.querySelector(`.life7`);
const life6 = document.querySelector(`.life6`);
const life5 = document.querySelector(`.life5`);
const life4 = document.querySelector(`.life4`);
const life3 = document.querySelector(`.life3`);
const life2 = document.querySelector(`.life2`);
const life1 = document.querySelector(`.life1`);
const buttonA = document.querySelector(`.A`);
const buttonB = document.querySelector(`.B`);
const buttonC = document.querySelector(`.C`);
const buttonD = document.querySelector(`.D`);
const buttonE = document.querySelector(`.E`);
const buttonF = document.querySelector(`.F`);
const buttonG = document.querySelector(`.G`);
const buttonH = document.querySelector(`.H`);
const buttonI = document.querySelector(`.I`);
const buttonJ = document.querySelector(`.J`);
const buttonK = document.querySelector(`.K`);
const buttonL = document.querySelector(`.L`);
const buttonM = document.querySelector(`.M`);
const buttonN = document.querySelector(`.N`);
const buttonO = document.querySelector(`.O`);
const buttonP = document.querySelector(`.P`);
const buttonQ = document.querySelector(`.Q`);
const buttonR = document.querySelector(`.R`);
const buttonS = document.querySelector(`.S`);
const buttonT = document.querySelector(`.T`);
const buttonU = document.querySelector(`.U`);
const buttonV = document.querySelector(`.V`);
const buttonW = document.querySelector(`.W`);
const buttonX = document.querySelector(`.X`);
const buttonY = document.querySelector(`.Y`);
const buttonZ = document.querySelector(`.Z`);
const arr = [];
const blankArr = [];
let lifePoints = 10;
let gamestart;
let tracker = 0;
let gameSetting = 0;
let wordLength;
let win;
let spaces;

goButton.addEventListener(`click`, theWordIs);
inputWord.addEventListener(`keyup`, pressenter);

inputWord.value = ``;
lifeBar.textContent = `HP: ${lifePoints}/10`;

function theWordIs(e) {
  let theWord = inputWord.value;
  //putting word into array
  if (inputWord.value !== ``) {
    theWord = theWord.toLowerCase();
    for (let i = 0; i < theWord.length; i++) {
      arr[i] = theWord.charAt(i);
      blankArr[i] = `__`;
    }
    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i].charCodeAt() < 32 ||
        (arr[i].charCodeAt() > 32 && arr[i].charCodeAt() < 65) ||
        (arr[i].charCodeAt() > 90 && arr[i].charCodeAt() < 97) ||
        arr[i].charCodeAt() > 122
      ) {
        if (alert(`Sorry no numbers or special characters :c\nNew Game?`)) {
        } else window.location.reload();
      }
      if (arr[i] == ` `) {
        if (arr[i] === ` ` && arr[i + 1] === ` `) {
          if (alert(`Too many spaces!\nNew Game?`)) {
          } else window.location.reload();
        }
        blankArr[i] = `,`;
        spaces++;
        tracker++;
      }
    }
    //creating word bank
    theWordBank.textContent = blankArr.join(` `);
    wordLength = blankArr.length;
    inputWord.value = ``;
    settings();
    starting();
  }
}

function pressenter(e) {
  if (e.keyCode === 13) {
    theWordIs();
  }
}

function alphabet(character) {
  console.log(`ok`);
  if (
    (inputWord.value < 65 || inputWord.value > 90) &&
    (inputWord.value < 97 || inputWord.value > 122)
  )
    console.log(`here`);
}

function hpFade() {
  if (lifePoints <= 9) {
    life10.classList.add("fadeaway");
    console.log(`fading`);
  }
  if (lifePoints <= 8) {
    life9.classList.add("fadeaway");
    console.log(`fading`);
  }
  if (lifePoints <= 7) {
    life8.classList.add("fadeaway");
    console.log(`fading`);
  }
  if (lifePoints <= 6) {
    life7.classList.add("fadeaway");
    console.log(`fading`);
  }
  if (lifePoints <= 5) {
    life6.classList.add("fadeaway");
    console.log(`fading`);
  }
  if (lifePoints <= 4) {
    life5.classList.add("fadeaway");
    console.log(`fading`);
  }
  if (lifePoints <= 3) {
    life4.classList.add("fadeaway");
    console.log(`fading`);
  }
  if (lifePoints <= 2) {
    life3.classList.add("fadeaway");
    console.log(`fading`);
  }
  if (lifePoints <= 1) {
    life2.classList.add("fadeaway");
    console.log(`fading`);
  }
  if (lifePoints <= 0) {
    life1.classList.add("fadeaway");
    console.log(`fading`);
    if (confirm(`Game Over. Refresh the page!`)) {
      location.reload();
    } else {
      location.reload();
    }
  }
  if (wordLength - tracker == 0) {
    if (confirm(`Yay you win! Play again?`)) {
      location.reload();
    } else {
      location.reload();
    }
  }
}

function settings() {
  goButton.classList.add("turnOffBox");
  buttonA.classList.remove("letter");
  buttonA.classList.add("letterActive");
  buttonB.classList.remove("letter");
  buttonB.classList.add("letterActive");
  buttonC.classList.remove("letter");
  buttonC.classList.add("letterActive");
  buttonD.classList.remove("letter");
  buttonD.classList.add("letterActive");
  buttonE.classList.remove("letter");
  buttonE.classList.add("letterActive");
  buttonF.classList.remove("letter");
  buttonF.classList.add("letterActive");
  buttonG.classList.remove("letter");
  buttonG.classList.add("letterActive");
  buttonH.classList.remove("letter");
  buttonH.classList.add("letterActive");
  buttonI.classList.remove("letter");
  buttonI.classList.add("letterActive");
  buttonJ.classList.remove("letter");
  buttonJ.classList.add("letterActive");
  buttonK.classList.remove("letter");
  buttonK.classList.add("letterActive");
  buttonL.classList.remove("letter");
  buttonL.classList.add("letterActive");
  buttonM.classList.remove("letter");
  buttonM.classList.add("letterActive");
  buttonN.classList.remove("letter");
  buttonN.classList.add("letterActive");
  buttonO.classList.remove("letter");
  buttonO.classList.add("letterActive");
  buttonP.classList.remove("letter");
  buttonP.classList.add("letterActive");
  buttonQ.classList.remove("letter");
  buttonQ.classList.add("letterActive");
  buttonR.classList.remove("letter");
  buttonR.classList.add("letterActive");
  buttonS.classList.remove("letter");
  buttonS.classList.add("letterActive");
  buttonT.classList.remove("letter");
  buttonT.classList.add("letterActive");
  buttonU.classList.remove("letter");
  buttonU.classList.add("letterActive");
  buttonV.classList.remove("letter");
  buttonV.classList.add("letterActive");
  buttonW.classList.remove("letter");
  buttonW.classList.add("letterActive");
  buttonX.classList.remove("letter");
  buttonX.classList.add("letterActive");
  buttonY.classList.remove("letter");
  buttonY.classList.add("letterActive");
  buttonZ.classList.remove("letter");
  buttonZ.classList.add("letterActive");
}

function starting() {
  gamestart = 1;
  let lettersUsed = [];
  inputWord.classList.add("turnOffBox");
  if (gamestart >= 1) {
    document.addEventListener(`keyup`, keyPress);
    buttonA.addEventListener(`click`, letterA);
    buttonB.addEventListener(`click`, letterB);
    buttonC.addEventListener(`click`, letterC);
    buttonD.addEventListener(`click`, letterD);
    buttonE.addEventListener(`click`, letterE);
    buttonF.addEventListener(`click`, letterF);
    buttonG.addEventListener(`click`, letterG);
    buttonH.addEventListener(`click`, letterH);
    buttonI.addEventListener(`click`, letterI);
    buttonJ.addEventListener(`click`, letterJ);
    buttonK.addEventListener(`click`, letterK);
    buttonL.addEventListener(`click`, letterL);
    buttonM.addEventListener(`click`, letterM);
    buttonN.addEventListener(`click`, letterN);
    buttonO.addEventListener(`click`, letterO);
    buttonP.addEventListener(`click`, letterP);
    buttonQ.addEventListener(`click`, letterQ);
    buttonR.addEventListener(`click`, letterR);
    buttonS.addEventListener(`click`, letterS);
    buttonT.addEventListener(`click`, letterT);
    buttonU.addEventListener(`click`, letterU);
    buttonV.addEventListener(`click`, letterV);
    buttonW.addEventListener(`click`, letterW);
    buttonX.addEventListener(`click`, letterX);
    buttonY.addEventListener(`click`, letterY);
    buttonZ.addEventListener(`click`, letterZ);

    function keyPress(press) {
      let letters = /^[a-z]/;

      if (!press.key.match(letters)) {
        return;
      }
      let findUsed = lettersUsed.find((x) => x == press.key);
      if (!findUsed) {
        let found = arr.find((x) => x == press.key);
        if (found == press.key) {
          for (let i = 0; i < arr.length; i++) {
            if (arr[i] === press.key) {
              blankArr[i] = press.key;
              tracker++;
            }
          }
          theWordBank.textContent = blankArr.join(` `);
          console.log(`Found it! HP is ${lifePoints}.`);
          console.log(`There are ${wordLength - tracker} letter(s) left.`);
          //buttonA.classList.add("letterOff");
          lifeBar.textContent = `HP: ${lifePoints}/10`;
        }
        if (!found) {
          lifePoints--;
          console.log(lifePoints);
          //buttonA.classList.add("letterOff");
          lifeBar.textContent = `HP: ${lifePoints}/10`;
        }
        hpFade();
        lettersUsed.push(press.key);
        console.log(lettersUsed);
        turnOffLetter(press.key);
      }
    }

    function turnOffLetter(letter) {
      if (lettersUsed.find((x) => x == letter) == `a`) {
        buttonA.classList.add("letterOff");
      } else if (lettersUsed.find((x) => x == letter) == `b`) {
        buttonB.classList.add("letterOff");
      } else if (lettersUsed.find((x) => x == letter) == `c`) {
        buttonC.classList.add("letterOff");
      } else if (lettersUsed.find((x) => x == letter) == `d`) {
        buttonD.classList.add("letterOff");
      } else if (lettersUsed.find((x) => x == letter) == `e`) {
        buttonE.classList.add("letterOff");
      } else if (lettersUsed.find((x) => x == letter) == `f`) {
        buttonF.classList.add("letterOff");
      } else if (lettersUsed.find((x) => x == letter) == `g`) {
        buttonG.classList.add("letterOff");
      } else if (lettersUsed.find((x) => x == letter) == `h`) {
        buttonH.classList.add("letterOff");
      } else if (lettersUsed.find((x) => x == letter) == `i`) {
        buttonI.classList.add("letterOff");
      } else if (lettersUsed.find((x) => x == letter) == `j`) {
        buttonJ.classList.add("letterOff");
      } else if (lettersUsed.find((x) => x == letter) == `k`) {
        buttonK.classList.add("letterOff");
      } else if (lettersUsed.find((x) => x == letter) == `l`) {
        buttonL.classList.add("letterOff");
      } else if (lettersUsed.find((x) => x == letter) == `m`) {
        buttonM.classList.add("letterOff");
      } else if (lettersUsed.find((x) => x == letter) == `n`) {
        buttonN.classList.add("letterOff");
      } else if (lettersUsed.find((x) => x == letter) == `o`) {
        buttonO.classList.add("letterOff");
      } else if (lettersUsed.find((x) => x == letter) == `p`) {
        buttonP.classList.add("letterOff");
      } else if (lettersUsed.find((x) => x == letter) == `q`) {
        buttonQ.classList.add("letterOff");
      } else if (lettersUsed.find((x) => x == letter) == `r`) {
        buttonR.classList.add("letterOff");
      } else if (lettersUsed.find((x) => x == letter) == `s`) {
        buttonS.classList.add("letterOff");
      } else if (lettersUsed.find((x) => x == letter) == `t`) {
        buttonT.classList.add("letterOff");
      } else if (lettersUsed.find((x) => x == letter) == `u`) {
        buttonU.classList.add("letterOff");
      } else if (lettersUsed.find((x) => x == letter) == `v`) {
        buttonV.classList.add("letterOff");
      } else if (lettersUsed.find((x) => x == letter) == `w`) {
        buttonW.classList.add("letterOff");
      } else if (lettersUsed.find((x) => x == letter) == `x`) {
        buttonX.classList.add("letterOff");
      } else if (lettersUsed.find((x) => x == letter) == `y`) {
        buttonY.classList.add("letterOff");
      } else if (lettersUsed.find((x) => x == letter) == `z`) {
        buttonZ.classList.add("letterOff");
      }
    }

    function letterA() {
      lettersUsed.push(`a`);
      let found = arr.find((x) => x === `a`);
      if (found === `a`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `a`) {
            blankArr[i] = `a`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr.join(` `);
        console.log(`Found it! HP is ${lifePoints}.`);
        console.log(`There are ${wordLength - tracker} letter(s) left.`);
        buttonA.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      if (found === undefined) {
        lifePoints--;
        console.log(lifePoints);
        buttonA.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      hpFade();
    }
    function letterB() {
      lettersUsed.push(`b`);
      let found = arr.find((x) => x === `b`);
      if (found === `b`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `b`) {
            blankArr[i] = `b`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr.join(` `);
        console.log(`Found it! HP is ${lifePoints}.`);
        console.log(`There are ${wordLength - tracker} letter(s) left.`);
        buttonB.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      if (found === undefined) {
        lifePoints--;
        console.log(lifePoints);
        buttonB.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      hpFade();
    }
    function letterC() {
      lettersUsed.push(`c`);
      let found = arr.find((x) => x === `c`);
      if (found === `c`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `c`) {
            blankArr[i] = `c`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr.join(` `);
        console.log(`Found it! HP is ${lifePoints}.`);
        console.log(`There are ${wordLength - tracker} letter(s) left.`);
        buttonC.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      if (found === undefined) {
        lifePoints--;
        console.log(lifePoints);
        buttonC.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      hpFade();
    }
    function letterD() {
      lettersUsed.push(`d`);
      let found = arr.find((x) => x === `d`);
      if (found === `d`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `d`) {
            blankArr[i] = `d`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr.join(` `);
        console.log(`Found it! HP is ${lifePoints}.`);
        console.log(`There are ${wordLength - tracker} letter(s) left.`);
        buttonD.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      if (found === undefined) {
        lifePoints--;
        console.log(lifePoints);
        buttonD.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      hpFade();
    }
    function letterE() {
      lettersUsed.push(`e`);
      let found = arr.find((x) => x === `e`);
      if (found === `e`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `e`) {
            blankArr[i] = `e`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr.join(` `);
        console.log(`Found it! HP is ${lifePoints}.`);
        console.log(`There are ${wordLength - tracker} letter(s) left.`);
        buttonE.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      if (found === undefined) {
        lifePoints--;
        console.log(lifePoints);
        buttonE.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      hpFade();
    }
    function letterF() {
      lettersUsed.push(`f`);
      let found = arr.find((x) => x === `f`);
      if (found === `f`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `f`) {
            blankArr[i] = `f`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr.join(` `);
        console.log(`Found it! HP is ${lifePoints}.`);
        console.log(`There are ${wordLength - tracker} letter(s) left.`);
        buttonF.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      if (found === undefined) {
        lifePoints--;
        console.log(lifePoints);
        buttonF.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      hpFade();
    }
    function letterG() {
      lettersUsed.push(`g`);
      let found = arr.find((x) => x === `g`);
      if (found === `g`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `g`) {
            blankArr[i] = `g`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr.join(` `);
        console.log(`Found it! HP is ${lifePoints}.`);
        console.log(`There are ${wordLength - tracker} letter(s) left.`);
        buttonG.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      if (found === undefined) {
        lifePoints--;
        console.log(lifePoints);
        buttonG.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      hpFade();
    }
    function letterH() {
      lettersUsed.push(`h`);
      let found = arr.find((x) => x === `h`);
      if (found === `h`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `h`) {
            blankArr[i] = `h`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr.join(` `);
        console.log(`Found it! HP is ${lifePoints}.`);
        console.log(`There are ${wordLength - tracker} letter(s) left.`);
        buttonH.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      if (found === undefined) {
        lifePoints--;
        console.log(lifePoints);
        buttonH.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      hpFade();
    }
    function letterI() {
      lettersUsed.push(`i`);
      let found = arr.find((x) => x === `i`);
      if (found === `i`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `i`) {
            blankArr[i] = `i`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr.join(` `);
        console.log(`Found it! HP is ${lifePoints}.`);
        console.log(`There are ${wordLength - tracker} letter(s) left.`);
        buttonI.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      if (found === undefined) {
        lifePoints--;
        console.log(lifePoints);
        buttonI.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      hpFade();
    }
    function letterJ() {
      lettersUsed.push(`j`);
      let found = arr.find((x) => x === `j`);
      if (found === `j`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `j`) {
            blankArr[i] = `j`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr.join(` `);
        console.log(`Found it! HP is ${lifePoints}.`);
        console.log(`There are ${wordLength - tracker} letter(s) left.`);
        buttonJ.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      if (found === undefined) {
        lifePoints--;
        console.log(lifePoints);
        buttonJ.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      hpFade();
    }
    function letterK() {
      lettersUsed.push(`k`);
      let found = arr.find((x) => x === `k`);
      if (found === `k`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `k`) {
            blankArr[i] = `k`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr.join(` `);
        console.log(`Found it! HP is ${lifePoints}.`);
        console.log(`There are ${wordLength - tracker} letter(s) left.`);
        buttonK.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      if (found === undefined) {
        lifePoints--;
        console.log(lifePoints);
        buttonK.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      hpFade();
    }
    function letterL() {
      lettersUsed.push(`l`);
      let found = arr.find((x) => x === `l`);
      if (found === `l`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `l`) {
            blankArr[i] = `l`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr.join(` `);
        console.log(`Found it! HP is ${lifePoints}.`);
        console.log(`There are ${wordLength - tracker} letter(s) left.`);
        buttonL.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      if (found === undefined) {
        lifePoints--;
        console.log(lifePoints);
        buttonL.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      hpFade();
    }
    function letterM() {
      lettersUsed.push(`m`);
      let found = arr.find((x) => x === `m`);
      if (found === `m`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `m`) {
            blankArr[i] = `m`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr.join(` `);
        console.log(`Found it! HP is ${lifePoints}.`);
        console.log(`There are ${wordLength - tracker} letter(s) left.`);
        buttonM.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      if (found === undefined) {
        lifePoints--;
        console.log(lifePoints);
        buttonM.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      hpFade();
    }
    function letterN() {
      lettersUsed.push(`n`);
      let found = arr.find((x) => x === `n`);
      if (found === `n`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `n`) {
            blankArr[i] = `n`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr.join(` `);
        console.log(`Found it! HP is ${lifePoints}.`);
        console.log(`There are ${wordLength - tracker} letter(s) left.`);
        buttonN.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      if (found === undefined) {
        lifePoints--;
        console.log(lifePoints);
        buttonN.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      hpFade();
    }
    function letterO() {
      lettersUsed.push(`o`);
      let found = arr.find((x) => x === `o`);
      if (found === `o`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `o`) {
            blankArr[i] = `o`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr.join(` `);
        console.log(`Found it! HP is ${lifePoints}.`);
        console.log(`There are ${wordLength - tracker} letter(s) left.`);
        buttonO.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      if (found === undefined) {
        lifePoints--;
        console.log(lifePoints);
        buttonO.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      hpFade();
    }
    function letterP() {
      lettersUsed.push(`p`);
      let found = arr.find((x) => x === `p`);
      if (found === `p`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `p`) {
            blankArr[i] = `p`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr.join(` `);
        console.log(`Found it! HP is ${lifePoints}.`);
        console.log(`There are ${wordLength - tracker} letter(s) left.`);
        buttonP.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      if (found === undefined) {
        lifePoints--;
        console.log(lifePoints);
        buttonP.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      hpFade();
    }
    function letterQ() {
      lettersUsed.push(`q`);
      let found = arr.find((x) => x === `q`);
      if (found === `q`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `q`) {
            blankArr[i] = `q`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr.join(` `);
        console.log(`Found it! HP is ${lifePoints}.`);
        console.log(`There are ${wordLength - tracker} letter(s) left.`);
        buttonQ.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      if (found === undefined) {
        lifePoints--;
        console.log(lifePoints);
        buttonQ.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      hpFade();
    }
    function letterR() {
      lettersUsed.push(`r`);
      let found = arr.find((x) => x === `r`);
      if (found === `r`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `r`) {
            blankArr[i] = `r`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr.join(` `);
        console.log(`Found it! HP is ${lifePoints}.`);
        console.log(`There are ${wordLength - tracker} letter(s) left.`);
        buttonR.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      if (found === undefined) {
        lifePoints--;
        console.log(lifePoints);
        buttonR.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      hpFade();
    }
    function letterS() {
      lettersUsed.push(`s`);
      let found = arr.find((x) => x === `s`);
      if (found === `s`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `s`) {
            blankArr[i] = `s`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr.join(` `);
        console.log(`Found it! HP is ${lifePoints}.`);
        console.log(`There are ${wordLength - tracker} letter(s) left.`);
        buttonS.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      if (found === undefined) {
        lifePoints--;
        console.log(lifePoints);
        buttonS.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      hpFade();
    }
    function letterT() {
      lettersUsed.push(`t`);
      let found = arr.find((x) => x === `t`);
      if (found === `t`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `t`) {
            blankArr[i] = `t`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr.join(` `);
        console.log(`Found it! HP is ${lifePoints}.`);
        console.log(`There are ${wordLength - tracker} letter(s) left.`);
        buttonT.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      if (found === undefined) {
        lifePoints--;
        console.log(lifePoints);
        buttonT.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      hpFade();
    }
    function letterU() {
      lettersUsed.push(`u`);
      let found = arr.find((x) => x === `u`);
      if (found === `u`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `u`) {
            blankArr[i] = `u`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr.join(` `);
        console.log(`Found it! HP is ${lifePoints}.`);
        console.log(`There are ${wordLength - tracker} letter(s) left.`);
        buttonU.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      if (found === undefined) {
        lifePoints--;
        console.log(lifePoints);
        buttonU.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      hpFade();
    }
    function letterV() {
      lettersUsed.push(`v`);
      let found = arr.find((x) => x === `v`);
      if (found === `v`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `v`) {
            blankArr[i] = `v`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr.join(` `);
        console.log(`Found it! HP is ${lifePoints}.`);
        console.log(`There are ${wordLength - tracker} letter(s) left.`);
        buttonV.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      if (found === undefined) {
        lifePoints--;
        console.log(lifePoints);
        buttonV.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      hpFade();
    }
    function letterW() {
      lettersUsed.push(`w`);
      let found = arr.find((x) => x === `w`);
      if (found === `w`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `w`) {
            blankArr[i] = `w`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr.join(` `);
        console.log(`Found it! HP is ${lifePoints}.`);
        console.log(`There are ${wordLength - tracker} letter(s) left.`);
        buttonW.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      if (found === undefined) {
        lifePoints--;
        console.log(lifePoints);
        buttonW.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      hpFade();
    }
    function letterX() {
      lettersUsed.push(`x`);
      let found = arr.find((x) => x === `x`);
      if (found === `x`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `x`) {
            blankArr[i] = `x`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr.join(` `);
        console.log(`Found it! HP is ${lifePoints}.`);
        console.log(`There are ${wordLength - tracker} letter(s) left.`);
        buttonX.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      if (found === undefined) {
        lifePoints--;
        console.log(lifePoints);
        buttonX.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      hpFade();
    }
    function letterY() {
      lettersUsed.push(`y`);
      let found = arr.find((x) => x === `y`);
      if (found === `y`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `y`) {
            blankArr[i] = `y`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr.join(` `);
        console.log(`Found it! HP is ${lifePoints}.`);
        console.log(`There are ${wordLength - tracker} letter(s) left.`);
        buttonY.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      if (found === undefined) {
        lifePoints--;
        console.log(lifePoints);
        buttonY.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      hpFade();
    }
    function letterZ() {
      lettersUsed.push(`z`);
      let found = arr.find((x) => x === `z`);
      if (found === `z`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `z`) {
            blankArr[i] = `z`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr.join(` `);
        console.log(`Found it! HP is ${lifePoints}.`);
        console.log(`There are ${wordLength - tracker} letter(s) left.`);
        buttonZ.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      if (found === undefined) {
        lifePoints--;
        console.log(lifePoints);
        buttonZ.classList.add("letterOff");
        lifeBar.textContent = `HP: ${lifePoints}/10`;
      }
      hpFade();
    }
  }
}
