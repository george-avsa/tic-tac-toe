import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Round, RoundStatus } from "../types/Round";

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
        changePosition(state, action: PayloadAction<number[]>) {
            const [row, column] = action.payload;
            state.position[row][column] = state.turn;
        },
        toggleTurn(state) {
            state.turn = state.turn === 'cross' ? 'zero' : 'cross';
        },
        changeStatus(state, action: PayloadAction<RoundStatus>) {
            state.status = action.payload
        },
        roundReturnDefault(state) {
            state.position = initialState.position
        }
    },
})

export const {changePosition, toggleTurn, changeStatus, roundReturnDefault} = roundSlice.actions

export const roundReducer = roundSlice.reducer