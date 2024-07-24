function RemoveFalsy(arr){
    let filter=[];
    for(let i=0;i<arr.length;i++){
           if(arr[i]){
            filter.push(arr[i]);
           }
    }
    return filter;
}
const arr1=[2,null,undefined,0,true,"hello",NaN,false];
console.log(RemoveFalsy(arr1));