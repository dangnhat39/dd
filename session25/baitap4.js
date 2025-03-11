
function kiemTraSoNguyen(number) {

    if (!Number.isInteger(number)) {
        console.log("Du lieu khong hop le");
    }
    let count = 0;
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            count++;
        }
    }
    count == 1 ? console.log("Prime number") : console.log("Not a prime number");
}

kiemTraSoNguyen(7);
kiemTraSoNguyen(9);
kiemTraSoNguyen(Text);