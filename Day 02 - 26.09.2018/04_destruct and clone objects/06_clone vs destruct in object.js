
//------------------------OBJECT-----------------------
let obj1 = {
    age: 11,
    grade:100
};

//copy
let obj2={...obj1};

//destruct
let {age}={...obj1};
console.log(age); //--> 11


//------------------------ARRAY--------------------------

let arr1=[1,2,3];

//copy
let arr2=[...arr1];

//destruct
let [a1,a2,a3]=arr1;

