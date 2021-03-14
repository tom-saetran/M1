/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/

let test = "Some String"

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/

let sum = 10 + 20

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

let random = Math.random() * 20

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

let me = {
    name: "Tom",
    surname: "Sætran",
    age: 32
}

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/

delete me.age

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/

me.skills = ["C#", "C", "C++", "HTML", "CSS", "JS", "Java", "PHP"]

/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/

me.skills.pop()

// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/

const dice = () => {
    return Math.floor(Math.random() * 6) + 1
}

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/

const whoIsBigger = (num1, num2) => {
    return num1 >= num2 ? num1 : num2
}

/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

const splitMe = (input) => {
    return input.split(' ')
}

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/

const deleteOne = (input, bool) => {
    return bool ? input.substring(1) : input.substring(0, input.length - 1)
}

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/

const onlyLetters = (input) => {
    let tempString = ""

    for (let i = 0; i < input.length; i++) {
        if (input[i] !== '0' &&
            input[i] !== '1' &&
            input[i] !== '2' &&
            input[i] !== '3' &&
            input[i] !== '4' &&
            input[i] !== '5' &&
            input[i] !== '6' &&
            input[i] !== '7' &&
            input[i] !== '8' &&
            input[i] !== '9')
            tempString += input[i]
    }

    return tempString
}

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/

const isThisAnEmail = (input) => {
    // This is a very hard task to do 100% accurate
    // Most heavy coded parses even fail due to locale
    // Æmail@Øöeá.com will not validate but can be a legal address
    // One would need to keep an updated .tld list
    // Are local adresses excempt? address@localhost is valid, but contains no tld

    // this is a minimalistic approach checking if the address contains one, and only one @ that is not at the beginning or the end of the string
    return input.indexOf("@") > 0 && input.split("@").length - 1 === 1 && input.indexOf("@") !== input.length - 1
}

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/

const whatDayIsIt = () => {
    let currentDay = new Date()
    let dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    return dayArray[currentDay.getDay()]
}

/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

const rollTheDices = (n) => {
    let rollsArray = []
    let rollsSum = 0

    for (let i = 0; i < n; i++) {
        let temp = dice()
        rollsArray.push(temp)
        rollsSum += temp
    }

    return {
        sum: rollsSum,
        values: rollsArray
    }
}

/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/

const howManyDays = (day, month, year) => {
    let inputDate = Date.parse(year + "-" + month + "-" + day)

    return Math.floor((Date.now() - inputDate) / 1000 / 60 / 60 / 24)
}

/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/

const isTodayMyBirthday = (day, month) => {
    let today = new Date()

    return today.getDate() === day && today.getMonth() + 1 === month
}

// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/

const deleteProp = (object, param) => {
    delete object[param]

    return object
}

/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/

const olderMovie = () => {
    let oldestMovieIndex = 0
    let oldestMovieAge = 9999

    for (let i = 0; i < movies.length; i++) {
        if (movies[i].Year < oldestMovieAge) {
            oldestMovieIndex = i
            oldestMovieAge = movies[i].Year
        }
    }

    return movies[oldestMovieIndex]
}

/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/

const countMovies = () => {
    return movies.length
}

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/

const onlyTheTitles = () => {
    let titleArray = []

    movies.forEach(movie => {
        titleArray.push(movie.Title)
    })

    return titleArray
}

/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/

const onlyInThisMillennium = () => {
    let movieArray = []

    movies.forEach(movie => {
        if (movie.Year >= 2000)
            movieArray.push(movie)
    })

    return movieArray
}

/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/

const getMovieById = (input) => {

    for (let i = 0; i < movies.length; i++) {
        if (movies[i].imdbID === input)
            return movies[i]
        return "Not in database"
    }
}

/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/

const sumAllTheYears = () => {
    let sumYears = 0

    movies.forEach(movie => {
        sumYears += parseInt(movie.Year)
    })

    return sumYears
}

/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/

const searchByTitle = (input) => {
    let matchedMovies = []

    movies.forEach(movie => {
        if (movie.Title.toLowerCase().includes(input))
            matchedMovies.push(movie)
    })

    return matchedMovies
}

/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/

const searchAndDivide = (input) => {
    let matchedArray = []
    let unmatchedArray = []

    movies.forEach(movie => {
        movie.Title.toLowerCase().includes(input) ? matchedArray.push(movie) : unmatchedArray.push(movie)  
    })

    return {
        match: matchedArray,
        unmatch: unmatchedArray
    }
}

/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/

const removeIndex = (index) => {
    let tempArray = []

    for (let i = 0; i < movies.length; i++) {
        if (i !== index)
            tempArray.push(movies[i])
    }

    return tempArray
}

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

const halfTree = (n) => {
    n = Math.abs(n)

    if (n === 0)
        return null

    let treeString = ""

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            treeString += "*"      
        }

        if (i !== n)
            treeString += "\n"
    }

    return treeString
}

/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

const tree = (n) => {
    n = Math.abs(n)

    if (n === 0)
        return null

    let numSpaces = n - 1
    let numStars = 1

    let treeString = ""

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < numSpaces; j++)
            treeString += " "
        for (let j = 0; j < numStars; j++)
            treeString += "*"

        if (i !== n)
            treeString += "\n"
        
        numSpaces--
        numStars += 2
    }

    return treeString
}

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

const isItPrime = (input) => {
    input = Math.abs(input)

    if (input === 0)
        return null

    if (input === 1)
        return undefined

    if (input === 2 || input === 3)
        return true

    if (input % 2 === 0) {
        return false
    }

    for (let i = 3; i < input - 1; i += 2) {
        if (input % i === 0)
            return false
        return true
    }
}

/* This movies array is used throughout the exercises. Please don't change it :)  */
const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
  ]