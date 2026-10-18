console.log("TASK 6: Variables and Data Types");
let fullName = "Nurailym Rakhatova";
const age = 18;
let isStudent = true;
const favouriteColour = "Pink";
console.log("Full name:", fullName);
console.log("Type:", typeof fullName);
console.log("Age:", age);
console.log("Type:", typeof age);
console.log("Student:", isStudent);
console.log("Type:", typeof isStudent);
console.log("Favourite colour:", favouriteColour);
console.log("Type:", typeof favouriteColour);
fullName = "Nurailym Rakhatova";
console.log("Updated name:", fullName);
console.log("const is used for values that should not be reassigned.");
console.log("TASK 7: Input and a Greeting");
let userName = prompt("Enter your name:");
if (userName === null || userName.trim() === "") {
    userName = "Student";
}
alert("Hello, " + userName + "! Welcome to JavaScript.");
const group = "MT-2501";
const secondGreeting = `My name is ${userName} and my group is ${group}.`;
console.log(secondGreeting)
console.log("TASK 8: Sum and Arithmetic");
const firstNumber = Number(prompt("Enter the first number:"));
const secondNumber = Number(prompt("Enter the second number:"));
console.log("Sum:", firstNumber + secondNumber);
console.log("Difference:", firstNumber - secondNumber);
console.log("Product:", firstNumber * secondNumber);
if (secondNumber !== 0) {
    console.log("Quotient:", firstNumber / secondNumber);
    console.log("Remainder:", firstNumber % secondNumber);
} else {
    console.log("Division and remainder are not possible with zero.");
}
console.log('String addition: "12" + "5" =', "12" + "5");
console.log("Number addition: 12 + 5 =", Number("12") + Number("5"));
console.log("TASK 9: Strings");
const studentName = "Nurailym Rakhatova";
console.log("Full name:", studentName);
console.log("Length:", studentName.length);
console.log("Uppercase:", studentName.toUpperCase());
console.log("Lowercase:", studentName.toLowerCase());
console.log("First three characters:", studentName.slice(0, 3));
const firstPart = "I am a student";
const secondPart = "and I study Media Technologies.";
console.log(firstPart + " " + secondPart);
console.log("TASK 10: Increment and Assignment Operators");
let counter = 10;
counter++;
console.log("After ++:", counter);
counter--;
console.log("After --:", counter);
counter += 5;
console.log("After += 5:", counter);
counter -= 3;
console.log("After -= 3:", counter);
counter *= 2;
console.log("After *= 2:", counter);
counter /= 4;
console.log("After /= 4:", counter);
console.log("TASK 11: Dog Age Calculation");
let dogAge = 2;
let humanAge = (dogAge - 2) * 4 + 21;
console.log("Dog age:", dogAge, "Human age:", humanAge);
dogAge = 5;
humanAge = (dogAge - 2) * 4 + 21;
console.log("Dog age:", dogAge, "Human age:", humanAge);
console.log("TASK 12: Functions");
function greetUser(name) {
    console.log("Hello, " + name + "!");
}

function calculateSum(a, b) {
    return a + b;
}

function calculateRectangleArea(width, height) {
    return width * height;
}

greetUser("Nurailym");
greetUser("Alex");
console.log("Sum of 3 and 4:", calculateSum(3, 4));
console.log("Sum of 10 and 5:", calculateSum(10, 5));
console.log("Rectangle area 5 x 3:", calculateRectangleArea(5, 3));
console.log("Rectangle area 8 x 4:", calculateRectangleArea(8, 4));
