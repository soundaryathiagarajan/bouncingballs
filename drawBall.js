var canvas = document.getElementById("bouncyBall"),
    ctx = canvas.getContext("2d"),
    W = canvas.width, 
    H = canvas.height,
    gravity = .5,
    bounceFactor = .7;

function Ball(x, y) {
  this.x = x;
  this.y = y;
  this.radius = 15;
  this.color = "blue";
  this.vx = 0;
  this.vy = 1
  this.ballDx = 2;
	this.ballDy = 2;
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
	if(this.y > H - this.radius || this.y - this.radius < 0)
	{
		this.ballDy = -1 * this.ballDy;
	}
	if(this.x > W - this.radius || this.x < this.radius)
	{
		this.ballDx = -1 * this.ballDx;
	}
  	console.log(this.x);  	
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
});


(function update() {
  clearCanvas();

  for (var i = 0, ball; ball = balls[i]; i++) {
    ball.draw(); 
    ball.update();
  }

  requestAnimationFrame(update);
})();