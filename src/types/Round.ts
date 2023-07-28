import { Entity, Position } from "./Position";
import { Turn } from "./Turn";

export interface Round {
    turn: Turn,
    position: Position,
    status: RoundStatus,
}

export type RoundStatus = Entity | 'draw' | 'progress';