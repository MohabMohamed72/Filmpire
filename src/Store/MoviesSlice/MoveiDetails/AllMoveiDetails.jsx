import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiKay } from "../../ApiKey";

export const FetchMovieDetails = createAsyncThunk('GetAllMoveiDetails/FetchMovieDetails' ,async (Movie)=>{
    const pro = await fetch(`https://api.themoviedb.org/3/movie/${Movie}?api_key=${ApiKay}`);
    const data = await pro.json();
    return data;
}) 

export const GetAllMoveiDetails =  createSlice({
    initialState :[],
    name:'GetAllMoveiDetails',
    reducers:{ 
    },
    extraReducers:(builders)=>{
        builders.addCase(FetchMovieDetails.fulfilled , (state,action)=>{
            return action.payload
        })
 
    },
    

})

export const {} =GetAllMoveiDetails.actions
export default GetAllMoveiDetails.reducer