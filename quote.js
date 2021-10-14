const quotes= [ 
    {author:"1",  quote:"2"},
    {author:"2",  quote:"3"}

];

const author=document.querySelector(".quote span:first-child");
const quote=document.querySelector(".quote span:last-child");
const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];

author.innerText=todaysQuote.author;
quote.innerText=todaysQuote.quote;