import { gameboard , isOutsideBoard } from './board/indexBoard.js';
import {SNAKE_SPEED, draw as snakeDraw, update as snakeUpdate , getSnakeHead, hasSelfCollision as hasSnakeSelfCollision} from './snake/indexSnake.js'  // chamando a dunção e mudando os nomes para não confundir com as funções que já estã aquii.
import {draw as foodDraw, update as foodUpdate } from './food/indexFood.js'; 



let lastTimeRender = 0;


//current time -> miliseconds
function main(currentTime){

    if (checkGameOver()) {
        if(confirm ("LOOOOOSER!!! Quer jogar de novo?")){
           window.location = '/';

        } else {
            //window.requestAnimationFrame(main);
            window.close();

            //fechar janela
        }

        
    }
       
    window.requestAnimationFrame(main);

    const sencondsSinceLastRender = ( currentTime - lastTimeRender) / 1000;      //para transformar o tempo em segundos
    
    if(sencondsSinceLastRender < 1 / SNAKE_SPEED) return;
    
    lastTimeRender = currentTime;

    update();           //atualização da cobrinha ou comida

    draw();     //uncia responsabildiade é desenhar, ou snake ou comida

}


//update serve para aplicar lógica no elemento
function update() {
    gameboard.innerHTML = ' ';
    snakeUpdate();
    foodUpdate();
 
};

function draw() {
    snakeDraw();
    foodDraw();
};

function checkGameOver(){
   return isOutsideBoard(getSnakeHead())|| hasSnakeSelfCollision();       
    };




window.requestAnimationFrame(main) //olhar mais sobre
