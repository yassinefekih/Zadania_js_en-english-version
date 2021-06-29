
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
  let arr = new Array(1,2,3,99,50);
  diff=0;
  for(i=0;i<arr.length;i++){
    diff-=arr[i];
  }
  console.log(diff);
  //////
  let arr = new Array(1,2,3,99,50);
  sum=0;
  for(i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  console.log(sum/arr.length);
/////
let arr = new Array(1,2,3,99,50,4,24,75);
arr.sort((a,b)=>b-a)
console.log(arr[6]);
/////
let arr = new Array(1,2,3,99,50,4,24,75);
arr.sort((a,b)=>a+b)
console.log(arr[7]);
////
let arr = new Array(1,2,3,99,50,4,24,75);
var inversArr =[];
for(i=1;i<=arr.length;i++){
inversArr.push(arr[arr.length-i]);
}
console.log(inversArr);
///////////
function sum(arr){
  var sum=0;
  for(i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  return sum;
}
///
function multiAvr(arr){
  var multi=[]
  var avrr=sum(arr)/arr.length;
  for(i=0;i<arr.length;i++){
  multi.push(arr[i] * avrr);
  }
  return multi;
}
/////
function even(arr){
  avr=0;
  counter=0;
  for(i=0;i<arr.length;i++){
    
    if(arr[i]%2===0){
      avr+=arr[i];
      counter++;
    }
  }
return avr/counter;
}
/////
function sortArray(arr){
  var sorted=arr.sort((a,b)=>a-b);
  return sorted;
}
////
arr1= new Array(1,2,3,4);
arr2= new Array(2,5,7,4);
arr3= new Array(2,5,7,4,8,50,7,0);
function addArray(array1,array2){
  result=[]
  for(i=0;i<array1.length;i++){
    result.push(array1[i]+array2[i]);
  }
  return result;
}

function twoArray(a,b){
var result=[];
  if(a.length>b.length){
    result=addArray(b,a);
    for(i=b.length;i<a.length;i++){
      result.push(a[i]);
    }
} else if(b.length>a.length){
    result=addArray(a,b);
      for(i=a.length;i<b.length;i++){
       result.push(b[i]);
  }
}else if(b.length==a.length){
  result=addArray(a,b);
}
return result;
}
/////////////
function arrayWithParametre(arr){
  result=[]
  for(i=0;i<arr.length;i++){
    result.push(arr[i]*-1);
  }
return result;
}