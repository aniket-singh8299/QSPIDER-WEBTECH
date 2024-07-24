function fact(num){
    let i=1;
    let f=1;
    for(i=1;i<=num;i++){
        f=f*i;
        
    
    }
    document.write(f);
    
    }
    let n=prompt("Enter Number for factorial of a given Number:-")
    fact(n)