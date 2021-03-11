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
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/

let myArray = [1, 3, 5]
let myReversedArray = []
for (let i = myArray.length; i > 0; i--) {
    myReversedArray.push(myArray[i - 1])
}

/* EXERCISE 2
Write the code to get the maximum value in an array.
*/

let myArrayMaxValue = Math.max(...myArray)

/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

let myArrayMinValue = Math.min(...myArray)

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/

let myBiggerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
let myArrayEvenOnlyArray = []
myBiggerArray.forEach(value => {
    if (value % 2 === 0)
        myArrayEvenOnlyArray.push(value)
})

/* EXERCISE 5
Write the code to delete even entries from an array.
*/

let myTempArray = [] // changing an array while referencing it is bad practice, so a temp array is made
myBiggerArray.forEach(value => {
    if (value % 2 === 1)
        myTempArray.push(value)
})
myBiggerArray = myTempArray

/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/

let myString = "Hello World, I am a wonderful string containing vowels."
let myVowelLessString = myString.replace(/[aeiouy]/ig,"")

let tempString = ""
for (let i = 0; i < myString.length; i++) {
    if (myString.charAt(i).toLowerCase() !== 'a' &&
        myString.charAt(i).toLowerCase() !== 'e' &&
        myString.charAt(i).toLowerCase() !== 'i' &&
        myString.charAt(i).toLowerCase() !== 'o' &&
        myString.charAt(i).toLowerCase() !== 'u' &&
        myString.charAt(i).toLowerCase() !== 'y')
        tempString += myString[i]
}

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/

let myOtherArray = [1, 2, 3, 4, 5, 6, 7, 8]
myOtherArray = myOtherArray.map(n => n + 1)

/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/

let myStringArray = ["This", "is", "a", "string", "array", "hooray"]
let myTempStringArray = []
myStringArray.forEach(element => {
    myTempStringArray.push(element.length)
})
myStringArray = myTempStringArray

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/