function PrimeNumber(num){
var i;
var count=0;
for(i=2;i<=num/2;i++){
  if (num%i==0){
    count++;
    break;
  }

}
if (count==0 &&num!=1){
  console.log(num+" is a prime number");
} else{
  console.log(num+" is not a prime number");
}


}
let a=parseInt(prompt("enter a number:-"));
PrimeNumber(a);