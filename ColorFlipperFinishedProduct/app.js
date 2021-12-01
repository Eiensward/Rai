const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "blue", "yellow"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    // So, this function gets a random number between 0 - 3
    const randomNumber = getRandomNumber(); 
    console.log(document.body);
    /* The above, is a button, upon click, activates the below using addEventListener of which,
    listens to the activation of the button; then, activates the corresponding function
    upon click.. The below is java code (the function)
     that goes into the css and changes the background color according to the selected
     color in the color array. Additionally, it changes the text to display the corresponding color.
     Furthermore, upon activating the assigned colors variable, the variable
     activates the randomNumber variable of which activates the corresponding
     function. Said function gets a random number and assigns it to the random
     Number variable; thus, selecting a value within the variable colors using the assigned
     value by function. Ex. colors[2] gets rgba(133,122,200) to be displayed text and background color.*/ 
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

    /* This function (Math.random part) gets a number between 0 and 1, but not 1. Furthermore,
        it multiplies the result by the length of the color const, of which
        is 3 as it starts count by 0. Moreover, by encompassing the code by
        Math.floor(), the result of the value of math random and colors length
        gets rounded DOWN to the nearest integer. */
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}