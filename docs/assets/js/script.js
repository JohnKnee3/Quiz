//4.1.6 helped with selectors
var timerEl = document.getElementById('timer');
var buttonEl = document.querySelector("#start-quiz");
var quizMainEl = document.querySelector("#quiz-main");
var questionIdCounter = 0;

// Create variables to store the quiz questions
questionsList = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["strings", "boolean", "alerts", "numbers"]
        
        //ASSIGN TRUE TO ARRAY 2
    },

    {
        question: "The condition in an if/else statement is enclosed within _____.",
        answers: ["quotes", "curley brackets", "parentheses", "square brackets"]
        
        //ASSIGN TRUE TO ARRAY 2
    },

    {
        question: "Arrays in JavaScript can be used to store _____.",
        answers: ["numbers and strings", "other arrays", "borders", "all of the above"]
        
        //ASSIGN TRUE TO ARRAY 3
    },

    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: ["commas", "curly brackets", "quotes", "parantheses"]
        
        //ASSIGNT TRUE TO ARRAY 2
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["JavaScript", "terminal/bash", "for loops", "console.log"]
        
        //ASSIGN TRUE TO ARRAY 3
    }
]

// Use mouse-click events to start the quiz ---
function startQuiz() {
    var titleRemove = document.querySelector(
        ".quiz-title");
    titleRemove.remove();
    var bodyRemove = document.querySelector(
        ".intro-text");
    bodyRemove.remove();
    var btnRemove = document.querySelector(
        ".btn");
    btnRemove.remove();

    createQuestions();
    timer();
}

// Write for loops to cycle through quiz questions ---
function createQuestions() {
    var questionEl = document.createElement("div");
    questionEl.textContent = questionsList[questionIdCounter].question;
    questionEl.className = ".question"
    quizMainEl.appendChild(questionEl);


    for (var i = 0; i < questionsList[questionIdCounter].answers.length; i++) {
        var answerEl = document.createElement("div");

        //NEED THIS TO KNOW IF THEY ARE TRUE OR FALSE
        answerEl.textContent = questionsList[questionIdCounter].answers[i];
        answerEl.className = "answer-item"
        questionEl.appendChild(answerEl);
    }

    questionIdCounter++
};

// Use key-press events to receive user input in the form of answers to quiz questions---

quizMainEl.addEventListener("click", function (event) {
    var answer = event.target;

    if (answer.matches(".answer-item")) {
        
        //NEED TO USE THIS TO LOOK FOR A TRUE

        var questionRemove = answer.parentElement;

        questionRemove.remove();

        createQuestions();

    }
});

// Create a time limit for the game using time functions---
function timer() {
    var timeLeft = 19;
    var timeInterval = setInterval(function () {

        if (timeLeft > 0) {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        }
        else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = 'Game Over';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `endGame()` function
            // endGame();
        }
    }, 1000);
};

// Write conditional statements to determine wrong and right answers


//start quiz call
buttonEl.addEventListener("click", startQuiz);




// Create variables to store the quiz questions ---

// Use mouse-click events to start the quiz ---

// Write for loops to cycle through quiz questions ---

// Use key-press events to receive user input in the form of answers to quiz questions---

// Create a time limit for the game using time functions---

// Write conditional statements to determine wrong and right answers

// Use client-side storage to store high scores 4.2

// Use GitHub Pages to publish the page to the web


//Notes when I had no changes but still may be relevant
//4.2.8 passing object from one func to the next then calling it in function with a ver that looks like this  objectName.value
//4.3.6 about passing a local scoped global var number from a function to another, changing it's name and using it several times even in an array so everything created is assigned to this same number.
//4.3.7 video about clicks using event.target.matches to reference clicks of specific things to then perform a specific task.  In this case it is delete a list.
//4.3.8 used query selector to target created elements.
//4.3.9 used var.hasAttribute("attribute") to check to see if data-task-id's number is present.  Also used var.removeAttribute("attribute") to then remove the respected attribute from a var serving as a reset of sorts.
//4.3.10 used appendChild to take an entire <li> and move it to a new <ul>.  Used event.target.value which may be useful for the answers.
//4.4.4 learned how to update arrays with .push and  how to delete from an array with a for loop
//4.4.5 how to save  using localStorage.setItem("tasks", JSON.stringify(tasks));
//4.4.6 showed us how to pull things from loacal storage using putting var=local.storage.getItem("nameStoredAs") into a var and then converting that var using var=JSON.parse(var) from a string into an object