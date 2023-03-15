const inputText = document.querySelector('#name-input')


const outputText = document.querySelector('#name-output')


inputText.addEventListener('input', (evt) => {
    outputText.textContent = evt.currentTarget.value
})