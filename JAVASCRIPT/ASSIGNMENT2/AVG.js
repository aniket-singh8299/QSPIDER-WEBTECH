function Avg(numbers){
    if (numbers.length==0){
        return 0;

    }
   let sum=0
    for(let i=0; i<numbers.length;i++){
      sum+=numbers[i]  
    }
    return sum/numbers.length;
}

const num=[34,56,78,33]
const avgs=Avg(num);
console.log(avgs);