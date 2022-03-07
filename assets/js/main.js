// Setting up the event handlers 
const quizLink = document.getElementsByClassName(".quiz-link");
const quotesLink = document.getElementsByClassName(".quotes-link");
const rescueLink = document.getElementsByClassName(".rescue-link");
const mapLink = document.getElementsByClassName(".map-link");

// This changes the background color of the quiz link when clicked
quizLink.addEventListener("click", changeBackground => {
    quizLink.style.backgroundColor = "#efb200";

    // This reverts the background color of the quiz link after 3 seconds
    window.setTimeout(() => {
        quizLink.style.backgroundColor = "#29407c";
    }, 3000); 
});

// This changes the background color of the quotes link when clicked
quotesLink.addEventListener("click", changeBackground => {
    quotesLink.style.backgroundColor = "#efb200";

    // This reverts the background color of the quiz link after 3 seconds
    window.setTimeout(() => {
        quotesLink.style.backgroundColor = "#600";
    }, 3000); 
});

// This changes the background color of the rescue mission link when clicked
rescueLink.addEventListener("click", changeBackground => {
    rescueLink.style.backgroundColor = "#efb200";

    // This reverts the background color of the rescue mission link after 3 seconds
    window.setTimeout(() => {
        rescueLink.style.backgroundColor = "#efb200";
    }, 3000); 
});

mapLink.addEventListener("click", openMap => {
    window.location.href = "find.html";
})