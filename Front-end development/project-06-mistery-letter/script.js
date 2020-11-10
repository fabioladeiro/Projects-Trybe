const paragraph = document.getElementById('carta-gerada');
const inputInsert = document.getElementById('carta-texto');
const btnCreate = document.getElementById('criar-carta');
const grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
const grupoTamanho = ['medium', 'big', 'reallybig'];
const grupoRotacao = ['rotateleft', 'rotateright'];
const grupoInclinacao = ['skewleft', 'skewright'];
const aleatory = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];
let contador = 0;
const countWords = document.getElementById('carta-contador');

function letterGenerate() {
  contador = 0;
  paragraph.innerHTML = null;
  const arrayWords = inputInsert.value.split(' ');
  for (let i = 0; i < arrayWords.length; i = i + 1) {
    const createSpan = document.createElement('span');
    createSpan.innerHTML = arrayWords[i];
    createSpan.className = grupoEstilo[Math.floor(Math.random() * grupoEstilo.length)];
    createSpan.classList.add(grupoTamanho[Math.floor(Math.random() * grupoTamanho.length)]);
    createSpan.classList.add(grupoRotacao[Math.floor(Math.random() * grupoRotacao.length)]);
    createSpan.classList.add(grupoInclinacao[Math.floor(Math.random() * grupoInclinacao.length)]);
    contador += 1;
    paragraph.appendChild(createSpan);
  }
  countWords.innerHTML = contador;
  aleatoryCreate();
}

function aleatoryCreate() {
  const spanTag = document.querySelectorAll('span');
  console.log(spanTag);
  for (let i = 0; i < spanTag.length; i = i + 1) {
    spanTag[i].addEventListener('click', function() {
    spanTag[i].className = grupoEstilo[Math.floor(Math.random() * grupoEstilo.length)];
    spanTag[i].classList.add(grupoTamanho[Math.floor(Math.random() * grupoTamanho.length)]);
    spanTag[i].classList.add(grupoRotacao[Math.floor(Math.random() * grupoRotacao.length)]);
    spanTag[i].classList.add(grupoInclinacao[Math.floor(Math.random() * grupoInclinacao.length)]);
    });
  }
}

btnCreate.addEventListener('click', letterGenerate);
