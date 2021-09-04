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
const buttonA = document.querySelector(`.letterA`);
const buttonB = document.querySelector(`.letterB`);
const buttonC = document.querySelector(`.letterC`);
const buttonD = document.querySelector(`.letterD`);
const buttonE = document.querySelector(`.letterE`);
const buttonF = document.querySelector(`.letterF`);
const buttonG = document.querySelector(`.letterG`);
const buttonH = document.querySelector(`.letterH`);
const buttonI = document.querySelector(`.letterI`);
const buttonJ = document.querySelector(`.letterJ`);
const buttonK = document.querySelector(`.letterK`);
const buttonL = document.querySelector(`.letterL`);
const buttonM = document.querySelector(`.letterM`);
const buttonN = document.querySelector(`.letterN`);
const buttonO = document.querySelector(`.letterO`);
const buttonP = document.querySelector(`.letterP`);
const buttonQ = document.querySelector(`.letterQ`);
const buttonR = document.querySelector(`.letterR`);
const buttonS = document.querySelector(`.letterS`);
const buttonT = document.querySelector(`.letterT`);
const buttonU = document.querySelector(`.letterU`);
const buttonV = document.querySelector(`.letterV`);
const buttonW = document.querySelector(`.letterW`);
const buttonX = document.querySelector(`.letterX`);
const buttonY = document.querySelector(`.letterY`);
const buttonZ = document.querySelector(`.letterZ`);
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
      if (arr[i] == ` `) {
        blankArr[i] = ` `;
        spaces++;
      }
    }
    //creating word bank
    theWordBank.textContent = blankArr;
    wordLength = arr.length;
    inputWord.value = ``;
    settings();
    starting();
  }
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
    }
  }
  if (wordLength - tracker == 0) {
    if (confirm(`Yay you win! Play again?`)) {
      location.reload();
    }
  }
}

function settings() {
  goButton.classList.remove("goButton");
  goButton.classList.add("letterOff");
  buttonA.classList.remove("letterA");
  buttonA.classList.add("letterActive");
  buttonB.classList.remove("letterB");
  buttonB.classList.add("letterActive");
  buttonC.classList.remove("letterC");
  buttonC.classList.add("letterActive");
  buttonD.classList.remove("letterD");
  buttonD.classList.add("letterActive");
  buttonE.classList.remove("letterE");
  buttonE.classList.add("letterActive");
  buttonF.classList.remove("letterF");
  buttonF.classList.add("letterActive");
  buttonG.classList.remove("letterG");
  buttonG.classList.add("letterActive");
  buttonH.classList.remove("letterH");
  buttonH.classList.add("letterActive");
  buttonI.classList.remove("letterI");
  buttonI.classList.add("letterActive");
  buttonJ.classList.remove("letterJ");
  buttonJ.classList.add("letterActive");
  buttonK.classList.remove("letterK");
  buttonK.classList.add("letterActive");
  buttonL.classList.remove("letterL");
  buttonL.classList.add("letterActive");
  buttonM.classList.remove("letterM");
  buttonM.classList.add("letterActive");
  buttonN.classList.remove("letterN");
  buttonN.classList.add("letterActive");
  buttonO.classList.remove("letterO");
  buttonO.classList.add("letterActive");
  buttonP.classList.remove("letterP");
  buttonP.classList.add("letterActive");
  buttonQ.classList.remove("letterQ");
  buttonQ.classList.add("letterActive");
  buttonR.classList.remove("letterR");
  buttonR.classList.add("letterActive");
  buttonS.classList.remove("letterS");
  buttonS.classList.add("letterActive");
  buttonT.classList.remove("letterT");
  buttonT.classList.add("letterActive");
  buttonU.classList.remove("letterU");
  buttonU.classList.add("letterActive");
  buttonV.classList.remove("letterV");
  buttonV.classList.add("letterActive");
  buttonW.classList.remove("letterW");
  buttonW.classList.add("letterActive");
  buttonX.classList.remove("letterX");
  buttonX.classList.add("letterActive");
  buttonY.classList.remove("letterY");
  buttonY.classList.add("letterActive");
  buttonZ.classList.remove("letterZ");
  buttonZ.classList.add("letterActive");
}

function starting() {
  gamestart = 1;
  console.log(`game starting`);
  if (gamestart >= 1) {
    console.log(`here!`);
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

    function letterA() {
      let found = arr.find((x) => x === `a`);
      if (found === `a`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `a`) {
            blankArr[i] = `a`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr;
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
      let found = arr.find((x) => x === `b`);
      if (found === `b`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `b`) {
            blankArr[i] = `b`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr;
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
      let found = arr.find((x) => x === `c`);
      if (found === `c`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `c`) {
            blankArr[i] = `c`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr;
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
      let found = arr.find((x) => x === `d`);
      if (found === `d`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `d`) {
            blankArr[i] = `d`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr;
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
      let found = arr.find((x) => x === `e`);
      if (found === `e`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `e`) {
            blankArr[i] = `e`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr;
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
      let found = arr.find((x) => x === `f`);
      if (found === `f`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `f`) {
            blankArr[i] = `f`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr;
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
      let found = arr.find((x) => x === `g`);
      if (found === `g`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `g`) {
            blankArr[i] = `g`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr;
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
      let found = arr.find((x) => x === `h`);
      if (found === `h`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `h`) {
            blankArr[i] = `h`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr;
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
      let found = arr.find((x) => x === `i`);
      if (found === `i`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `i`) {
            blankArr[i] = `i`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr;
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
      let found = arr.find((x) => x === `j`);
      if (found === `j`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `j`) {
            blankArr[i] = `j`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr;
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
      let found = arr.find((x) => x === `k`);
      if (found === `k`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `k`) {
            blankArr[i] = `k`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr;
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
      let found = arr.find((x) => x === `l`);
      if (found === `l`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `l`) {
            blankArr[i] = `l`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr;
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
      let found = arr.find((x) => x === `m`);
      if (found === `m`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `m`) {
            blankArr[i] = `m`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr;
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
      let found = arr.find((x) => x === `n`);
      if (found === `n`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `n`) {
            blankArr[i] = `n`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr;
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
      let found = arr.find((x) => x === `o`);
      if (found === `o`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `o`) {
            blankArr[i] = `o`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr;
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
      let found = arr.find((x) => x === `p`);
      if (found === `p`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `p`) {
            blankArr[i] = `p`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr;
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
      let found = arr.find((x) => x === `q`);
      if (found === `q`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `q`) {
            blankArr[i] = `q`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr;
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
      let found = arr.find((x) => x === `r`);
      if (found === `r`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `r`) {
            blankArr[i] = `r`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr;
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
      let found = arr.find((x) => x === `s`);
      if (found === `s`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `s`) {
            blankArr[i] = `s`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr;
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
      let found = arr.find((x) => x === `t`);
      if (found === `t`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `t`) {
            blankArr[i] = `t`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr;
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
      let found = arr.find((x) => x === `u`);
      if (found === `u`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `u`) {
            blankArr[i] = `u`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr;
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
      let found = arr.find((x) => x === `v`);
      if (found === `v`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `v`) {
            blankArr[i] = `v`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr;
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
      let found = arr.find((x) => x === `w`);
      if (found === `w`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `w`) {
            blankArr[i] = `w`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr;
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
      let found = arr.find((x) => x === `x`);
      if (found === `x`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `x`) {
            blankArr[i] = `x`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr;
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
      let found = arr.find((x) => x === `y`);
      if (found === `y`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `y`) {
            blankArr[i] = `y`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr;
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
      let found = arr.find((x) => x === `z`);
      if (found === `z`) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === `z`) {
            blankArr[i] = `z`;
            tracker++;
          }
        }
        theWordBank.textContent = blankArr;
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
