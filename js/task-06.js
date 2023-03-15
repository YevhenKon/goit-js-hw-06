const inputText = document.querySelector('#validation-input')


inputText.addEventListener('blur', () => {
    if (inputText.value.length == Number(inputText.dataset.length)) {
        inputText.classList.add('valid')
        inputText.classList.remove('invalid')
    } else {
        inputText.classList.add('invalid')
        inputText.classList.remove('valid')
    }
    
})