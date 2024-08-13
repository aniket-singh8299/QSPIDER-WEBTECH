function array(arr1,arr2){
  for(let i=0;i<arr1.length;i++){
    arr1[arr1.length]=arr2[i];
  }
}
let arr1=[1,2,3,4,5,6,7,8]
let arr2=[9,10,11,12,13,14,15,16]
console.log(array(arr1,arr2));