
const number = prompt("Nhập vào một số nguyên:");
if (number !== null) {
    const integerNumber = parseInt(number); 

    if (isNaN(integerNumber)) {
        console.log("Vui lòng nhập vào một số nguyên hợp lệ.");
    } else {
        let binaryRepresentation = ""; 
        let n = integerNumber; 

       
        do {
            binaryRepresentation = (n % 2) + binaryRepresentation; 
            n = Math.floor(n / 2); 
        } while (n > 0); 

        console.log(`Số nhị phân của ${integerNumber} là: ${binaryRepresentation}`);
    }
}  