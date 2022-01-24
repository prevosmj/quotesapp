// List of quotes
const quotes = [
    {"q": "The air is tasty here.", 
     "a": "Boy on Route 117"},
    {"q": "One does not simply walk into a Mirage Spot.", 
     "a": "Old man in Pacifidlog Town"},
    {"q": "Hi! I like shorts! They're comfy and easy to wear!",
     "a": "Youngster on Route 3"},
    {"q": "My Rattata is different from regular Rattata. It's like my Rattata is in the top percentage of Rattatas.",
     "a": "Youngster Joey"},
    {"q": "How is that going to work? We're all named Grunt!",
     "a": "Team Skull Grunt"},
    {"q": "Pokemon with cool knees are so neat.",
     "a": "Strange Child"},
    {"q": "I may be bad and stupid, but I'm serious about Pokemon.",
     "a": "Punk Trainer"},
    {"q": "I'm too young for math!",
     "a": "Child in Sun & Moon"}
];

//List of colors at the top of the gradient
const warm = [
    {"c": "#d92e44"},
    {"c": "#ed07c3"},
    {"c": "#e06f1d"},
    {"c": "#fafc58"},
    {"c": "#c98ba9"}
]
//List of colors at the bottom of the gradient
const cold = [
    {"c": "#4bbd31"},
    {"c": "#0ad174"},
    {"c": "#36a0d1"},
    {"c": "#091596"},
    {"c": "#6d0eb5"}
]
//List of icons as they relate to Pokemon types
const type = [
    {"i": "fas fa-bolt"}, //Electric
    {"i": "fas fa-dragon"}, //Dragon
    {"i": "fas fa-bug"}, //Bug
    {"i": "fas fa-moon"}, //Dark
    {"i": "fas fa-hat-wizard"}, //Fairy
    {"i": "fas fa-fist-raised"}, //Fighting
    {"i": "fas fa-fire-alt"}, //Fire
    {"i": "fas fa-feather"}, //Flying
    {"i": "fas fa-ghost"}, //Ghost
    {"i": "fas fa-leaf"}, //Grass
    {"i": "fas fa-mountain"}, //Ground
    {"i": "fas fa-snowflake"}, //Ice
    {"i": "fas fa-circle"}, //Normal
    {"i": "fas fa-skull-crossbones"}, //Poison
    {"i": "fas fa-eye"}, //Psychic
    {"i": "fas fa-gem"}, //Rock
    {"i": "fas fa-cog"}, //Steel
    {"i": "fas fa-tint"}, //Water
]

//Initialize global variables
let prevQ, prevA, prevW, prevC, prevI, currQ, currA, currW, currC, currI = 0;
let plink = new Audio('pokePlink.mp3')

//Setting all variable on screen to previous
function previous(){
    document.getElementById("text").innerHTML=prevQ;
    document.getElementById("author").innerHTML="~ "+prevA;
    let bkgrd = document.getElementById("gradient");
    bkgrd.style.background = "linear-gradient(to bottom, " + prevW + ", " + prevC + ")";
    plink.play();
    document.getElementById("typeIcon").className = prevI;
}

//Creates and sets new quotes
function newQ(r) {
    //Save current quotes for previous
    prevQ = currQ;
    prevA = currA;
    prevW = currW;
    prevC = currC;
    prevI = currI;

    //debug
    /*
    console.log("PrevQ: "+prevQ);
    console.log("PrevA: "+prevA);
    console.log("PrevW: "+prevW);
    console.log("PrevC: "+prevC);
    */

    //Get random number, set new quotes
    let randnum = Math.floor(Math.random() * quotes.length);
    currQ = quotes[randnum].q;
    currA = quotes[randnum].a;
    document.getElementById("text").innerHTML=currQ;
    document.getElementById("author").innerHTML="~ "+currA;

    //Get random number, set new gradient
    let randwarm = Math.floor(Math.random() * warm.length);
    let randcold = Math.floor(Math.random() * cold.length);
    currW = warm[randwarm].c;
    currC = cold[randcold].c;
    let bkgrd = document.getElementById("gradient");
    bkgrd.style.background = "linear-gradient(to bottom, " + currW + ", " + currC + ")";

    //Plays Pokemon "Plink" sound
    plink.play();

    //Get random number, set new icon
    let randicon = Math.floor(Math.random() * type.length);
    currI = type[randicon].i;
    document.getElementById("typeIcon").className = currI;

    //debug 
    /*
    console.log("Quote: " + randnum);
    console.log("CurrQ: "+currQ);
    console.log("CurrA: "+currA);
    console.log("Warm: " + randwarm);
    console.log("Cold: " + randcold);
    console.log("CurrW: "+currW);
    console.log("CurrC: "+currC);
    console.log("CurrI: "+currI);
    */
}

//Initialize 
newQ(Math.floor(Math.random() * quotes.length));
newQ(Math.floor(Math.random() * quotes.length));