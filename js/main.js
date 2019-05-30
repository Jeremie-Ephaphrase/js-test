//a javascript practice file 

let message = 'goodmorning';

message = 'how are you doing?';


let name = prompt(' enter name ');
message = 'goodmorning';

console.log(message + name)
alert(message + name);

//this how you comment

//the if statement 
//if the number is positive the message should diplay 

let number = Number(prompt("enter a number: "));
if (number > 0) {
    console.log(number + " is positive");
}


// == equal sign
// === exactly equal
// < less than
// <= less than or equal to
// > greater than



//ifelse statement
else {
    console.log(number + " is negative or equal to 0")
}

//nesting conditions testing 3 conditions 

//let number = Number(promp("enter a number :"));

//if (number > 0) {
//    console.log(number + " is positive")
//} else if (number < 0) {
//  console.log(number + "the number is negaive ")
//} else {
//  console.log(number + " is equal to 0")
//}


//AND operater 

//if (number1 >= 0 && number1 <= 100) {
//  console.log(number1 + " is between 0 and 100, both included");
//}

//a program that helps you whatto wear according to weather conditions 

let weather = prompt("what is the weather like ? ");
if (weather === "sunny") {
    console.log("t-shirt, short and flip floppe tiime !");
} else if (weather === "windy") {
    console.log("windhoek hoek. ")
} else if (weather === "snowy") {
    console.log("stay inside watch movies ")
} else if (weather === "rainy") {
    console.log("bring an umbrella")
} else {
    console.log("invalid weather conition");
}

let climate = prompt('whats the weather like ')
var expr = 'climate';
switch (expr) {
    case 'sunny':
        console.log('shorts.');
        break;
    case 'rainy':
        console.log('stay inside');
        break;
    case 'cold':
        console.log('waer jacket');
        break;
    default:
        console.log('Sorry, invalid ' + expr + '.');
}

//kiss keep it simple stupid