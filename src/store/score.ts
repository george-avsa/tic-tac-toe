import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Score } from "../types/Score";
import { Turn } from "../types/Turn";

const initialState:Score = {
    cross: 0,
    zero: 0,
}

const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        changeScore(state, action: PayloadAction<Turn>) {
            const payload = action.payload;
            state[payload] = state[payload] + 1; 
        },
        scoreReturnDefault(state) {
            state.cross = 0;
            state.zero = 0;
        }
    }
})

export const {changeScore, scoreReturnDefault} = scoreSlice.actions;
export const scoreReduce = scoreSlice.reducer;