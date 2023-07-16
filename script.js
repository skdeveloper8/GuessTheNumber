let random = Math.floor(Math.random() * 100 + 1);
console.log(random);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true


if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        //   console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess) || guess > 100 || guess < 1) {
        alert('Please Enter a valid number')
    }
    else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Rndom Number Was ${random}`)
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === random) {
        displayMessage("you guesssed right")
        endGame()


    }
    else if (guess < random) {
        displayMessage("Number is low");

    }
    else if(guess > random) {
        displayMessage("Numer is high");
    }

}
function displayGuess(guess) {
   userInput.value=''
   guessSlot.innerHTML+=`${guess} `;
   numGuess++;
   remaining.innerHTML=`${11-numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML=`<h2>${message}</h2>`;

}
function endGame() {
   userInput.value=''
   userInput.setAttribute('disabled','')
   p.classList.add('button')
   p.innerHTML="<h2 id='newGame'>Start New Game</h2>";
   StartOver.appendChild(p)
   playGame=false;
   newGame();

}


function newGame() {
   const newGameButton=document.querySelector('#newGame')
   newGameButton.addEventListener('click',function(e){
    random = Math.floor(Math.random() * 100 + 1);
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-numGuess}`;
    userInput.removeAttribute('disabled')
    StartOver.removeChild(p)
    playGame=true
   })
}



