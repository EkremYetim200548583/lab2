// Importing functions from utilities.js
import { greetStudent, convertTemperature, calculateDiscount, generateRandomNumber } from './utilities.js';

// Calling functions to demonstrate usage:

// Greeting a student
greetStudent("Group", "8");

// Converting temperature from Celsius to Fahrenheit
let temperatureInFahrenheit = convertTemperature(25, "CtoF");
console.log(`25°C is equal to ${temperatureInFahrenheit}°F`);

// Calculating discount price
let discountedPrice = calculateDiscount(200, 20); // Original price: 200, Discount: 20%
console.log(`The price after a 20% discount is: $${discountedPrice}`);

// Generating a random number between 1 and 100
let randomNumber = generateRandomNumber(1, 100);
console.log(`A random number between 1 and 100: ${randomNumber}`);
