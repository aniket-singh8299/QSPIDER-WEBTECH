function fib(n){
    var a = 0;
    var b = 1;
    var i=0;
    console.log(a);
    console.log(b);
    while(i<n-2){
        next=a+b;
        console.log(next);
        a=b
        b=next
        i=i+1

    }
}
let a=parseInt(prompt("enter number to print fiboncci"))
fib(a)
