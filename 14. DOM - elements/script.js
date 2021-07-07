var x = document.getElementsByClassName("more-divs");
function arrayofElement(pram){
    var arrayOfTags =[];
    for(var i = 0; i < pram.length; i++)
    arrayOfTags.push(pram[i].tagName);

    
    return arrayOfTags
}
arrayofElement(x);

///////////
function display(list){
    for(var i = 0; i < list.length; i++)
   {
        console.log(list[i].outerHTML);
        console.log(list[i].innerHTML);
        console.log(list[i].className);
        //console.log(list[i].dataset);
        }
}
display(x);
/////
var a = document.getElementById("spanText");
a.innerText = "change text";
///////
document.getElementById("spanText").classList.add('NewClass');
/////???????????
//////
var longlist = document.getElementById("longList");
for(i=0;i<longlist.childElementCount;i++){
    if(longlist.children[i].dataset.text ===undefined){
        longlist.children[i].dataset.text="text";
       
    }else{
        console.log(longlist.children[i].dataset.text);
    }
}
////////////
function convertStringToObj(string){
    return obj={newClass: string}
}
function readstring(obj){
    return obj2 = obj.newClass;
}
var a = document.getElementById("myDiv");
a.className=(readstring(convertStringToObj("Test")));

//////

function addNumberToClass(param){
    var cl = document.getElementById("numbers");
    if(param%2===0){
        cl.className="even";
    }else{
        cl.className="odd"
    }
return console.log("the number is : "+param+"\nthe classe name is: "+cl.className);
}
var random = Math.floor(Math.random() * 10);
addNumberToClass(random);
////////

function extractElement(longlist){
    var table =[];
    for(i=0;i<longlist.childElementCount;i++){
        table.push(longlist.children[i].textContent);
    }
    return table;
}
var longlist = document.getElementById("longList");
extractElement(longlist);
/////////////:
var longlistChildren = document.getElementById("longList").children;
function childrenElement(children){
    var oldValue = [];
    for (i=0;i<children.length;i++){
        oldValue.push(children[i].textContent);
        children[i].textContent=Math.floor(Math.random() * 10);
        console.log(children[i].textContent);
    }
    return oldValue;
}
var oldVlaueofLongList=childrenElement(longlistChildren);
//////////
