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
            { option: "Jones", correct: true },
        ]
    },
    {
        question: "Introduced in episode 'Scorpion, Part 1', what was the name of the species which the Borg found impossible to assimilate?",
        answers: [
            { option: "Species 8472", correct: true },
            { option: "Herogen", correct: false },
            { option: "Talaxian", correct: true },
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
            { option: "unknown", correct: false },
            { option: "175,000 light years", correct: false },
        ]
    },
    {
        question: "In the episode 'Hope and Fear', what technology did the Voyager crew attempt to use to get home faster?",
        answers: [
            { option: "Transwarp conduits", correct: false },
            { option: "Psionic powers", correct: false },
            { option: "Quantum slipstream", correct: false },
            { option: "Fluidic Space drive", correct: false },
        ]
    },
]

console.log(quizQuestions);


// selecting all required elements by declaring constants
const instructionsContainer = document.querySelector(".instructions-container");
const startQuiz = document.querySelector(".start-quiz");
const quizContainer = document.querySelector(".quiz-container");
const questionText = document.querySelector(".question-text");
const submitAnswer = document.querySelector(".submit-answer");
const resultsContainer = document.querySelector(".results-container");
const buttonsContainer = document.querySelector(".buttons-container");
const buttonExit = document.querySelector(".btn-exit");
const buttonContinue = document.querySelector(".btn-continue");
const mapLink = document.querySelector(".map-link");


// setting up toggle between two divs in one function
// code from Tom O. at stackoverflow
document.querySelector("#toggle-btn").addEventListener("click", toggleDivs);

function toggleDivs() {
    if (instructionsContainer.style.display != "none") {
        instructionsContainer.style.display = "none";
        quizContainer.style.display = "block";
    }   else {
        instructionsContainer.style.display = "block";
        quizContainer.style.display = "none";
    }
}


// loading the quiz questions function
let questionCount = 0;
loadQuestion = () => {
    let questionData = quizQuestions[questionCount];
    questionText.innerText = questionData.question;      
}

loadQuestion();

// loading the quiz questions function
loadOptions = () => {
    let optionOne = document.querySelector("#answer-one");
    let optionTwo = document.querySelector("#answer-two");
    let optionThree = document.querySelector("#answer-three");
    let optionFour = document.querySelector("#answer-four");

    optionOne.innerText = quizQuestions[questionCount].answers[0].option; 
    optionTwo.innerText = quizQuestions[questionCount].answers[1].option; 
    optionThree.innerText = quizQuestions[questionCount].answers[2].option; 
    optionFour.innerText = quizQuestions[questionCount].answers[3].option; 

    console.log(optionOne);
    console.log(optionTwo);
    console.log(optionTwo);
    console.log(optionTwo);
}

loadOptions();





mapLink.addEventListener("click", _openMap => {
    window.location.href = "find.html";
})





















mapLink.addEventListener("click", _openMap => {
    window.location.href = "find.html";
})
function newFunction() {
    console.log(quizQuestions[0].question);
}

