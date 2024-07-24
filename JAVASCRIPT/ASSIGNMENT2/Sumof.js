function SumofArray(arr){
    if (arr.length==0){
        return 0;
    }
    let sum=0;
    for (let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
const arr1=[3,6,7,8]
console.log(SumofArray(arr1));