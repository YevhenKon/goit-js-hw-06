let counterValue = 0

const btnDecrement = document.querySelector('[data-action="decrement"]')
// console.log(btnDecrement);


const btnIncrement = document.querySelector('[data-action="increment"]')
// console.log(btnIncrement);

const spanValue = document.querySelector('#value')
// console.log(spanValue);

btnDecrement.addEventListener('click', () => {
    counterValue -= 1
    spanValue.textContent = counterValue
})


btnIncrement.addEventListener('click', () => {
    counterValue += 1
    spanValue.textContent  = counterValue
})