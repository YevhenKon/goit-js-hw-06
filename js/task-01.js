const numberOfItemsByClass = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfItemsByClass.length}`);

const nameItem = [...numberOfItemsByClass]

nameItem.forEach(item => {
    console.log(`Category: ${item.querySelector("h2").textContent}`)
    console.log(`Elements: ${item.querySelector("ul").children.length}`);
    
})


