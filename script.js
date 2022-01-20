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

const warm = [
    {
        "c": "#d92e44"
    },
    {
        "c": "#ed07c3"
    },
    {
        "c": "#e06f1d"
    },
    {
        "c": "#fafc58"
    },
    {
        "c": "#c98ba9"
    }
]

const cold = [
    {
        "c": "#4bbd31"
    },
    {
        "c": "#0ad174"
    },
    {
        "c": "#36a0d1"
    },
    {
        "c": "#091596"
    },
    {
        "c": "#6d0eb5"
    }
]

function newQ() {

    let randnum = Math.floor(Math.random() * quotes.length);
    console.log("Quote: " + randnum);

    const currQ = quotes[randnum].q;
    const currA = quotes[randnum].a;

    document.getElementById("text").innerHTML=currQ;
    document.getElementById("author").innerHTML="~ "+currA;

    let randwarm = Math.floor(Math.random() * warm.length);
    console.log("Warm: " + randwarm);
    let randcold = Math.floor(Math.random() * cold.length);
    console.log("Cold: " + randcold);

    const currW = warm[randwarm].c;
    const currC = cold[randcold].c;
    let bkgrd = document.getElementById("gradient");

    bkgrd.style.background = "linear-gradient(to bottom, " + currW + ", " + currC + ")";
}

newQ();