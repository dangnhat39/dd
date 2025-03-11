function isPalindrome() {
    let str = prompt("mời bạn nhập chuỗi")
    let flag = 1;
    for (let i; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            flag = 0;
            break;
        }
    }
    flag ? console.log("là chuỗi đối xứng") : console.log("khoogn phải chuỗi đối xứng");
}
isPalindrome();