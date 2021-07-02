var list = document.getElementsByClassName('list');
////
function searchByName(parm){
    var elemnt = document.getElementsByTagName(parm);
    for (let elem of elemnt) {
        console.log(elem.innerHTML);
      }
      return elemnt;
}

  //////
var listId = document.getElementById("list");
////
function listItems(parm){
    const x = document.querySelectorAll(parm);
    for (let elem of x) {
        console.log(elem.innerHTML);
      }
}
