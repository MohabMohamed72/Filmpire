import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiKay } from "../../ApiKey";

export const FetchRequestToken = createAsyncThunk('GetRequestToken/FetchRequestToken' ,async (Movie)=>{
    const pro = await fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${ApiKay}`);
    const data = await pro.json();
    return data;
}) 

export const GetRequestToken =  createSlice({
    initialState :[],
    name:'GetRequestToken',
    reducers:{ 
    },
    extraReducers:(builders)=>{
        builders.addCase(FetchRequestToken.fulfilled , (state,action)=>{
            return action.payload
        })
 
    },
    

})

export const {} =GetRequestToken.actions
export default GetRequestToken.reducer