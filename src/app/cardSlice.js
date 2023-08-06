import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    card:[],
    blog:[],
}

export const cardSlice = createSlice({
    name:'card',
    initialState,
    reducers:{
        increment : (state,{payload}) => {
            state.card = [{payload}]
        },
        blogDetail : (state,{payload}) => {
            state.blog = [{payload}]
        }
    }
})

export const { increment , blogDetail } = cardSlice.actions;
export default cardSlice.reducer;