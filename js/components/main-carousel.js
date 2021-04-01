// acessar navegador
// pegar html
// pegar botão
// saber se o botão foi clicado

// acessar o navegador
// pegar html
// pegar o elements
// mover o elements para direita

// const btnRight = window.document.querySelector('.button-arrow.-right');
// se tiver que acessar do navegador, precisa usar o window, para recuperar só html não precisa

const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let pixels = 0;

console.log(btnRight)

btnRight.addEventListener('click', function() {
    pixels = pixels + 10;
    elements.style = `transform: translateX(${pixels}px);`;
    console.log(elements)
})

btnLeft.addEventListener('click', function() {
    pixels = pixels - 10;
    elements.style = `transform: translateX(${pixels}px);`;
    console.log(elements)
})