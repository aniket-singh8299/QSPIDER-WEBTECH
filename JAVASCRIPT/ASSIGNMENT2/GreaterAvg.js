function GreaterAVG(arr) {
    if(arr.length==0){
        return 0;

    }
    let sum=0;
    for (let i=0;i<arr.length;i++){
        sum+=arr[i];

    }
   

    const avg=sum/arr.length;
    const max=[];
    for (let i=0;i<arr.length;i++){
        if(arr[i]>avg){
            max.push(arr[i]);
        }
    }
    return max;
    
}

const arr1=[34,2,11,3,4,77,88]
console.log(GreaterAVG(arr1));