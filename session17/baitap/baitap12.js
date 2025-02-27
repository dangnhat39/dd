function decimalToBinary(decimal) {
    if (decimal < 0) {
        return "Invalid input. Please enter a non-negative integer.";
    }
    let binary = '';
    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary || '0';
}

const number = parseInt(prompt("Enter a number: "), 10);

if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
} else if (number < 0) {
    console.log("Invalid input. Please enter a non-negative integer.");
} else {
    let binary = '';
    let tempNumber = number;
    while (tempNumber > 0) {
    }
    console.log("Binary representation: " + (binary || '0'));
}