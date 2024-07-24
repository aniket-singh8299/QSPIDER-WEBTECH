function Larger(arr1){
  if (arr1.length==0){
    return 0;
  }
  var max=arr1[0];
  for (var i=0;i<arr1.length;i++){
    if (arr1[i]>max){
        max=arr1[i];
        }
        }
        return max;
        }



const arr=[1,2,3,40,5,6,8];

console.log(Larger(arr));