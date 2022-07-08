function getRandomQuote() {
    //define a quotes array
    var quotes = [
        { 
            quote: "Stay Hungry. Stay Foolish.", 
            source: "Steve Jobs",
            citation: "google",
            year: "2005"
        },
        { 
            quote: "Yesterday is history. Tomorrow is a mystery. But today is a gift. That's why we call it the present.", 
            source: "Master Oogwai"
        },
        { 
            quote: "To live is the rarest thing in the world. Most people exist, that is all.",
            source: "Oscar Wilde"
        },
        { 
            quote: "Do one thing every day that scares you.",
            source: "Eleanor Roosevelt"
        },  
        {
            quote: "Weak people revenge. Strong people forgive. Intelligent People Ignore.",
            source: "Albert Einstein"

        },
        {
            quote: "The secret of getting ahead is getting started.",
            source: "Mark Twain"

        },
        {
            quote: "The two most important days in your life are the day you are born and the day you find out why.",
            source: "Mark Twain"

        },
        {
            quote: "People who are crazy enough to think they can change the world, are the ones who do.",
            source: "Winston Churchill"

        },
        {
            quote: "Expectation is the root of all heartache.",
            source: "William Shakespeare"

        },
        {
            quote: "Any fool can know. The point is to understand.",
            source: "Albert Einstein"

        },
        {
            quote: "Build your own dreams, or someone else will hire you to build theirs.",
            source: "Farrah Gray"

        },
        {
            quote: "Start from wherever you are and with whatever you’ve got.",
            source: "Jim Rohn"

        },
        {
            quote: "Happiness is having a large, loving, caring, close-knit family in another city.",
            source: "George Burns"

        },
        {
            quote: "Knowledge is like underwear. It is useful to have it, but not necessary to show it off.",
            source: "Bill Murray"

        },
        {
            quote: "Don’t be so humble – you are not that great.",
            source: "Golda Meir"

        },
        {
            quote: "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
            source: "Bill Gates"

        },
        {
            quote: "Nearly all men can stand adversity, but if you want to test a man’s character, give him power.",
            source: "Abraham Lincoln"

        },
        {
            quote: "Tact is the ability to describe others as they see themselves.",
            source: "Abraham Lincoln"

        },
        {
            quote: "A lot of times, people don't know what they want until you show it to them.",
            source: "Steve Jobs"

        }
    ]
    // pick random index and store the values of that quote into variables
    var index = Math.floor(Math.random() * 10);
    var quote = quotes[index].quote;
    var author = quotes[index].source;
    var citation = quotes[index].citation;
    var year = quotes[index].year;

    // return specific variables of that quote
    return [quote,author,citation,year];

  }

function printQuote() {

    // initialize thinsg array containing variables returned from getRandomQuote function
    var things = getRandomQuote();
    // insert each element into respective places in html elements 
    document.getElementById("quote").innerHTML = things[0];
    document.getElementById("source").innerHTML = `~ ${things[1]}`;
    document.getElementById("citation").innerHTML = `citation: ${things[2]}`;
    document.getElementById("year").innerHTML = `year: ${things[3]}`;




}