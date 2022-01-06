//4.1.6 helped with selectors
var buttonEl = document.querySelector("#start-quiz");
var nameButtonEl = document.querySelector("#save-task");
var firstAnswersEl = document.querySelector("#first-answers");

//4.1.8 start quiz function
function createTaskHandler() { //created function the way I prefer
    var listItemEl = document.createElement("li");
    listItemEl.className = "answer-item";
    listItemEl.textContent = "This answer is brought to you by 4.1.8."
    firstAnswersEl.appendChild(listItemEl);
};

//save name function adding to list for now
function saveName(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    console.log(taskNameInput);

//if player types nothing for their name I yeall at them    
    if(!taskNameInput) {
        alert("You need to fill in your initials!");
        return false;
    }

    // nameButtonEl.reset(); breaks.  I want it to reset text box 4.2.8.  I need to make it a form element or find a new way.

    var nameScoreEl = document.createElement("li");
    nameScoreEl.className = "answer-item";
    nameScoreEl.textContent = taskNameInput;
    firstAnswersEl.appendChild(nameScoreEl);

}

//start quiz call
buttonEl.addEventListener("click", createTaskHandler); //"submit" instead of click to pull questions? Also known as onsubmit. Submit is supposed to work on enter.

//save name call
nameButtonEl.addEventListener("click", saveName);



// Create variables to store the quiz questions

// Use mouse-click events to start the quiz (4.1 styles it)

// Write for loops to cycle through quiz questions

// Use key-press events to receive user input in the form of answers to quiz questions

// Create a time limit for the game using time functions

// Write conditional statements to determine wrong and right answers

// Use client-side storage to store high scores 4.2

// Use GitHub Pages to publish the page to the web


//Notes when I had no changes but still may be relevant
//4.2.8 passing object from one func to the next


