import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiKay } from "../../ApiKey";

export const FetchMoveieFromCategoreis = createAsyncThunk('GetAllMoveiCategoreis/FetchMoveieFromCategoreis' ,async ({categ , PageNumber})=>{
    const pro = await fetch(`https://api.themoviedb.org/3/movie/${categ}?api_key=${ApiKay}&page=${PageNumber}`);
    const data = await pro.json();
    return data;
}) 

export const GetAllMoveiCategoreis =  createSlice({
    initialState :[],
    name:'GetAllMoveiCategoreis',
    reducers:{
    },
    extraReducers:(builders)=>{
        builders.addCase(FetchMoveieFromCategoreis.fulfilled , (state,action)=>{
            return action.payload.results
        })
    }

})

export const {} =GetAllMoveiCategoreis.actions
export default GetAllMoveiCategoreis.reducer