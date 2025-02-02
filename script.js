//Part 1: Arithmetic Operators

// Declaring and initializing variables
num1 = 15
num2 = 10


// Operators, assigning value of an operation to a variable
numSum = num1 + num2 // Addition

numDifference = num1 - num2 // Subtraction

numProduct = num1 * num2 // Multiplication

numQuotient = num1 / num2 // Division

numRemainder = num1 % num2 // Division, but result is remainder

// Print statement shows each operation
console.log(
            " num1:", num1, "num2:", num2, "\n",
            "Sum of num1 and num2:", numSum, "\n",
            "Difference of num1 and num2:", numSum, "\n",
            "Product of num1 and num2:", numProduct, "\n",
            "Quotient of num1 and num2:", numQuotient, "\n", 
            "Remainder of num 1 divided by num 1:", numRemainder
)

// Part 2: Relational Operators 

greaterThan = num1 > num2 // Greater than

lessThan = num1 < num2 // Less than

greaterThanEqualTo = num1 >= num2 // Greater than or equal to

lessThanEqualTo = num1 <= num2 // Less than or equal to

equalTo = num1 === num2 // Equal to

notEqualTo = num1 !== num2 // Not equal to

// Print statement shows result of relational operations
console.log(
    " num1:", num1, "num2:", num2, "\n",
    "num1 is greater than num2:", greaterThan, "\n",
    "num1 is less than num2:", lessThan, "\n",
    "num1 is greater than or equal to num2:", greaterThanEqualTo, "\n",
    "num1 is less than or equal to num2:", lessThanEqualTo, "\n",
    "num1 is equal to num2:", equalTo, "\n",
    "num1 is not equal to num2:", notEqualTo
)

// Part 3: Logical Operators

isSunny = true
isWeekend = false

trueAndFalse = isSunny && isWeekend // Both conditions must evaluate to true

trueOrFalse = isSunny || isWeekend // Only one condition must be true to evaluate to true

// Print statement shows result of logical operations
console.log(
    " isSunny:", isSunny, "isWeekend:", isWeekend, "\n",
    "isSunny and isWeekend are true:", trueAndFalse, "\n",
    "isSunny or isWeekend is true:", trueOrFalse
)

// Part 4: Assignment Operators

score = 20
originalScore = score

score += 10
scoreAdded = score

score -= 10 
scoreTaken = score

score *= 2
scoreDoubled = score

// Print statement shows result of assignment operators
console.log(
    " Score:", originalScore, "\n",
    "Score +10:", scoreAdded, "\n",
    "Score -10:", scoreTaken, "\n",
    "Score doubled:", scoreDoubled, "\n",
)

// Part 5: User Interaction

// Prompts user for name until string inputted
while (true) {
    userName = prompt("Enter your Name: ")

    if (typeof userName === "string") {
        break;
    } 

    console.log(userName, " Is not valid input!!!")
}

// Prompts user for age until integer inputted
while (true) {
    userAge = prompt("Enter your Age: ")

    if (typeof parseInt(userAge) === "number") {
        break;
    } 

    console.log(userAge, " Is not valid input!!!")
}

// Outputs result of user input
console.log("Hello:", userName," , you're:", userAge," , years old!")











