class Head {
  // this is what's called when you use the "new" keyword
  constructor($el) {
    this.currentDirection = "right";
    this.SPEED = 150;
    this.positionTop = 0;
    this.positionLeft = 0;
    this.node = $('<div id="head"></div>');
    $el.append(this.node);
    this.node.css({ top: this.positionTop, left: this.positionLeft });
  }

  // same as Head.prototype.move = function() {...}
  move(body) {
    let direction = this.currentDirection;
    // console.log('this111111', this)

    if (direction === "right") {
      this.positionLeft += 50;
    }

    if (direction === "left") {
      this.positionLeft -= 50;
    }
    if (direction === "up") {
      this.positionTop -= 50;
    }
    if (direction === "down") {
      this.positionTop += 50;
    }

    if (
      this.positionLeft < 0 ||
      this.positionTop < 0 ||
      this.positionLeft > 650 ||
      this.positionTop > 650
    ) {
      this.gameOver();
      this.positionLeft = 0;
      this.positionTop = 0;
    }

    let dead = false;
    for (let i = 0; i < body.nodes.length - 1; i++) {
      if (
        body.nodes[i].positionLeft === this.positionLeft &&
        body.nodes[i].positionTop === this.positionTop
      ) {
        dead = true;
      }
    }
    if (dead) {
      this.gameOver();
      this.positionLeft = 0;
      this.positionTop = 0;
    }

    // experiment with deletion
    let position = this.node.position();
    position.left = this.positionLeft;
    position.top = this.positionTop;
  }

  drawHead() {
    this.node.css({ top: this.positionTop, left: this.positionLeft });
  }

  getCurrentPosition() {
    return [this.positionLeft, this.positionTop];
  }

  gameOver() {
    let replay = confirm("SO ARE YOU! Try again?");
    if (replay == true) {
      location.reload(true);
    } else {
      window.alert("DUN GOOFED");
      window.open("https://coronavirus.jhu.edu/map.html");
      location.reload(true);
    }
  }
}

/*
GOAL: END GAME
1. stop the snake
2. alert GAME OVER and refresh button

HOW:
if the snake is at position Top/Left < 0 OR at position Top/Left > 650
then alert GAME OVER and show refresh
*/
