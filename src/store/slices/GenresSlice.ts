import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import filmsAPI from "../../api/api";

export const fetchGenres = createAsyncThunk(
    'fetchGenres',
    async ()=>{
        const res = await filmsAPI.getGenres()
        return res.data.genres as []
    }
)

export type genersType = {
    id:number,
    name:string
}

type genersStateType = {
    genres : Array<genersType>,
    isLoad : boolean
}

const initialState : genersStateType =  {
    genres : [],
    isLoad:false
}

const genersSlice = createSlice({
    name:'genersSlice',
    initialState:initialState,
    reducers:{

    },
    extraReducers : (builder)=>{
        builder.addCase(
            fetchGenres.pending,(state)=>{
                state.isLoad = true
            }
        ) 
        builder.addCase(
            fetchGenres.fulfilled,(state,action)=>{
                state.isLoad = false,
                state.genres =action.payload
            }
        )
    }
})

export default genersSlice.reducer