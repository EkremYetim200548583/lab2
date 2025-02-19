// Function to greet a student
export function greetStudent(firstName, lastName) {
    console.log(`Hello, ${firstName} ${lastName}! Welcome to the JavaScript course.`);
  }
  
  // Function to convert temperature
  // Accepts two arguments: the temperature and the type of conversion (CtoF or FtoC)
  export function convertTemperature(value, conversionType) {
    let result;
    if (conversionType === "CtoF") {
      result = (value * 9/5) + 32;  // Celsius to Fahrenheit
    } else if (conversionType === "FtoC") {
      result = (value - 32) * 5/9;  // Fahrenheit to Celsius
    }
    return result.toFixed(2);  // Return the result rounded to 2 decimal places
  }
  
  // Function to calculate the price after applying a discount
  // Takes the original price and the discount percentage
  export function calculateDiscount(price, discountPercentage) {
    let discountAmount = (price * discountPercentage) / 100;
    let finalPrice = price - discountAmount;
    return finalPrice.toFixed(2);  // Return the final price rounded to 2 decimal places
  }
  
  // Function to generate a random number between min and max values
  // Takes two arguments: the minimum and maximum number
  export function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  