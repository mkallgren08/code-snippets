$(document).ready(function(){
  console.log('Script loaded')
  $('#timer-button').click(function(){
    console.log('Click heard')
    console.log($(this).val())
  });
});

let TimerVal;

let Timer = {
  start: function(time, curVal){
    let progBar = $('#timer-bar');
    if(progBar.attr('aria-valuemax') !== time){
      progBar.attr('aria-valuemax',time);
    }
    let myVar = setInterval(function(){myTimer(progBar,curVal)},0.1)
    // TimerVal = setInterval({myTimer(time, counter)}, 1000)
    if (curVal === time) {
      this.stop()
      setTimeout(this.reset, 4000)
    }
  },
  stop: function(a){},
  reset: function(){},
}

function myTimer(progBar) {

}
