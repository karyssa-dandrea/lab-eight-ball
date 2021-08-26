// import functions
import { answers } from "./answers.js";
import { rando } from "./functions.js";



// reference needed DOM elements
const resultDisplay = document.getElementById('answers');
const fateButton = document.getElementById('fate-button');

// set event listeners 
fateButton.addEventListener('click', () => {
    const randomIndex = rando(answers.length - 1);
    resultDisplay.textContent = answers[randomIndex];
})

    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
