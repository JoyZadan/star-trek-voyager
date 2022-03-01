// Setting up the event handlers 
const quizLink = document.querySelector(".quiz-link");
const quotesLink = document.querySelector(".quotes-link");
const rescueLink = document.querySelector(".rescue-link");
const mapLink = document.querySelector(".map-link");

// This changes the background color of the quiz link when clicked
quizLink.addEventListener("click", changeBackground => {
    quizLink.style.backgroundColor = "#efb200";

    // This reverts the background color of the quiz link after 3 seconds
    window.setTimeout(() => {
        quizLink.style.backgroundColor = "#29407c";
    }, 3000); 
});

mapLink.addEventListener("click", openMap => {
    window.location.href = "find.html";
})