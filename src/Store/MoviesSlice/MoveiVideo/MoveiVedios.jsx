// 
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiKay } from "../../ApiKey";

export const FetchMoveiVideos = createAsyncThunk('GetAllVideos/FetchMoveiVideos' ,async (Movie)=>{
    const pro = await fetch(`https://api.themoviedb.org/3/movie/${Movie}/videos?api_key=${ApiKay}`);
    const data = await pro.json();
    return data;
}) 

export const GetAllVideos =  createSlice({
    initialState :[],
    name:'GetAllVideos',
    reducers:{
 
    },
    extraReducers:(builders)=>{
        builders.addCase(FetchMoveiVideos.fulfilled , (state,action)=>{
            return action.payload.results
        })
    },
    

})

export const { } =GetAllVideos.actions
export default GetAllVideos.reducer