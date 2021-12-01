const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn")
const color = document.querySelector(".color")
// #f15025

//function below loops until forms a color hex code. [ 6 times ]  
btn.addEventListener('click', function(){
//fist let hex color be # so that the hex code combination starts with a #.
let hexColor = '#';
for (let i = 0; i<6; i++){
// function fills code with random values from hex variable until i is bigger than 6.
// in other words, loops code that activates random number function and selects random value form variable hex for 6 times.
    hexColor +=  hex[getRandomNumber()]}
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
});

// function called to randomize the hex color combination.
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}