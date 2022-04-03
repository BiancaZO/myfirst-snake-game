import { gameboard } from "../board/indexBoard.js";
import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5; //5 frames por segundo

let newSegment = 0;

const snakeBody = [
    { x: 11, y: 11 },
   
]

export function update() {
    addSegments();

    const inputDirection = getInputDirection();

    //move snake segment //entender melhor a estrutura e raciocínio
    for (let i = snakeBody.length -2; i>=0; i-- ) {
    snakeBody[i + 1] = {...snakeBody[i] };
    }

    
    //make head move
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;

};

 //segmentos da snake
export function draw(){
 
 
    snakeBody.forEach(segment => {
    //creat element       
    const snakeElement = document.createElement('div');

    //config css
    snakeElement.classList.add('snake')  // add o .snake que está no style.css

    //conf position
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;

    //append on DOM
    gameboard.appendChild(snakeElement)

    })

};

    // se alguma das condições internas forem positivas, vai retornar positiva. Só retorna falsa se todas forem falsas.
    export function collision(position) {
        return snakeBody.some(segment => {
            return position.x === segment.x && position.y === segment.y;
        })
    }

    
    export function expandSnake(amount){
        newSegment += amount;

    }

    function addSegments() {
        if(newSegment > 0){
            snakeBody.push({
                ...snakeBody[snakeBody - 1],
            })
            newSegment-= 1;
        }
    }

    //auxiliar functions
    export function getSnakeHead() {
        return snakeBody[0];
    } 

    export function hasSelfCollision(){
        const snakeHead = snakeBody[0];
       
        return snakeBody.some((segment, index) => {
            if (index === 0 ) return false;

             return snakeHead.x === segment.x && snakeHead.y === segment.y;
            });
    }