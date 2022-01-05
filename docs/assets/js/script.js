var buttonEl = document.querySelector("#start-quiz");
var firstAnswersEl = document.querySelector("#first-answers");

function createTaskHandler() { //created function the way I prefer
    var listItemEl = document.createElement("li");
    listItemEl.className = "answer-item";
    listItemEl.textContent = "This answer is brought to you by 4.1.8."
    firstAnswersEl.appendChild(listItemEl);
};

buttonEl.addEventListener("click", createTaskHandler) 

// Create variables to store the quiz questions

// Use mouse-click events to start the quiz

// Write for loops to cycle through quiz questions

// Use key-press events to receive user input in the form of answers to quiz questions

// Create a time limit for the game using time functions

// Write conditional statements to determine wrong and right answers

// Use client-side storage to store high scores

// Use GitHub Pages to publish the page to the web
// var body = document.body;
// var h1El = document.createElement("h1");
// h1El.textContent = "It's Quiz Time!!";
// body.appendChild(h1El);
// h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");

// var pEl = document.createElement("div");
// pEl.textContent = "This is a test to see if P works.";
// body.appendChild(pEl);

