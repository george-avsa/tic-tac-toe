import store from "./store";
import { Position } from "./types/Position";
import { RoundStatus } from "./types/Round";
import { Turn } from "./types/Turn";

const winConditions = [
    [[1, 1], [2, 2], [3, 3]],
    [[3, 1], [2, 2], [1, 3]],
    [[1, 1], [1, 2], [1, 3]],
    [[2, 1], [2, 2], [2, 3]],
    [[3, 1], [3, 2], [3, 3]],
    [[1, 1], [2, 1], [3, 1]],
    [[1, 2], [2, 2], [3, 2]],
    [[1, 3], [2, 3], [3, 3]],
]

export const roundChecker = (position: Position, entity: Turn) => {
    console.log(position, entity)
    
    let result: RoundStatus = 'progress';
    winConditions.forEach(winCondition => {
        let win = winCondition.every(cell => {
            return position[cell[0]-1][cell[1]-1] === entity
        });
        if (win) {
            result = entity        
        }
    });
    if (position.flat(2).every((field) => field !== 'empty')
        && result === 'progress') {
        result = 'draw';
    }
    return result; 
}