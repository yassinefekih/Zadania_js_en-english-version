////////:
var car = {
    speed:350,
    color:"red",
    mark:"BMW"
};
console.log(car.speed);
console.log(car.color);
console.log(car.mark);
//////////
function changeSpeed(obj,newspeed,newcolor,newMark){
    obj.speed = newspeed;
    obj.color=newcolor;
    obj.mark=newMark;
}
///////::
var obj = {
    sum:0
}

function sumObj(obj,arr){
    for(i=0;i<arr.length;i++){
        obj.sum +=arr[i];
    }
    return console.log(obj.sum);
}
///////
var car2 = {
    name:"BMW",
    age:2,
    color:"black"
};
for(i=0;i<Object.keys(car2).length;i++){
    console.log(Object.keys(car2)[i]+" : "+Object.values(car2)[i])
}
////////
var anyobj={matricul:"885BMW8007",option:"Radio"};
car2.obj2=anyobj;
console.log(car2.obj2);
/////
function hello(obj,name){
        Object.assign(obj,name);
    return console.log("hallo");
}
hello(car2,{newvalue:""});
///////////

