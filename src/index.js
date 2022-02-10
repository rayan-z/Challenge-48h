// Recupere la div app
const app = document.getElementById('app');

const bodyDiv = document.body

// Creation d'une div
const div = document.createElement('div');

bodyDiv.style.backgroundImage = "url('src/universe.jpg')";
bodyDiv.style.backgroundRepeat = 'no-repeat';
bodyDiv.style.backgroundSize = 'cover';



// Envoie div dans app
app.append(div);

console.log(app);