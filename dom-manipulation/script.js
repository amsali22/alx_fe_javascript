// Array of quote objects
let quotes = [
    { text: "Be yourself; everyone else is already taken.", category: "Category 1" },
    { text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", category: "Category 2" },
    { text: "A room without books is like a body without a soul.", category: "Category 1" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", category: "Category 2" },
];

// Function to display a random quote
function showRandomQuote() {
    // Get a random quote from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Display the random quote in the quoteDisplay element
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.innerHTML = randomQuote.text;
}

// Function to add a new quote
function addQuote() {
    // Get the new quote text and category from the input fields
    const newQuoteText = document.getElementById("newQuoteText").value;
    const newQuoteCategory = document.getElementById("newQuoteCategory").value;

    // Create a new quote object
    const newQuote = { text: newQuoteText, category: newQuoteCategory };

    // Add the new quote to the quotes array
    quotes.push(newQuote);

    // Clear the input fields
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";

    // Display the updated quotes
    showRandomQuote();
}

// Event listener for the "Show New Quote" button
document.getElementById("newQuote").addEventListener("click", showRandomQuote);