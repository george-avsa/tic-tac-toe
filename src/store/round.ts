import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { roundChecker } from "../roundChecker";
import { Round } from "../types/Round";
import store from ".";

const initialState: Round = {
    turn: 'cross',
    position: [
        ['empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty'],
    ]
};

export const roundSlice = createSlice({
    name: 'round',
    initialState,
    reducers: {
        makeTurn(state, {payload}) {
            const [row, column] = payload;
            state.position[row][column] = state.turn;
            console.log(state.position)
            const roundStatus = roundChecker(state.position, state.turn);
            if (roundStatus === 'progress') {
                state.turn = state.turn === 'cross' ? 'zero' : 'cross'; 
            }
        }
    },
})

export const {makeTurn} = roundSlice.actions

export const roundReducer = roundSlice.reducer