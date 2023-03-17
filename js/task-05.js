const inputText = document.querySelector('#name-input')


const outputText = document.querySelector('#name-output')


inputText.addEventListener('input', (evt) => {
    console.log(evt.currentTarget);
    if (evt.currentTarget.value === '') {

        outputText.textContent = 'Anonymous'
        console.log(outputText);
        return
    }
    outputText.textContent = evt.currentTarget.value
})