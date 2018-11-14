let arr=["a","b","c"]; 


//first way to map ["a","b","c"] -> ["aA","bB","cC"]
let arr1=[];
for(let i=0; i<arr.length; i++){
    arr1[i]=(arr[i])+(arr[i]).toUpperCase();

}
console.log(arr1); //-->["aA","bB","cC"]


//second way to map ["a","b","c"] -> ["aA","bB","cC"]
let arr2=arr.map(e=>e+e.toUpperCase());
console.log(arr2);  //-->["aA","bB","cC"]