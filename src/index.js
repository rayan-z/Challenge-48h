// Recupere la div app
const app = document.getElementById('app');

const bodyDiv = document.body

// Creation de la div de depart
const startDiv = document.createElement('div');

// Creation de la div left
const splitLeft = document.createElement('div');
splitLeft.id = 'split left';

// Creation de la div right
const splitRight = document.createElement('div');
splitRight.id = 'split right';

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
    }, 1000);
}

startButton.addEventListener('click', () => {
    iframe.style.display = 'contents';
    startDiv.remove();
    startButton.remove();

    // Creation de l'input
    const input = document.createElement('input');
    input.id='input';

    // Creation du boutton
    const submitButton = document.createElement('button');
    submitButton.id = 'submitButton';
    submitButton.innerText = 'Valider';


    splitRight.append(input);
    splitRight.append(submitButton);
    startTimer();
})