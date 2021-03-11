/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const area = function (l1, l2) {
    return l1 * l2
}

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values,
but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function (int1, int2) {
    return int1 === int2 ? (int1 * int2 * 3) : (int1 * int2)
}

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function (a) {
    a = Math.abs(a)
    return a > 19 ? ((a - 19) * 3) : (a - 19)
}

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary = function (n) {
    if ((n >= 20 && n <= 100) || n == 400)
        return true
    return false
}

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive",
then it should just return the original string.
*/

const strivify = function (input) {
    if (!input.includes("Strive"))
        return "Strive" + input
    return input
}

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = function (input) {
    if (input > 0 && (input % 3 === 0 || input % 7 === 0))
        return true
    return false
}

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

const reverseString = function (input) {
    let tempString = ""

    for (let i = input.length - 1; i >= 0; i--) {
        tempString += input[i]        
    }

    return tempString
}

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

const upperFirst = function (input) {
    let tempString = input.split(' ')
    let outString = ""
    tempString.forEach(word => {
        outString += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
    })
    return outString
}

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = function (input) {
    return input.substr(1, input.length -2)
}

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = function (n) {
    let tempArray = []
    for (let i = 0; i < n; i++) {
        tempArray.push(Math.random() * 10) 
    }
    return tempArray
}

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/