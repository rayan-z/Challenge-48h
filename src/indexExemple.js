// Recupere la div app
const app = document.getElementById('app');

const bodyDiv = document.body

// Creation de la div de depart
const startDiv = document.createElement('div');

// Creation de la div left
const splitLeft = document.createElement('div');
splitLeft.className = 'split left';

// Creation de la div right
const splitRight = document.createElement('div');
splitRight.className = 'split right';

// Creation du timer avec la balise h
const timer = document.createElement('h3');
timer.id = 'timer';

//Creation de la balise p
//const txt = document.createElement('p');

const iframe = document.createElement('div');
iframe.innerHTML = '<widgetbot server="941334066718990346" channel="941334067163582485" width="800" height="600"></widgetbot>';
iframe.style.display = 'none';

// Creation du boutton
const startButton = document.createElement('button');
startButton.id = 'startButton';
startButton.innerText = 'commencer';

// Envoie div dans app
app.append(startDiv);

startDiv.append(startButton);
app.append(splitLeft);
app.append(splitRight);
splitRight.append(timer);
splitLeft.append(iframe);


/** COMPTE A REBOURS **/

const addMinutes =  function (dt, minutes) {
    return new Date(dt.getTime() + (minutes*60000)+2000);
}

let win = false;

const startTimer = () => {
    let currentDate = new Date();
    let newDate = addMinutes(currentDate, 15);
    setInterval(function () {

        let now = new Date().getTime();


        let distance = newDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timer.innerText = minutes +":"+ seconds;

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval();
            timer.innerText = "GAME OVER";
        }

        if(win){
            clearInterval();
            timer.innerText = "VICTOIRE !!";
        }
    }, 1000);
}

const winTimer = () => {
    win = true;
}

// Creation du boutton
const submitButton = document.createElement('button');
submitButton.id = 'submitButton';
submitButton.innerText = 'Valider';

const firstResponse = 'Bonne reponse !!!';
const secondResponse = 'Mauvaise reponse';
const password = '0xci7ytewrk3m';

// Creation de l'input
const input = document.createElement('input');
input.id='input';

startButton.addEventListener('click', () => {
    iframe.style.display = 'contents';
    startDiv.remove();
    startButton.remove();

    splitRight.append(input);
    splitRight.append(submitButton);
    startTimer();
})

// Creation du message d'erreur
const errorMessage = document.createElement('p');
errorMessage.style.color = 'red';
errorMessage.id = 'errorMessage';
errorMessage.className = 'errorMessage';
splitRight.append(errorMessage);

submitButton.addEventListener('click', () => {
    let res = input.value;

    if(res == password){
        input.disabled = true;
        errorMessage.innerText = firstResponse;
        errorMessage.style.color = 'green';
        winTimer();
    }else{
        errorMessage.innerText = secondResponse;
        input.disabled = true;
        setTimeout(function (){
            errorMessage.innerText = '';
            input.disabled = false;
        }, 3000)
    }
})