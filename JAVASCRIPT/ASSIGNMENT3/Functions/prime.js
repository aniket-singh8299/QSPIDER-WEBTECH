function prime(num) {
    if (num <= 1) {
      console.log("NOT PRIME");
      return;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        console.log("NOT PRIME");
        return;
      }
    }
    console.log("Prime Number");
  }
  
  let a = parseInt(prompt("Enter Number To check:-"));
  prime(a);
  