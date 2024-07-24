function Palindrome(num) {
    var n = num;
    let rev = 0;
    
    while (num != 0) {
        let digit = num % 10;
        rev = (rev * 10) + digit;
        num = parseInt(num/10) }
    
    if (n == rev) {
        console.log('Palindrome Number');
    } else {
        console.log('Not Palindrome Number');
    }
}

let u = parseInt(prompt("Enter Number To check:-"));
Palindrome(u);
