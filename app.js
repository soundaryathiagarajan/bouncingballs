var canvas = document.getElementById("bouncyBall"),
  ctx = canvas.getContext("2d"),
  W = canvas.width, 
  H = canvas.height,
  gravity = .5,
  bounceFactor = .7;

  console.log('This is canvas', canvas);

function Ball(x, y) {
  this.x = x;
  this.y = y;
  this.radius = 15;
  this.color = "blue";
  // this.vx = 0;
  // this.vy = 0;
  var directionArray = ['10','01','11','0-1','1-0','1-1'];
  var selectDirection = directionArray[Math.floor(Math.random()*directionArray.length)];
  console.log(selectDirection, 'For each click');
  console.log(selectDirection.slice(0,1))
  console.log(selectDirection.slice(1,3))
  this.ballDx = this.initialDirectionX = parseInt(selectDirection.slice(0,1));
  this.ballDy = this.initialDirectionY = parseInt(selectDirection.slice(1,3));

  // this.ballDx = -1;
  // this.ballDy = 1;
}
var pausePlayBool = false;
var currentBallValues = [];
function pausePlay(){
  console.log('pause play called')
  pausePlayBool = !pausePlayBool;
  
  if(pausePlayBool){
    console.log('pause play called inside pause')
    
    balls.forEach(function(val, key){
      currentBallValues.push(val);
      val.ballDx = val.ballDx*0;
      val.ballDy = val.ballDy*0;
    })
    console.log('balls',balls);
    console.log('currentBallValues', currentBallValues);
  } else {
    console.log('pause play called inside play', currentBallValues);
    currentBallValues.forEach(function(val1, key1){
      balls.forEach(function(val0, key0){
        val0.ballDx = val1.initialDirectionX+parseInt(document.getElementById('speedRange').value);
        val0.ballDy = val1.initialDirectionY+parseInt(document.getElementById('speedRange').value);
      });
    })
    currentBallValues.length = 0;
    console.log(balls);
    // balls = currentBallValues;
  }
}
function speedConrol (argument) {
  // body...
  document.getElementById('speedRangeDisp').value = argument;
  console.log(argument);
  intSpeed = parseInt(argument)
  console.log(balls);
  balls.forEach(function(val, key){
    val.ballDx = val.initialDirectionX+intSpeed;
    val.ballDy = val.initialDirectionY+intSpeed;
    console.log('val.ballDx', val.ballDx);
    console.log('val.ballDy', val.ballDy);
  })
}

Ball.prototype = {
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  },

  update: function() {

  	this.x += this.ballDx;
  	this.y +=this.ballDy;
  	if(this.y > H - this.radius || this.y - this.radius < 0){
  		this.ballDy = -1 * this.ballDy;
  	}
  	if(this.x > W - this.radius || this.x < this.radius){
  		this.ballDx = -1 * this.ballDx;
  	}
    // console.log(this.x);  	
  }
};

function clearCanvas() {
  ctx.clearRect(0, 0, W, H);
}

var balls = [];
canvas.addEventListener('click', function(event) {
  var rect = this.getBoundingClientRect(),  
    x = event.clientX - rect.left,
    y = event.clientY - rect.top;
  balls.push(new Ball(x, y));
  console.log(balls.length);
  console.log(balls)
});


(function update() {
  clearCanvas();

  for (var i = 0, ball; ball = balls[i]; i++) {
    ball.draw(); 
    ball.update();
  }

  requestAnimationFrame(update);
})();