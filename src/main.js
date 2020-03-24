$(document).ready(function() {
  const head = new Head($("#board"));
  let apple = new Apple($("#board"));
  let body = new Body($("#board"));

  let keyDownEvents = [];
  $("body").on("keydown", function(e) {
    keyDownEvents.push(e);
  });

  function processInputs() {
    for (let i = 0; i < keyDownEvents.length; i++) {
      let e = keyDownEvents[i];
      if (e.keyCode === 37 && head.currentDirection !== "right") {
        head.currentDirection = "left";
      }

      if (e.keyCode === 38 && head.currentDirection !== "down") {
        head.currentDirection = "up";
      }

      if (e.keyCode === 39 && head.currentDirection !== "left") {
        head.currentDirection = "right";
      }

      if (e.keyCode === 40 && head.currentDirection !== "up") {
        head.currentDirection = "down";
      }
    }
    keyDownEvents = [];
  }

  // Check if the snake is eating the apple every head.SPEED ms
  function update() {
    let headLastPosition = head.getCurrentPosition();
    head.move(body);
    body.moveForward(headLastPosition);

    // check for collisions
    if (
      apple.positionLeft === head.positionLeft &&
      apple.positionTop === head.positionTop
    ) {
      $("#apple").remove();
      apple = new Apple($("#board"));
      console.log(body.nodes.length);
      body.addNewNode(headLastPosition);
    }
  }

  // IIFE on gameLoop func (command console)
  // store all set timeout functionality in one fucntion for better performance and synchronicity of our game
  // current direction will change 1250 miliseconds
  (function gameLoop() {
    // 1. process key presses

    processInputs();

    // 2. update the game world
    update();

    // 3. draw the rest
    // 3a. creating new apple will also draw it
    head.drawHead();
    body.draw();

    // 4. start the game loop over
    setTimeout(gameLoop, head.SPEED);
  })();

  // function checkRecursively(){
  //   if(apple.positionLeft === head.positionLeft && apple.positionTop === head.positionTop){
  //     $('#apple').remove();
  //     apple = new Apple($('#board'));
  //     snakeBody.unshift([head.positionLeft, head.positionTop]);
  //   } else {
  //     $("#snake-body").remove();
  //     snakeBody.pop();
  //     snakeBody.unshift([head.positionLeft, head.positionTop]);
  //   }
  //   //draw body
  //   //console.log('imhere', snakeBody, snakeBody.length)
  //   if(snakeBody.length > 1){
  //     for(let i = 1; i < snakeBody.length; i++){
  //       $('#board').append($(`<div id="snake-body" style="top: ${snakeBody[i][1]}px; left: ${snakeBody[i][0]}px;"></div>`));
  //     }
  //   }

  //   setTimeout(checkRecursively, head.SPEED);
  // }
  // //invoke the recursive function

  // checkRecursively();
});
