const sizeText = document.querySelector('input')

const changeText = document.querySelector('#text')


sizeText.addEventListener('input', (evt) => {

    changeText.style.fontSize = `${evt.target.value}px`
console.log(Number(evt.target.value));

})