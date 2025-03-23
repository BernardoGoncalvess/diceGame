var randomizeNumber1 = Math.floor(Math.random() * 6 + 1); // Numero aleatorio de 1-6

var randomDiceChoice1 = 'dice' + randomizeNumber1 + '.png'; // diceRandomNumber1-6.png

var randomImageSource1 = 'imgs/' + randomDiceChoice1; // imgs/diceRandomNumber1-6.png

var diceResult1 = document.querySelectorAll("img")[0]; // Seleciona a 1a imagem

diceResult1.setAttribute("src", randomImageSource1);

var randomizeNumber2 = Math.floor(Math.random() * 6 + 1); // Numero aleatorio de 1-6

var randomDiceChoice2 = 'dice' + randomizeNumber2 + '.png'; 

var randomImageSource2 = 'imgs/' + randomDiceChoice2;

var diceResult2 = document.querySelectorAll("img")[1];

diceResult2.setAttribute("src", randomImageSource2);

// Mudar titulo a combinar com o resultado 

if (randomizeNumber1 > randomizeNumber2) { // compara o resultado e ve se o Player 1 tem um valor mais alto que o 2
    document.querySelector('h1').innerHTML = "🚩 Player 1 wins!"
} else if (randomizeNumber1 < randomizeNumber2) { // compara o resultado e ve se o Player 2 tem um valor mais baixo que o 1
    document.querySelector('h1').innerHTML = "Player 2 wins! 🚩"
} else {
    document.querySelector('h1').innerHTML = "🚩 Draw! 🚩"
}