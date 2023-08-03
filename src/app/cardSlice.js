import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    card:[],
}

export const cardSlice = createSlice({
    name:'card',
    initialState,
    reducers:{
        increment : (state,{payload}) => {
            state.card = [{payload}]
        }
    }
})

export const { increment } = cardSlice.actions;
export default cardSlice.reducer;