// Recupere la div app
const app = document.getElementById('app');

const bodyDiv = document.body

// Creation d'une div
const startDiv = document.createElement('div');


const startButton = document.createElement('button');
startButton.innerText = 'commencer';

// Envoie div dans app
app.append(startDiv);

startDiv.append(startButton);