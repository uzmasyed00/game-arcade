// Enemies our player must avoid
var Enemy = function(x,y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y=y;

    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x = this.x + (this.speed * dt);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var enemy1 = new Enemy(0,0, 25)
var enemy2 = new Enemy(50,100, 25)
var allEnemies = [enemy1, enemy2]

var Player = function(){
    this.sprite = 'images/char-boy.png';
    this.x = 50;
    this.y=100;
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyCode){
        if (keyCode == 'up')
        {
            if(this.y ==0){
                this.x =200;
                this.y = 400;
            }
            if(this.y <= -100)
            {
                this.y = this.y;
            }
            else{
            this.y = this.y - 100;
            }

        }

        if (keyCode == 'down')
        {
            if(this.y >= 400){
                this.y = this.y;
            }
            else{
             this.y = this.y + 100;
            }

        }

        if (keyCode == 'right')
        {
            if(this.x >= 400){
                this.x = this.x;
            }
            else{
            this.x = this.x + 50;
            }
        }

        if (keyCode == 'left')
        {
           if(this.x <=0){
                this.x = this.x;
            }
            else{
            this.x = this.x - 50;
            }
        }
}

Player.prototype.update = function(x, y) {
};



var player = new Player()
player.handleInput();
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
