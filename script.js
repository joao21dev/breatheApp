const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 6000
const breatheTime = 3000;


breathAnimation();

function breathAnimation() {
  text.innerText = 'Inspire';
  container.className = 'container grow';

    setTimeout(() => {
      text.innerText = 'Expire';
      container.className = 'container shrink';
    }, 
  
    breatheTime);
}

setInterval(breathAnimation, totalTime);

