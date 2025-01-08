import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiKay } from "../../ApiKey";

export const FetchMoveieFromGenres = createAsyncThunk('GetAllMoveiGenres/FetchMoveieFromGenres' ,async ({categ , PageNumber})=>{
    const pro = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${ApiKay}&with_genres=${categ}&page=${PageNumber}`);
    const data = await pro.json();
    return data;
}) 


export const GetAllMoveiGenres =  createSlice({
    initialState :[],
    name:'GetAllMoveiGenres',
    reducers:{
    },
    extraReducers:(builders)=>{
        builders.addCase(FetchMoveieFromGenres.fulfilled , (state,action)=>{
            return action.payload.results
        })
    }

})

export const {} =GetAllMoveiGenres.actions
export default GetAllMoveiGenres.reducer