document.getElementById("test-event").addEventListener("click",(event)=>console.log(event));

document.addEventListener("mousemove",(event)=>console.log(event));

document.getElementById("test-event").addEventListener("mouseover",(event)=>console.log(event));

document.addEventListener("keypress",(event)=>console.log(event));

document.addEventListener("mousedown",(event)=>console.log(event));

document.getElementById("input-test").innerHTML = "change_text";

///////////

document.getElementById("ex2").addEventListener("click",(event)=>document.getElementById("span-ex2").innerHTML =event.target.attributes["data-text"].nodeValue);

/////

document.getElementById("ex3").addEventListener("mouseover",(event)=>event.target.style["background-color"].hover ="blue");
document.getElementById("ex3").addEventListener("mouseout",(event)=>event.target.style["background-color"].hover ="red");

////

document.getElementById("calculator").addEventListener("keypress",(event)=>{
    if(isNaN(event.target.value)){   
       alert("you cannot enter digits");
    }
})
/////////?????
///////////
function stop(event){
    if(document.documentElement.scrollTop > 200){
        event.target.bgColor="red";
    }else {
        event.target.bgColor="";
    }
}
document.addEventListener("scroll",(event)=>{
console.log(document.documentElement.scrollTop > 200);
console.log(event);
stop(event);
}
)
///////////????????,