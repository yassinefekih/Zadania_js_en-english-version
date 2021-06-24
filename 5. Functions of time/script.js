
var n =1;
let timerId = setInterval(() => {console.log(n+": hello again");n++;}, 3000);
setTimeout(() => { clearInterval(timerId) }, 15000);
//////
var number =1;
var table =["1","2","3","red","blue","green"];
setTimeout(() => {
    table.map((element)=>console.log(element));
    setTimeout(()=>
        {
            setInterval(() => {
                        table.map((element)=>console.log(element));
                        table.push(number+"more");
                        number++;
                    }, 3000);}
                ,3000);
     }, 2000);


