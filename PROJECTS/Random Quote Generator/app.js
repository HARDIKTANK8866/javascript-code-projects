const quote =["Success is the sum of small efforts - repeated day in and day out.",
"Strive not to be a success, but rather to be of value.",
"Success consists of going from failure to failure without loss of enthusiasm.",
"Doubt kills more dreams than failure ever will.",
"Energy and persistence conquer all things."
]
function displayQuote() {
    const newLine = Math.floor(Math.random()*quote.length)
    console.log(quote[newLine]);
}
displayQuote()  