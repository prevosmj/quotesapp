const quotes = [
    {
        "q": "Quote 1",
        "a": "Author 1"
    },
    {
        "q": "Quote 2",
        "a": "Author 2"
    },
    {
        "q": "Quote 3",
        "a": "Author 3"
    },
    {
        "q": "Quote 4",
        "a": "Author 4"
    },
    {
        "q": "Quote 5",
        "a": "Author 5"
    }
];

const newQ = function(){

    let randnum = Math.floor(Math.random() * quotes.length);
    console.log(randnum);

    const currQ = quotes[randnum].q;
    const currA = quotes[randnum].a;

    document.getElementById("text").innerHTML=currQ;
    document.getElementById("author").innerHTML="~ "+currA;

}

newQ();