// Gerar cores
const balls = document.querySelectorAll('.ball');
let array = [];
const answer = document.querySelector('#answer');
const score = document.querySelector('#score');
const button = document.querySelector('#reset-game');
let number = 0;

button.addEventListener('click', function() {
  array=[];
  number = 0;
  ballsGenerate();
});

let contador = 0;


function random() {
  number = [Math.floor(Math.random() * (0 + 256)) + 0];
  return number;
}

// mudar as cores das esferas
function ballsGenerate() {
  // cria array com as cores 
  for (let i = 0; i < balls.length; i = i + 1) {
    const color = (random() + ', ' + random() + ', ' + random());
    balls[i].style.backgroundColor = 'rgb('+color+')';
    array.push(color);
    let a = balls[i].style.backgroundColor;
    console.log(a);
    }
    const rgbColor = array[Math.floor(array.length * Math.random())];
    // seleciona uma cor para colocar no parágrafo
    const textColor = document.getElementById('rgb-color');
    const rgbNum = '('+rgbColor+')';
    textColor.innerHTML = rgbNum; 

    for (let i = 0; i < balls.length; i = i + 1) {
      balls[i].addEventListener('click', function() {
        
        if ( balls[i].style.backgroundColor == 'rgb'+rgbNum) {
          answer.innerHTML = 'Acertou!';
          contador += 3;
          score.innerHTML=(contador);
        }
        else {
          answer.innerHTML = ('Errou! Tente novamente!');
        }
      
      });
    }

  }


window.onload = function() {
  ballsGenerate();
}
