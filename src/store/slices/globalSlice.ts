import {  createSlice } from "@reduxjs/toolkit";

type globalStateType = {
    global : string
}

const initialState : globalStateType =  {
    global : '',
}

const GlobalSlice = createSlice({
    name:'globalSlice',
    initialState:initialState,
    reducers:{
        changeGlobal (state,action){
            state.global = action.type
        }
    },
    
})

export const {changeGlobal} = GlobalSlice.actions
export default GlobalSlice.reducer