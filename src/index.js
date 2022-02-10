// Recupere la div app
const app = document.getElementById('app');

const bodyDiv = document.body

// Creation d'une div
const startDiv = document.createElement('div');

// Creation du timer avec la balise h
const timer = document.createElement('h3');
timer.id = 'timer';

// Creation du boutton
const startButton = document.createElement('button');
startButton.innerText = 'commencer';

// Envoie div dans app
app.append(startDiv);

startDiv.append(startButton);

startDiv.append(timer);


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
            timer.innerText = "EXPIRED";
        }
    }, 1000);
}




startButton.addEventListener('click', () => {
    startButton.remove();
    startTimer()
})
