// generera ett random nummer
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log('random nummer', randomNumber);


const userInput = document.querySelector('.userInput');
console.log(typeof userInput);
const button = document.querySelector('.button');
const ul = document.querySelector('.ul')
let maxGuess = 0;
const tryAgain = document.querySelector('.tryAgain');

//kod som körs när man trycker ner knappen
button.addEventListener('click', userGuess);
function userGuess(event) {
    console.log('hej');
    const userNumber = Number(userInput.value)
    console.log(userNumber);
    const myLi = document.createElement('li');
    myLi.innerText = userNumber
    ul.appendChild(myLi)


    // Om ul.children.length = 6 så blir det GAME OVER
    if (userNumber == randomNumber) {
        console.log('user guess correct');
        document.querySelector('.result').textContent = 'YOU WON!';
        document.querySelector('body').style.backgroundColor = '#7AFE7A'
        button.setAttribute('disabled', '');
    } else if (userNumber < randomNumber) {
        console.log('user guess too low');
        document.querySelector('.result').textContent = 'Too low';
        maxGuess++;
        console.log('maxguess', maxGuess);

    } else if (userNumber > randomNumber) {
        console.log('user guess too high');
        document.querySelector('.result').textContent = 'Too high';
        maxGuess++;

    }
    if (maxGuess == 6) {
        console.log('game over');
        button.setAttribute('disabled', '');
        document.querySelector('.result').textContent = 'GAME OVER';
        document.querySelector('body').style.backgroundColor = '#FE4452'
    } if (userNumber > 100 || userNumber < 1) {
        document.querySelector('.result').textContent = 'Skriv ett nummer mellan 1-100'
    }

}
tryAgain.addEventListener('click', function () {
    location.reload();
    console.log(tryAgain);
});