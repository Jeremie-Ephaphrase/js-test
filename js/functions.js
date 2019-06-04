//funtions exercise
//a function is a group of instruction that performs a particular task

//function sayHello() {
//  console.log("hello");
//}

//console.log("start program");
//sayHello(); //calling function
//console.log("end of program");

//the keyword return indicates that a return value will be given, which is specified immediately after the word.

function sayHello() {
    return "hello!";
}

console.log("start program");
let result = sayHello();
console.log(result);

console.log("end program");

//if you try to retrieve the return value of a funvtion that does not actually have one, you get the javascript value undifined.this isnt necessarily an error; it just means the function may perform certain operations withouy actually outputting anything specific at the end

// create a function with a function name and a parameter 
//declare  a varianle inside the function the variable name to be message 
//the function should display hello, name of person 

function sayHello(name) {
    var message = "hello, " + name + "!";
    return message;
}

console.log(sayHello("Jeremie " + "kobo"));