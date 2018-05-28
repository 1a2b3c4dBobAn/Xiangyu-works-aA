document.addEventListener("DOMContentLoaded", function(){
  var canvas = document.getElementById('mycanvas');
  // var ctx = canvas.getContext('2d')
  // ctx.fillStyle = 'rgb(0,200,0)';
  // ctx.fillRect(20,20,100,100);

  var circle = canvas.getContext('2d');
  var grad = circle.createLinearGradient(60,60,180,180);
  grad.addColorStop(0,'white');
  grad.addColorStop(0.75,'black');


  circle.fillStyle = grad;
  circle.beginPath();
  circle.arc(120,120,60,0, 2 * Math.PI);
  circle.strokeStyle = 'lightgrey';
  circle.lineWidth = '5';
  circle.stroke();
  circle.fill();


  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.arc(65, 65, 50, 0, Math.PI);
  ctx.stroke();


  var ctx2 = canvas.getContext('2d');
  ctx2.beginPath();
  ctx2.arc(175,175,50,Math.PI,2 * Math.PI);
  ctx2.stroke();
});
