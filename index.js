let altamash
let date;
let time;
const format = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
x= setInterval(()=>{
altamash = new Date();
time= altamash.getHours() + ":" + altamash.getMinutes() +":" + altamash.getSeconds();
date = altamash.toLocaleDateString(undefined, format);
document.getElementById("time").innerHTML=  time +" On " + date 
,1000})
console.log(x)