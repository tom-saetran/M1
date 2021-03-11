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
Create and array containing the first 5 positive numbers.
*/

let myArray = [1, 2, 3, 4, 5]


/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

let myObject = {
    name: "Tom",
    surname: "Sætran",
    email: "***********@gmail.com",
    age: 32
}

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

myObject.haveDriversLicense = true;

/* EXERCISE 4
Remove from the previously created object the age property.
*/

delete myObject.age;

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

let myOtherObject = {
    name: "Tom",
    surname: "Sætran",
    email: "******@outlook.com"
}

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCost = 400
let shippingCost = totalShoppingCost > 50 ? 0 : 10
let totalCostWithShipping = totalShoppingCost + shippingCost

/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let blackFridayShoppingCartCost = totalShoppingCost * 0.8
shippingCost = blackFridayShoppingCartCost > 50 ? 0 : 10
let totalBlackFridayCostWithShipping = blackFridayShoppingCartCost + shippingCost

/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

let myCar1 = {
    brand: "Toyota",
    model: "Corolla",
    licensePlate: "XR-546"
}

let myCar2 = {...myCar1} // {...variable} creates a copy instead of a pointer
let myCar3 = {...myCar1} // is the same as target = Object.assign({}, source)
let myCar4 = {...myCar1}
let myCar5 = {...myCar1}

myCar2.licensePlate = "DG-922"
myCar3.licensePlate = "VV-523"
myCar4.licensePlate = "BQ-036"
myCar5.licensePlate = "TD-391"

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

let carsForRent = [myCar1, myCar2, myCar3, myCar4, myCar5]

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

carsForRent.shift()
carsForRent.pop()

/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/

console.log(typeof(myCar1))
console.log(typeof(myCar1.licensePlate))
console.log(typeof(myCar1.brand))

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

let carsForSale = []
carsForSale.push({
    brand: "Opel",
    model: "Corsa",
    licensePlate: "RW-942"
}, {
    brand: "Ford",
    model: "Taurus",
    licensePlate: "CS-588"
}, {
    brand: "Scoda",
    model: "Fabia",
    licensePlate: "OF-649"
})

let totalCars = carsForRent.length + carsForSale.length

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

carsForSale.forEach(car => {
    console.log(car)
})

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/