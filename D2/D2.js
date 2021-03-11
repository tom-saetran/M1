/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.

*/
/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* 

Booleans
    The simplest data structure of them all, can only be true or false.
    Simple yes or no questions can be expressed as booleans.
        "Is it night-time?"
            true;  Yes it is.
            false; No it is not.

Numbers
    Numbers are any numerical value like 5, 3.14, -8 etc.
        Javascript only have one numbertype; 64-bit signed floating point.
            In other languages this would compare to type "double".
            Even integers are 64-bit signed floating point numbers in javascript.
                Floating point numbers do not have particular high precision

Strings
    Strings are a sequence of characters.
        Strings can contain letters, numbers and symbols.
        Strings can form words, sentences, or even complete rubbish
        Any number can be converted to a string, but not all strings can be converted to a number
        We use "", '' or `` around strings to declare them in code
*/

/* EXERCISE 2
Try to describe what a variable is, in your own words.
*/

/* 
    A variable is a container that holds data that we can reference by name in our code.
        A variable cannot change name after being declared, but the value(s) that it holds can be.
*/

/* EXERCISE 3
Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let mySum = 12 + 20

/* EXERCISE 4
Create a variable named x containing the number 12.
*/

let myFirstX = 12

/* EXERCISE 5
Create a variable called name containing the string John Doe.
*/

let name = "John Doe"

/* EXERCISE 6
Execute a subtraction between the number 12 and the variable x, which is storing the value 12.
*/

let myOtherSum = 12 - myFirstX

/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/

let name1 = "john"
let name2 = "John"
let myFalseBool = name1 === name2
let myTrueBool = name1.toLowerCase() === name2.toLowerCase()

/* EXERCISE 8
Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/

let myOtherX = 7
let literalValue = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
console.log(literalValue[myOtherX])

/* EXERCISE 9
[Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/

let ternaryCondition = 4 !== 4
let ternaryValue = (ternaryCondition) ? "ifTrue" : "ifFalse"

/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/