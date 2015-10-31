var canvas = document.getElementById("bouncyBall"),
    ctx = canvas.getContext("2d"),
    W = canvas.width, // simplified for demo
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

  	//this.vx = W + this.x;
	//this.vy = H + this.y;
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
	//this.y = H + this.y;
	//this.vx +=1;
	//this.vy +=1;

  	console.log(this.x);
  	//console.log(this.y);
  	
  	//console.log(this.y);
  	//

    // this.x -=1;
    // //this.vy += gravity;  // todo: limit bounce at some point or this value will be added
    // if (this.y + this.radius > H) {
    //   this.y = H - this.radius;
    //   this.vy *= -1;
    //   console.log(this.vy);
    //   console.log(this.radius);
    //   console.log(H);
    //   console.log(W);
    // }
    // if (this.x + this.radius < W) {
    //   this.x = W - this.radius;
    //   //this.vx *= 1;
    // }
    // if(this.y > this.H - this.radius || this.y - this.radius < 0){
    // 	this.y = H - this.radius;
    //   	//this.vy *= -1;      	
    // }
    // else{
    // 	this.y += this.vy;
    // }
  }
};

function clearCanvas() {
  ctx.clearRect(0, 0, W, H);
}

var balls = []; // define an array to hold the balls

canvas.addEventListener('click', function(event) {
  var rect = this.getBoundingClientRect(),  // adjust mouse position
      x = event.clientX - rect.left,
      y = event.clientY - rect.top;
  balls.push(new Ball(x, y));               // add a new instance
});


(function update() {
  clearCanvas();

  for (var i = 0, ball; ball = balls[i]; i++) {
    ball.draw(); // this will draw current ball
    ball.update(); // this will update its position
  }

  requestAnimationFrame(update);
})();