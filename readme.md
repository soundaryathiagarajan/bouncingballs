Task: Design and implement a single page application with the following given functionality using pure HTML+CSS+JS, without using any frameworks or libraries such as jquery. You can use any standard DOM API. I'd prefer it if you place your code in a github project under your account and send me a link. 

1.The page shows a rectangular "box" of a fixed width and height centered within the page.

2. When the user clicks within the box, a small "ball" represented by a filled circle appears within the box, at the tapped position and starts moving in a random direction with a known fixed speed (which is not random). 

3. Whenever the ball collides with the box's wall, it bounces off the wall so that it always stays within the box. Otherwise it continues along in a straight line at a constant speed.

4. Every time the user clicks within the box, add a *new* ball into the box centered at the clicked position. Each new ball must point in a random direction, but must have the same speed as every other ball. The balls don't have to bounce when they collide with each other. i.e. they can just pass through each other.

5. Add a "speed" slider that adjusts the common speed of all the balls. (Choose your own units and range.)

6. Add a pause/resume button below the box  and make it pause and resume the entire animation.

7. Bonus (optional): Add a counter displaying the number of box-wall collisions that occurred in the last 1 second.

8. Double bonus (optional): A ball that collides head-on with the wall hits it harder than a ball that grazes off the wall, so not all collisions are equal in strength. Design a similar counter that accounts for this variation among the balls. Note that this counter will not necessarily show an integer.

All movement should be smooth (continuous and without stutter) at the maximum browser display refresh rate.