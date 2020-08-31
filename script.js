let canvas = document.getElementById("snake");
let context = canvas.getContext('2d');
let box = 32;
let snake = [];
snake[0]={
    x:8 * box,
    y: 8 * box
}
let direction = "right";
let food ={
    x:Math.floor(Math.random() * 15 + 1)*box,
    y:Math.floor(Math.random() * 15 + 1)*box
}

function createBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0,0,16*box, 16*box);
}
document.addEventListener('keydown',update);
function update(event){
    switch(event.keyCode){
        case 37:
            direction ="left";
        break;
        case 38:
            direction ="down";
        break;
        case 39:
            direction ="right";
        break;
        case 40:
            direction ="up";
        break;
    }
}
function createSnake(){
    for(i=0;i<snake.length;i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x,snake[i].y, box, box);
    }
}
function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}
function startGame(){
    if(snake[0].x > 15 * box) snake[0].x = 0;
    if(snake[0].x < 0) snake[0].x = 16*box;
    if(snake[0].y > 15 * box ) snake[0].y = 0;
    if(snake[0].y < 0) snake[0].y = 16 * box;
    for(i = 1; i< snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game Over :(');
        }
    }
    createBG();
    createSnake();
    drawFood();
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    switch(direction){
        case "right":
            snakeX+=box;
        break;
        case "left":
            snakeX-=box;
        break;
        case "up":
            snakeY+=box;
        break;
        case "down":
            snakeY-=box;
        break;
    }
    snakeX != food.x || snakeY != food.y ? snake.pop() : food = {
        x:Math.floor(Math.random() * 15 + 1)*box,
        y:Math.floor(Math.random() * 15 + 1)*box
    };  
    let newHead = {
        x:snakeX,
        y:snakeY
    }
    snake.unshift(newHead);
}

let jogo = setInterval(startGame, 100);
