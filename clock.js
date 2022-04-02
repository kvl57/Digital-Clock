function displayTime(){
var time = new Date();
var hour = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();


var session = document.getElementById('session');
if(hour >= 12){
  session.innerHTML = 'PM';
}else{
  session.innerHTML = 'AM';
}



document.getElementById('h').innerHTML = hour;
document.getElementById('m').innerHTML = min;
document.getElementById('s').innerHTML = sec;
}
setInterval(displayTime, 10);
