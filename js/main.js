var countdown = document.querySelector(".countdown");
//lunch date
var launch = new Date('Jun 12, 2018, 15:00:00').getTime();
//ms interval
var intvl = setInterval(function(){
    //current date
    var now = new Date().getTime();
    var distance = launch-now;
    var days = Math.floor((distance)/(60*60*24*1000));
    var hours = Math.floor((distance)%(60*60*24*1000)/(1000*60*60));
    var mins = Math.floor((distance)%(60*60*1000)/(1000*60));
    var seconds = Math.floor((distance)%(60*1000)/1000);
    //show result
    countdown.innerHTML =  
        `<div>${days}<span>days</span></div>
        <div>${hours}<span>hours</span></div>
        <div>${mins}<span>mins</span></div>
        <div>${seconds}<span>seconds</span></div>`
    if (distance<0){
        //stop countdown
        clearInterval(intvl);
        //style and output text
        countdown.style.color = "#eee";
        countdown.innerHTML = 'Lunched!';
    }
    
},1000)