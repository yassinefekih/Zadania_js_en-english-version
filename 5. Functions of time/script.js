
var n =1;
let timerId = setInterval(() => {console.log(n+": hello again");n++;}, 3000);
setTimeout(() => { clearInterval(timerId) }, 15000);