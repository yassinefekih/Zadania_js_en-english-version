
let arr = new Array('one',"two","3");
arr.forEach((el)=>console.log(el));
////
let arr = new Array('one',"two",1,2,3);
    console.log(arr[0],arr[1]);
    console.log(arr[arr.length-1]);
//??
arr.filter(Number);
//OR
let numbersOnly = (val) => {
    if (typeof(val) === 'number') {      
      return val;
    }
  }
  let numbers = arr.filter(numbersOnly);
  numbers.forEach((el)=>console.log(el));
//
let stringsOnly = (val) => {
    if (typeof(val) === 'string') {      
      return val;
    }
  }
  let strings = arr.filter(stringsOnly);
  strings.forEach((el)=>console.log(el));
  ///////////////
  let arr = new Array(1,2,3,99,50);
  sum=0;
  for(i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  console.log(sum);
  ///