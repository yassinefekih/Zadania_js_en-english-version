function sucess(){
    return console.log("Success!");
};
//
function screenParam(param){
    return console.log(param);
};
///
function table(tb){
  if(tb.length){
         for(i=0;i<tb.length;i++){
            console.log(tb[i]);
    }
  }
     
}
/////////////
function autoStop(param){
 var z = setInterval(() => {console.log(param)}, 3000);
 setTimeout(() => { clearInterval(z);console.log('end');}, 15000);
          
}