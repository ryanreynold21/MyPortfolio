import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    card:[],
    blog:[],
    open:'',
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
        },
        isOpen : (state,{payload}) => {
            state.open = payload
        }
    }
})

export const { increment , blogDetail , isOpen } = cardSlice.actions;
export default cardSlice.reducer;