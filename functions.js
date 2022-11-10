// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.

function printGreeting() {
    console.log("Bom dia!")
}
printGreeting()
printGreeting()
printGreeting()

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
function weatherToday(weather) {
    console.log(`Today the weather in Boulder is ${weather}`)
}

weatherToday("disappointingly cold :(")


// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).
function companyPost(str, num1, num2) {
    console.log(`${str} has a job available which pays between \$${num1} and \$${num2}`)
}

companyPost("Twitter", 0, 5)

// 4: Write a function that satifies the following interaction pattern:
function checkStock(num, food) {
    var qty
    if (num===0) {
        qty = "- OUT of stock!"
    } else if (num <= 3) {
        qty = "- running LOW"
    } else {
        qty = "is stocked"
    }
    console.log(`${food} ${qty}`)

}
checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"