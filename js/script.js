function generateGrid (gridX, gridY, container){
container.style.width = `calc(50px * ${gridX} + 25px)`;
container.innerHTML = ""
for (let i = 1; i <= (gridX * gridY); i++){
 container.innerHTML += `<div class="square">${i}</div>`
}
}

const squareContainer = document.getElementById("squarecontainer");
const playButton = document.getElementById("playbtn");
let difficulty = document.getElementById("difficultySelect");
playButton.addEventListener("click", function() {

console.log (difficulty.value)

if (difficulty.value === "easy"){
 grid = generateGrid(10, 10, squareContainer);
}

if (difficulty.value === "medium"){
 grid = generateGrid(9, 9, squareContainer);
}

if (difficulty.value === "hard"){
 grid = generateGrid(7, 7, squareContainer);
}

const square = document.querySelectorAll(".square");

square.forEach(square => {
 square.addEventListener('click', function() {
   square.classList.toggle("clicked")
 });

});
});
