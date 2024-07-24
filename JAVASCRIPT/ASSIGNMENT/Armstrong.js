function Arm(num) {
    var n = num;
    var digit = 0;

    while (num != 0) {
        var rem = num % 10;
        digit = digit + rem * rem * rem;
        num=parseInt(num/10)
    }

    if (n == digit) {
        console.log("Armstrong Number");
    } else {
        console.log("Not Armstrong Number");
    }
}

var a = parseInt(prompt("Enter Number to check Armstrong or Not:-"));
Arm(a);
