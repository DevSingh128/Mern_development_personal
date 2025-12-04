let randomnumber = Math.floor(Math.random()*100 + 1)
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworhi = document.querySelector('.lowOrHi') 
const startover = document.querySelector('.resultParas')

const p = document.createElement('p')
let prevGuess = []
let numGuess = 1;
let playGame = true

if(playGame) {
    submit.addEventListener('click', (e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert('please enter a valid number')
    }
    else if(guess < 1){
        alert('please enter a valid number more than 1')
    }
    else if(guess > 100){
        alert('please enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(prevGuess.length === 11){
            cleanup(guess)
            displayMessage(`GAME OVER !random number was ${randomnumber}`)
            endGame()
        }
        else{
            cleanup(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomnumber){
        displayMessage(`you guessed it right`)
    }
    else if(guess < randomnumber){
        displayMessage(`number is too low`)
    }
    else if(guess > randomnumber){
        displayMessage(`number is too high`)
    }
}

function cleanup(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}     `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    loworhi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newgame">start new game</h2>`
    startover.appendChild(p)
    playGame = false
    newgame()
}

function newgame(){
    const newgamebutton = document.querySelector('#newgame')
    newgamebutton.addEventListener('click',function(e){
        randomnumber = parseInt(Math.floor(Math.random()*100 + 1))
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startover.removeChild(p)
        playGame = true
    })
}
// console.log(document.querySelector('#newgame'))
