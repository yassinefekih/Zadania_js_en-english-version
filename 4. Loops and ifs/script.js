var nbrOne = 56;
var nbrTwo = 41;
if (nbrOne>nbrTwo){
    result = nbrOne;
}else {
    result= nbrTwo;
}
//////////////////
var nbrOne = 5;
var nbrTwo = 41;
var nbrThree = 100;

if (nbrOne>nbrTwo){
    result = nbrOne;
}else if (nbrTwo>nbrThree){
    result= nbrTwo;
}else {
    result = nbrThree;
}
////////////////
var counter = 0;
while(counter<10){
    console.log('Love JavaScript');
    counter++;
}

var counter = 0;
for(counter=0;counter<10;counter++){
    console.log('Love JavaScript');
}
//////////
var result = 0;
for(var i=0;i<=10;i++){
    result+=i;
}
/////////////
var n= 5;
var counter = 0;
while(counter<=n){
    if (counter%2==0){
            console.log(counter+": paire");
            counter++;
    } else {
        console.log(counter+": impaire");
        counter++;
    }
}

for(var n=0;n<=5;n++){
    if (n%2==0){
        console.log(n+": paire");
} else {
    console.log(n+": impaire");
}
}
/////////////



/////////////

for(var i=0;i<=100;i++){
if(i%3===0 && i%5===0){
    console.log("FizzBuzz");
}else if(i%3===0){
    console.log("Fizz");
}else if(i%5===0){
    console.log("Buzz");
}else{
    console.log(i);
}
}
//////
//a
var r="";
var t="*";
for( i=0;i<5;i++){
     r=r+t+"\n";
     t=t+"*";
}
console.log("```\n"+r+"```");


var r='';
for(i=1; i <= 5; i++)
{
 for(j=1; j<=i; j++)
{
  
  r=r+"*";
 }
 r=r+"\n"
 }
 console.log("```\n"+r+"```");
//b
var y = 6;
var x = 6;
var r = "";
for(var i = 1; i < y; i++ ){
    for(var j = 1; j < x; j++){
        if(i + j >= y){
            r = r+" *";
        }else{
            r = r+" ";
        }
    }
    r = r+"\n";
}

console.log(r)
//C
