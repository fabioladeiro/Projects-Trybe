// Ao carregar a página, a cor preta da paleta já deve estar selecionada para pintar os pixels
function blackColor() {
  document.getElementById('firstColor').className = 'color selected';
}

window.onload = blackColor;

// Ao clicar em uma das cores da paleta,
// a cor selecionada na paleta é que vai ser usada para preencher os pixels
const firstColor = document.getElementById('firstColor');
firstColor.addEventListener('click', function () {
  document.getElementById('firstColor').className = 'color selected';
  document.getElementById('secondColor').className = 'color';
  document.getElementById('thirdColor').className = 'color';
  document.getElementById('fourthColor').className = 'color';
  document.querySelector('.selected').style.backgroundColor = 'black';
});

const secondColor = document.getElementById('secondColor');
secondColor.addEventListener('click', function () {
  document.getElementById('firstColor').className = 'color';
  document.getElementById('thirdColor').className = 'color';
  document.getElementById('fourthColor').className = 'color';
  secondColor.className = 'color selected';
  document.querySelector('.selected').style.backgroundColor = 'green';
});

const thirdColor = document.getElementById('thirdColor');
thirdColor.addEventListener('click', function () {
  document.getElementById('firstColor').className = 'color';
  document.getElementById('secondColor').className = 'color';
  document.getElementById('fourthColor').className = 'color';
  thirdColor.className = 'color selected';
  document.querySelector('.selected').style.backgroundColor = 'blue';
});

const fourthColor = document.getElementById('fourthColor');
fourthColor.addEventListener('click', function () {
  document.getElementById('firstColor').className = 'color';
  document.getElementById('secondColor').className = 'color';
  document.getElementById('thirdColor').className = 'color';
  fourthColor.className = 'color selected';
  document.querySelector('.selected').style.backgroundColor = 'red';
});

firstColor.style.backgroundColor = 'black';
secondColor.style.backgroundColor = 'green';
thirdColor.style.backgroundColor = 'blue';
fourthColor.style.backgroundColor = 'red';

// Ao clicar em um pixel com uma cor selecionada, o pixel deve ser preenchido com esta cor
const pixelBoard = document.querySelector('#pixel-board');
pixelBoard.addEventListener('click', function (event) {
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = selectedColor;
  document.getElementById('pixel-board').style.backgroundColor = 'white';
});

// Crie um botão que, ao ser clicado, limpa o quadro,
// preenchendo a cor de todos seus pixels com branco
const btnClean = document.querySelector('#clear-board');
const pixel = document.querySelectorAll('.pixel');
btnClean.addEventListener('click', function () {
  pixelBoard.style.backgroundColor = 'white';
  for (let i = 0; i < pixel.length; i = 1 + i) {
    pixel[i].style.backgroundColor = 'white';
  }
});

const btnInsert = document.querySelector('#generate-board');
btnInsert.addEventListener('click', function () {
  const inputValue = document.querySelector('#board-size');
  let number = inputValue.value;
  if (number<5) {
    number = 5;
  } else if (number>50) {
    number = 50;
  }
  pixelBoard.style.width = number*40 + number*2 + 'px';
  pixelBoard.style.height = number*40 + number*2 + 'px';
  pixelBoard.innerHTML="";
  for (let i = 0; i < number*number; i = 1 + i) {
    const createPixel = document.createElement('div');
    createPixel.className = 'pixel';
    pixelBoard.appendChild(createPixel);
  }
});
