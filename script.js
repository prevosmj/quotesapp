const quotes = [
    {
        "q": "The air is tasty here.",
        "a": "Boy on Route 117"
    },
    {
        "q": "One does not simply walk into a Mirage Spot.",
        "a": "Old man in Pacifidlog Town"
    },
    {
        "q": "Hi! I like shorts! They're comfy and easy to wear!",
        "a": "Youngster on Route 3"
    },
    {
        "q": "My Rattata is different from regular Rattata. It's like my Rattata is in the top percentage of Rattatas.",
        "a": "Youngster Joey"
    },
    {
        "q": "How is that going to work? We're all named Grunt!",
        "a": "Team Skull Grunt"
    },
    {
        "q": "Pokemon with cool knees are so neat.",
        "a": "Strange Child"
    },
    {
        "q": "I may be bad and stupid, but I'm serious about Pokemon.",
        "a": "Punk Trainer"
    },
    {
        "q": "I'm too young for math!",
        "a": "Child in Sun & Moon"
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