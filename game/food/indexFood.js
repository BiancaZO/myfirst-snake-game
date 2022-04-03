import { gameboard, generateRandomBoardPosition } from "../board/indexBoard.js";
import { collision as snakeCollision, expandSnake} from "../snake/indexSnake.js";

const EXPANSION_RATE =2;

let foodPosition = generateRandomPosition();

export function update(){
    if(snakeCollision(foodPosition)) {
        expandSnake(EXPANSION_RATE);
        foodPosition = generateRandomPosition();
    }

}

export function draw(){
    const foodElement = document.createElement('div');

    //config css
    foodElement.classList.add('food')  // add o .snake que está no style.css

    //conf position
    foodElement.style.gridRowStart = foodPosition.y;
    foodElement.style.gridColumnStart = foodPosition.x;

    //append on DOM
    gameboard.appendChild(foodElement)
};

//funcao para que food não seja gerado em cima da snake. usando a lógica de "position"
function generateRandomPosition(){
    let newFoodPosition;

    while(newFoodPosition === undefined || snakeCollision(newFoodPosition)){
        newFoodPosition = generateRandomBoardPosition();
    }

    return newFoodPosition;

}