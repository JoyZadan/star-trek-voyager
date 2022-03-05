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
console.log(quizQuestions[9]);

let testLoop = quizQuestions.length;
console.log(testLoop);


// for (let i = 0; i <= testLoop.length; i++) {
//     console.log(quizQuestions[i]);
//     alert('hi');
// }

// for (let i = 0; i < testLoop; i++) {
//     console.log(testLoop[i]);
// }


// selecting all required elements by declaring constants
const instructionsContainer = document.querySelector(".instructions-container"); // WORKING
const startQuiz = document.querySelector("#toggle-btn"); // WORKING

const quizContainer = document.querySelector(".quiz-container"); // WORKING
const questionText = document.querySelector(".question-text"); // WORKING
const submitButtons = document.querySelector(".submit-buttons"); // this is the submit btn
const optionsContent = document.querySelectorAll(".options-content");

const resultsContainer = document.querySelector(".results-container");
const gameNav = document.querySelector(".game-nav");

const buttonExit = document.querySelector(".btn-exit");
const buttonContinue = document.querySelector(".btn-continue");
const mapLink = document.querySelector(".map-link");


// setting up toggle between two divs in one function
// code from Tom O. at stackoverflow
startQuiz.addEventListener("click", toggleDivs);

function toggleDivs() {
    if (instructionsContainer.style.display != "none") {
        instructionsContainer.style.display = "none";
        quizContainer.style.display = "block";
    }   else {
        instructionsContainer.style.display = "block";
        quizContainer.style.display = "none";
    }
};

//

// start quiz


let questionIndex = 0;  // WORKING
let questionData; // WORKING
let answersIndex; // does NOT work
let answerCount = 0; // does NOT work
let score = 0;
let correctOption;

let optionOne;
let optionTwo;
let optionThree;
let optionFour;

// loading the quiz questions and the answer options function
function loadQuestion() {
    questionData = quizQuestions[questionIndex];
    questionText.innerHTML = questionData.question;

    optionOne = document.querySelector("#option-one");
    optionTwo = document.querySelector("#option-two");
    optionThree = document.querySelector("#option-three");
    optionFour = document.querySelector("#option-four");

    optionOne.innerHTML = quizQuestions[questionIndex].answers[0].option;
    optionTwo.innerHTML = quizQuestions[questionIndex].answers[1].option;
    optionThree.innerHTML = quizQuestions[questionIndex].answers[2].option;
    optionFour.innerHTML = quizQuestions[questionIndex].answers[3].option;
    
    questionIndex++;

};

loadQuestion();

function checkAnswer() {
    if (optionOne.innerHTML == quizQuestions[questionIndex].answers[0].correct == true) {
        console.log(optionOne);
        score++;
        // questionIndex++;
        quizContainer.style.backgroundColor = "#efb200";
        questionText.innerHTML = "Correct!";
    } else if (optionOne.innerHTML == quizQuestions[questionIndex].answers[1].correct == true) {
        score++;
        questionIndex++;
        quizContainer.style.backgroundColor = "#efb200";
        questionText.innerHTML = "Correct!";
    } else if (optionOne.innerHTML == quizQuestions[questionIndex].answers[2].correct == true) {
        score++;
        questionIndex++;
        quizContainer.style.backgroundColor = "#efb200";
        questionText.innerHTML = "Correct!";
    } else if (optionOne.innerHTML == quizQuestions[questionIndex].answers[3].correct == true) {
        score++;
        questionIndex++;
        quizContainer.style.backgroundColor = "#efb200";
        questionText.innerHTML = "Correct!";
    }
    loadQuestion();
}
    
checkAnswer();







// questionIndex++;

    console.log(quizQuestions[questionIndex].answers[0].correct == true);
    console.log(quizQuestions[questionIndex].answers[1].correct == true);
    console.log(quizQuestions[questionIndex].answers[2].correct == true);
    console.log(quizQuestions[questionIndex].answers[3].correct == true);



// function getCheckedAnswer()

// function shuffleQuestions(array) {
//     let currentIndex = array.length, temporaryValue, randomIndex;
//     while (0 !== currentIndex) {
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         temporaryValue = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temporaryValue;
//     }
//     return array;
// }

// shuffleQuestions();

// let userScore = 0;

// function getCheckedAnswer(event) {
//     // if (this.innerText === quizQuestions[questionCount].answers.option) {
//     //     userScore++;
//     //     quizContainer.style.backgroundColor = "#efb200";
//     //     questionText.innerText = "Correct!";

//     // }
//     if

// }

// function getCheckedAnswer(event) {
//     optionsContent = event.target;
//     let correct = quizQuestions[questionIndex].answers.correct;
//     console.log(correct);    
// }


// submitButtons.addEventListener("click", loadQuestion);

optionOne.addEventListener("click", checkAnswer);
optionTwo.addEventListener("click", checkAnswer);
optionThree.addEventListener("click", checkAnswer);
optionFour.addEventListener("click", checkAnswer);
    





mapLink.addEventListener("click", _openMap => {
    window.location.href = "find.html";
});








