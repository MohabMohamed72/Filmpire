import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiKay } from "../../ApiKey";

export const FetchMoveiCast = createAsyncThunk('GetAllMoveiCast/FetchMoveiCast' ,async (Movie)=>{
    const pro = await fetch(`https://api.themoviedb.org/3/movie/${Movie}/credits?api_key=${ApiKay}`);
    const data = await pro.json();
    return data;
}) 

export const GetAllMoveiCast =  createSlice({
    initialState :[],
    name:'GetAllMoveiCast',
    reducers:{
 
    },
    extraReducers:(builders)=>{
        builders.addCase(FetchMoveiCast.fulfilled , (state,action)=>{
            return action.payload
        })
    },
    

})

export const { } =GetAllMoveiCast.actions
export default GetAllMoveiCast.reducer