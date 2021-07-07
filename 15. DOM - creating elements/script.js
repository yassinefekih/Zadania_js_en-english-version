function ex1(){var newDiv = document.createElement("div");
newDiv.textContent="This is a new element";
document.body.appendChild(newDiv);}
/////////
function ex2(){
var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
var content =document.createElement("ul");
document.body.appendChild(content);
fruits.forEach((element)=>
{
    let li = document.createElement("li");
    li.textContent = element;
    content.appendChild(li);
}
)}
/// 
function ex3(){document.getElementById('root').remove();}
///
function ex4(){
  var btn = document.createElement("button");
  btn.innerHTML = "remove Page";
  btn.onclick = function () {
    document.body.remove();
  };
  document.body.appendChild(btn);

}
/////
function ex5(){
 var random = Math.floor(Math.random() * 100);
for(i=0;i<random;i++){
var newDiv = document.createElement("div");
newDiv.textContent=`this is div number ${i}`;
document.body.appendChild(newDiv);
}
}
/////ex
function ex6(){
var obj ={
  div1: 'this is div',
  span1: 'this is span',
  div2: {
      div3: 'this is div',
  },
  span2: 'this is span',
}
var divs = Object.keys(obj);
var contents =Object.values(obj);
for(i=0;i<divs.length;i++){
  var  newElement= document.createElement(divs[i]);
  newElement.textContent=contents[i];
  document.body.appendChild(newElement);
}}
///////
function ex7(){
var list1 = ["a", "b", "c", "d", "e","f"];
var list2 = [];
function place(l1,l2){
  btn2.disabled=list1.length === 0;
  if(list1.length != 0){
    l2.push(l1[l1.length-1]);
    l1.splice(l1.length-1,1);
    console.log("liste 2 :"+l2);
    console.log("liste 1 :"+l1);
  }

}
var btn2 = document.createElement("button");
btn2.innerHTML = "push";

btn2.onclick = function(){
  place(list1,list2);
} 
  document.body.appendChild(btn2);}
  ////////
  function ex8(){
    var content = document.createElement("div");
    var input1 = document.createElement("input");
    var input2 = document.createElement("input");
    var input3 = document.createElement("input");
    var button = document.createElement("button");

    input1.required;
    input1.type="text";
    input1.placeholder="put text here!";

    
    input2.required;
    input2.type="number";
    input2.placeholder="how many time";

    input3.type="text";
    input3.required;
    input3.placeholder="what color you wante";
    button.innerHTML = "create content";
    button.type="submit";
    function submitForm(input1,input2,input3){
      for(i=0;i<input2.valueAsNumber;i++)
      {
    
      var newContent = document.createElement("div");
        newContent.textContent =input1.value;
        newContent.style.color=input3.value;
        document.body.appendChild(newContent);
      }
    } 

    button.onclick = function (){
      submitForm(input1,input2,input3)};
    document.body.appendChild(content);
    content.appendChild(input1);
    content.appendChild(input2);
    content.appendChild(input3);
    content.appendChild(button);
  }
  ///////
  function ex9(){
    var col =[];
    var headers=["name","surname","age","number Of Children"];
    var table = document.createElement('table');
    var headRows=document.createElement('tr');
    headers.forEach(element=>{
      let header=document.createElement('th');
      let textNode=document.createTextNode(element);
      header.appendChild(textNode);
      headRows.appendChild(header);
    });
   table.appendChild(headRows);
 
   document.body.appendChild(table);
    var content = document.createElement("div");
    var input1 = document.createElement("input");
    var input2 = document.createElement("input");
    var input3 = document.createElement("input");
    var input4 = document.createElement("input");
    var button = document.createElement("button");
   
    input1.type="text";
    input1.placeholder="name";
    input2.type="text";
    input2.placeholder="surname";
    input3.type="number";
    input3.placeholder="age";
    input4.type="number";
    input4.placeholder="number Of Children";
    button.innerHTML = "create";

    function submitForm(ipt1,ipt2,ipt3,ipt4){
      var obj ={Name:"",surname:"",age:"",numberOfChildren:""};
      obj.name=ipt1.value;
      obj.surname=ipt2.value;
      obj.age=ipt3.valueAsNumber;
      obj.numberOfChildren=ipt4.valueAsNumber;
      col.push(obj);
      console.log(col);
      col.forEach(el=>{
        let row=document.createElement('tr');
        Object.values(el).forEach(text=>{
         let cell=document.createElement('td');
         let textNode=document.createTextNode(text);
         cell.appendChild(textNode);
         row.appendChild(cell);
        });
        table.appendChild(row)
      });
    }

    button.onclick=function(){
      submitForm(input1,input2,input3,input4);
    }
    document.body.appendChild(content);
    content.appendChild(input1);
    content.appendChild(input2);
    content.appendChild(input3);
    content.appendChild(input4);
    content.appendChild(button);


  }