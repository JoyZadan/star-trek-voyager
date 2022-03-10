// ADDING THE QUOTES ARRAY AND STORING THEM IN A VARIABLE
// Quotes credit to Star Trek and Paramount Global
// Moderately simplified Code from Jacinto Wong's Udemy course - JavaScript Web Projects: 20 Projects to Build Your Portfolio
// Used for this project for additional feature


// ADDING THE QUOTES ARRAY AND STORING THEM IN A VARIABLE
const quotes = [
	{
	  quote: "A man either lives life as it happens to him, meets it head-on and licks it, or he turns his back on it and starts to wither away.",
	  author: "Dr. Boyce"
	},
	{
	  quote: "Logic is the beginning of wisdom, not the end.",
	  author: "Mr. Spock"
	},
	{
	  quote: "You may find that having is not so pleasing a thing as wanting. This is not logical, but it is often true.",
	  author: "Mr. Spock"
	},
	{
	  quote: "Live now; make now always the most precious time. Now will never come again.",
	  author: "Jean-Luc Picard"
	},
	{
	  quote: "Sometimes a feeling is all we humans have to go on.",
	  author: "James T. Kirk"
	}, 
	{
	  quote: "With the first link, the chain is forged. The first speech censored, the first thought forbidden, the first freedom denied, chains us all irrevocably.",
	  author: "Jean-Luc Picard"
	}, 
	{
	  quote: "A library serves no purpose unless someone is using it.",
      author: "Mr. Atoz"
	}, 
	{
	  quote: "When dreams become more important than reality, you give up travel, building, creating; you even forget how to repair the machines left behind by your ancestors. You just sit living and reliving other lives left behind in the thought records.",
	  author: "Vina"
	}, 
	{
	  quote: "Insufficient facts always invite danger.",
	  author: "Mr. Spock"
	}, 
	{
	  quote: "Insults are effective only where emotion is present.",
	  author: "Mr. Spock"
	}, 	
	{
	  quote: "Madness has no purpose. Or reason. But it may have a goal.",
	  author: "Mr. Spock"
	}, 
	{
	  quote: "They used to say that if Man was meant to fly, he'd have wings. But he did fly. He discovered he had to.",
	  author: "James T. Kirk"
	}, 
	{
	  quote: "Humans do have an amazing capacity for believing what they choose, and excluding that which is painful.",
	  author: "Mr. Spock"
	}, 
	{
	  quote: "When a child is taught, it's programmed with simple instructions, and at some point, if its mind develops properly, it exceeds the sum of what it was taught, thinks independently.",
	  author: "Dr. Daystrom"
	}, 
	{
	  quote: "Change is the essential process of all existence.",
	  author: "Mr. Spock"
	}, 
	{
	  quote: "In critical moments, men sometimes see exactly what they wish to see.",
	  author: "Mr. Spock"
	},
	{
	  quote: "Without followers, evil cannot spread.",
	  author: "Mr. Spock"
	},
	{
	  quote: "The intellect is not all... but its cultivation must come first, or the individual makes errors... wastes time in unprofitable pursuits.",
	  author: "Flint"
	},
	{
	  quote: "One man cannot summon the future. But one man can change the present!",
	  author: "Mr. Spock"
	},
	{
	  quote: "A lie is a very poor way to say hello.",
	  author: "Edith Keeler"
	},
	{
	  quote: "To be human is to be complex. You can't avoid a little ugliness from within and from without.",
	  author: "James T. Kirk"
	},
	{
	  quote: "Without freedom of choice there is no creativity.",
	  author: "James T. Kirk"
	},
	{
	  quote: "When the personality of a human is involved, exact predictions are hazardous.",
	  author: "Dr. McCoy"
	},
	{
	  quote: "You know as well as I do that fear only exists for purpose...to be conquered.",
	  author: "Capt. Kathryn Janeway"
	},
	{
	  quote: "One voice can be stronger than a thousand voices,",
	  author: "Capt. Kathryn Janeway"
	},
	{
	  quote: "You can use logic to justify almost anything. That\'s it\'s power and it\'s flaw.",
	  author: "Capt. Kathryn Janeway"
	},
	{
	  quote: "I do not fire on defenseless people",
	  author: "Jean-Luc Picard"
	},
	{
	  quote: "You have to measure your success and your failures within. Not by anything that I or anyone else might think.",
	  author: "Jean-Luc Picard"
	}
];
console.log(quotes);

// SELECTING ALL REQUIRED ELEMENTS BY DECLARING CONSTANTS
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");


// SHOW NEW QUOTE
// shuffles quotes and dynamically shows them on the browser
function newQuote() {    
    const shuffledQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.innerText = `${shuffledQuotes.quote}`;
    authorText.innerText = `${shuffledQuotes.author}`;     
}
newQuote();


// TWEET QUOTE
function tweetQuote() {
    const socialShare = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`;
    window.open(socialShare, "_blank");
}

// EVENT LISTENERS
twitterBtn.addEventListener("click", tweetQuote);
newQuoteBtn.addEventListener("click", newQuote);

