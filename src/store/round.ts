import { createSlice } from "@reduxjs/toolkit";
import { Round } from "../types/Round";

const initialState: Round = {
    turn: 'cross',
    position: [
        ['empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty'],
    ],
    status: 'progress'
};

const roundSlice = createSlice({
    name: 'round',
    initialState,
    reducers: {
        changePosition(state, {payload}) {
            const [row, column] = payload;
            state.position[row][column] = state.turn;
        },
        toggleTurn(state) {
            state.turn = state.turn === 'cross' ? 'zero' : 'cross';
        },
        changeStatus(state, {payload}) {
            state.status = payload
        },
        roundReturnDefault(state) {
            state.position = initialState.position
        }
    },
})

export const {changePosition, toggleTurn, changeStatus, roundReturnDefault} = roundSlice.actions

export const roundReducer = roundSlice.reducer