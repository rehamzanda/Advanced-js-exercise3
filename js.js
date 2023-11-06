/*Here is a list of  falsy values:

false
0 (zero)
-0 (negative zero)
0n (BigInt zero)
"", '', `` (empty string)
null
undefined
NaN (not a number)*/

//Exercise 1
//The following function returns true if the parameter age is greater than 18.
//Otherwise, it asks for a confirmation and returns its result.

/*function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Do you have your parents permission to access this page?');
  }
}
Rewrite it, to perform the same, but without if...else, and use the arrow function*/

//const checkAge = (age) => (age > 18) || confirm('Do you have your parents permission to access this page?');

//console.log(checkAge(12))

//Exercise 2
//Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

//pow(3, 2) = 3 * 3 = 9
//P.S. In this task, the function should support only the natural values of n: integers up from 1.

const pow = (x,n) => n > 1? x**n :'';

//console.log(pow(3,2));


//Exercise 3
//Replace Function Expressions with arrow functions in the code:

/*function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no()
}

ask(
  "Do you agree?",
  function() { alert("You agreed.") },
  function() { alert("You canceled the execution.") }
)*/


/*const ask = (question, yes, no) => (confirm(question)) ? yes(): no();

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
)

//console.log(ask)*/


//Exercise 4
//Create an object calculator with three methods:
/*
read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );*/

const calculator= {
    read: function() {
        this.number1 = parseFloat(prompt("Please insert the first number:"));
        this.number2 = parseFloat(prompt("Please insert the first number:"));
      },
      sum: function() {
        const sum = this.number1 + this.number2
        { return `The sum of thosenumbers ${this.number1},${this.number2} is ${sum}`; }
      },
      mul: function() {
        const result  = this.number1 * this.number2
        { return `The multiply of thosenumbers ${this.number1},${this.number2} is ${result}`; }

}}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//Exercise 5
//Write a function min(a,b) which returns the least of two numbers a and b. Use the arrow function along with the question mark operator ?

const min = (a, b) => (a < b ? a : b);

const result = min(7, 3);
console.log(result);