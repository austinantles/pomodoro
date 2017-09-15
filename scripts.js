var length = 25;
var breaks = false;
var breakTime = 5;
var timer;
var pause;
var clock = $('.clock').FlipClock({
  autoStart: false,
  countdown: true,
  clockFace: 'MinuteCounter',
});
clock.setTime(length*60);
$(".break").text(breakTime);
$(".add").on("click",function(){
  length += 1; 
  timer = length*60;
  clock.setTime(length*60)
});

$(".breakAdd").on("click",function(){
  breakTime += 1; 
  $(".break").text(breakTime);
  clock.setTime(length*60)
});

$(".subtract").on("click",function(){
  if(length>0){
    length -= 1;
    timer = length*60;
  }
  clock.setTime(length*60)
});

$(".breakSubtract").on("click",function(){
  if(breakTime>1){
    breakTime -= 1;
  }
  $(".break").text(breakTime);
});

$(".start").on("click",function(){
  start();
});

$(".pause").on("click",function(){
  clearInterval(pause);
  clock.stop();
});

$(".reset").on("click",function(){
  clearInterval(pause);
  clock.reset();
  timer = length*60;
  clock.setTime(length*60);
});

function start(){
  clock.start();
  pause = setInterval(function(){
    if(--timer < 0){
      timer = breakTime *60;
      breaks = true;
      clock.setTime(breakTime*60);
      clock.start();
    }else if(timer < 0 && breaks === true){
       timer = length *60;
        breaks = false;
       clock.setTime(length*60);
       clock.start();
     }
  },1000);
}