function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector('body')

const btnChangeColor = document.querySelector('button')

const colors = document.querySelector('span')

btnChangeColor.addEventListener('click', () => {
  const newColor = getRandomHexColor()
  bodyColor.style.backgroundColor = newColor
  colors.textContent = newColor
})