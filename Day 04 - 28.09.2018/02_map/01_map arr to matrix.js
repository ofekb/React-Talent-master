let arr=["a","b","c"]; 


//a way to map ["a","b","c"] -> [ ["a","A"] , ["b","B"] , ["c","C"] ]
let arr2=arr.map(e=>[e,e.toUpperCase()]);
console.log(arr2);  //--> [ ["a","A"] , ["b","B"] , ["c","C"] ]


let arr3=arr2.map(e1=>e1.map(e2=>e2+e2));
console.log(arr3); //--> [ [ 'aa', 'AA' ], [ 'bb', 'BB' ], [ 'cc', 'CC' ] ]