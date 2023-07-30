import { configureStore } from "@reduxjs/toolkit";
import { roundReducer } from "./round";
import { scoreReduce } from "./score";

const store = configureStore({
    reducer: {
        round: roundReducer,
        score: scoreReduce,
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;