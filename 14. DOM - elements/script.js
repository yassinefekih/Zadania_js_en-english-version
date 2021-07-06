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

