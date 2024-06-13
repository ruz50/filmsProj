import { createSlice } from "@reduxjs/toolkit";

type globalStateType = {
    global: string
}

const initialState: globalStateType = {
    global: 'en-US',  
}

const GlobalSlice = createSlice({
    name: 'globalSlice',
    initialState: initialState,
    reducers: {
        changeGlobal(state, action) {
            state.global = action.payload; 
        }
    },
})

export const { changeGlobal } = GlobalSlice.actions;
export default GlobalSlice.reducer;
