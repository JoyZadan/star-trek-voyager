// adding the questions array and storing it in a variable
const quizQuestions = [
    {
        question: "In Star Trek Voyager episode 'Death Wish', who was the rogue member of the Continuum being pursued by Q?",
        answers: [
            { option: "Quintin", correct: false },
            { option: "Quin", correct: true },
            { option: "Q", correct: false },
            { option: "Lady Q", correct: false },
        ]       
    },
    {
        question: "Which shipyard was Voyager constructed?",
        answers: [
            { option: "Massachusetts Institute of Technology", correct: false },
            { option: "San Francisco Fleet Yards", correct: false },
            { option: "Utopia Planitia Fleet Yards", correct: true },
            { option: "Vulcan Science Academy", correct: false },
        ]
    },
    {
        question: "Who was responsible for Voyager being pulled into the Delta quadrant?",
        answers: [
            { option: "The Borg Queen", correct: false },
            { option: "The Continuum", correct: false },
            { option: "The Maquis", correct: false },
            { option: "The Caretaker", correct: true },
        ]
    },
    {
        question: "In the episode 'End Game, Part 1', what was the name that the Doctor finally choose for himself?",
        answers: [
            { option: "Dr Zimmerman", correct: false },
            { option: "Shmullus", correct: false },
            { option: "Joe", correct: true },
            { option: "Jones", correct: false },
        ]
    },
    {
        question: "Introduced in episode 'Scorpion, Part 1', what was the name of the species which the Borg found impossible to assimilate?",
        answers: [
            { option: "Species 8472", correct: true },
            { option: "Herogen", correct: false },
            { option: "Talaxian", correct: false },
            { option: "Species 6788", correct: false },
        ]
    },
    {
        question: "Who was the Morale Officer of Voyager?",
        answers: [
            { option: "Kess", correct: false },
            { option: "Vorik", correct: false },
            { option: "Neelix", correct: true },
            { option: "Icheb", correct: false },
        ]
    },
    {
        question: "What species uses transwarp conduits?",
        answers: [
            { option: "Ocampan", correct: false },
            { option: "The Borg", correct: true },
            { option: "Klingon", correct: false },
            { option: "Krenim", correct: false },
        ]
    },
    {
        question: "What is the name of the shuttle craft designed by Tom Paris?",
        answers: [
            { option: "The Delta Flyer", correct: true },
            { option: "The Beta Flyer", correct: false },
            { option: "Alpha Flyer", correct: false },
            { option: "The Gamma Quadrant", correct: false },
        ]
    },
    {
        question: "In the episode 'Caretaker: Part 2', the Voyager crew found themselves how many light years away from Federation space?",
        answers: [
            { option: "5,000 light years", correct: false },
            { option: "70,000 light years", correct: true },
            { option: "130,000 light years", correct: false },
            { option: "175,000 light years", correct: false },
        ]
    },
    {
        question: "In the episode 'Hope and Fear', what technology did the Voyager crew attempt to use to get home faster?",
        answers: [
            { option: "Transwarp conduits", correct: false },
            { option: "Psionic powers", correct: false },
            { option: "Quantum slipstream", correct: true },
            { option: "Fluidic Space drive", correct: false },
        ]
    },
];

console.log(quizQuestions);


// SELECTING ALL REQUIRED ELEMENTS BY DECLARING CONSTANTS
const mission = document.querySelector(".mission-intro");
const instructionsContainer = document.querySelector(".instructions-container"); // WORKING
const startQuizBtn = document.querySelector("#start-btn"); // WORKING

const quizContainer = document.querySelector(".quiz-container"); // WORKING
const questionText = document.querySelector(".question-text"); // WORKING

const answersContainer = document.querySelector(".answers-container");
const onlyOnce = document.querySelector(".options-btn");
const submitButtons = document.querySelector(".submit-buttons");
const buttonContinue = document.querySelector(".btn-continue");

const resultsContainer = document.querySelector(".results-container");
const resultsText = document.querySelector(".results-text");
const totalScores = document.querySelector(".total-scores");
const gameNav = document.querySelector(".game-nav");

const buttonExit = document.querySelector(".btn-exit");
const mapLink = document.querySelector(".map-link");

const timerContainer = document.querySelector(".timer");
const timerText = document.querySelector(".timer-text");
const multiToggle = document.querySelector(".multi-toggle");

// EVENT LISTENER FOR THE START BUTTON TO HIDE INSTRUCTIONS CONTAINER 
// DISPLAYS QUIZ BOARD
startQuizBtn.addEventListener("click", startQuiz);
buttonContinue.addEventListener("click", () =>  {
    questionIndex++;
})
buttonContinue.addEventListener("click", loadQuestion);

let questionIndex;
let shuffledQuestions;
let hiddenDiv = document.querySelector("#hidden");



// FUNCTION TO HIDE INSTRUCTIONS CONTAINER AND DISPLAY QUIZ BOARD
function startQuiz() {
    mission.style.display = "none";
    startQuizBtn.classList.add("hide");
    instructionsContainer.classList.add("hide");
    resultsContainer.classList.add("hide");
    quizContainer.style.display = "block";
    shuffledQuestions = quizQuestions.sort(() => Math.random() -0.5);
    questionIndex = 0;
    loadQuestion();
}

// LOADS THE SHUFFLED QUIZ QUESTIONS
// CODE FROM WEB DEV SIMPLIFIED YOUTUBE TUTORIAL - https://www.youtube.com/watch?v=riDzcEQbX6k
// AMENDED FOR THE PROJECT
function loadQuestion() {
    resetBoardGame();
    showQuestion(shuffledQuestions[questionIndex]);
};


// RESETS QUIZ BOARD TO HIDE CONTINUE BUTTON AFTER QUESTION IS LOADED
function resetBoardGame() {
    // clearStatusClass(document.body); // DOES NOT WORK
    buttonContinue.classList.add("hide");
    while (answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild);
    }
}

// LOADS CORRESPONDING ANSWERS OPTIONS AND ADDS EVENT LISTENER TO ANSWERS BUTTONS 
function showQuestion(question) {
    questionText.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.option;
        button.classList.add("options-btn");
        
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", checkAnswer);
        answersContainer.appendChild(button);

    });
}

// CHECKS IF PLAYER CHOICE IS CORRECT
function checkAnswer(e) {
    const selectedAnswer = e.target;
    const correctAnswer = selectedAnswer.dataset.correct;

    Array.from(answersContainer.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });

    
    if (correctAnswer) {
        incrementScore();
    } else {
        incrementWrongAnswer();
    };


    // NEEDS REWORK
    if (shuffledQuestions.length > questionIndex + 1) {
        buttonContinue.classList.remove("hide"); 
        console.log(questionIndex); 
    } else {
        quizContainer.classList.add("hide"); // DOES NOT WORK
        timerContainer.classList.add ("hide");
        timerText.classList.add("hide");
        questionText.classList.add("hide");
        answersContainer.classList.add("hide");
        resultsContainer.classList.remove("hide");
        resultsContainer.style.display = "block";  
        // buttonContinue.innerText = "Restart";
    } 
    endGame();      
};



// DISPLAYS VISUAL FEEDBACK TO PLAYER IF CHOSEN ANSWER IS CORRECT OR NOT
function setStatusClass(element, correct) {
    // clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
        element.classList.add("disabled");
    } else {
        element.classList.add("disabled");
    }
}      

// CLEARS VISUAL SIGNAL TO PLAYER WHEN NEW QUESTION AND ANSWERS ARE LOADED
function clearStatusClass(element) {
    element.classList.remove("correct");
}

// PRIORITY: END GAME

function endGame() {
    quizContainer.classList.add("hide");
    // resultsContainer.classList.remove("hide");   
}

// timerText.remove();


// DISPLAYS SCORES
// Code from Code Institute Love Maths JS lessons
// Amended to include code from Modern JavaScript by The Net Ninja (Shaun Pelling)
function incrementScore() {
    let oldScore = parseInt(document.querySelector("#score").innerText);
    document.querySelector("#score").innerText = oldScore + 10;
    let output = 0;
    const scoreAnimation = setInterval(() => {
        resultsContainer.querySelector(".total-scores").innerText = `You are ${output}% Trekkie!`;
        if (output === oldScore + 10) {
            clearInterval(scoreAnimation);
        } else {
            output++;
        }
    }, 10);    
}

function incrementWrongAnswer() {
    let oldScore = parseInt(document.querySelector("#incorrect").innerText);
    document.querySelector("#incorrect").innerText = oldScore + 10;
}




// SET INTERVAL

// SET TIMER?


  
// EVENT LISTENER TO TAKE PLAYER BACK TO GAMES HOME PAGE
buttonExit.addEventListener("click", backHome => {
    window.location.href = "index.html";
} )

mapLink.addEventListener("click", openMap => {
    window.location.href = "find.html";
});








