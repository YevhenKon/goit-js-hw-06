let counterValue = 0

const btnDecrement = document.querySelector('[data-action="decrement"]')


const btnIncrement = document.querySelector('[data-action="increment"]')


const spanValue = document.querySelector('#value')


btnDecrement.addEventListener('click', () => {
    counterValue -= 1
    spanValue.textContent = counterValue
})


btnIncrement.addEventListener('click', () => {
    counterValue += 1
    spanValue.textContent  = counterValue
})