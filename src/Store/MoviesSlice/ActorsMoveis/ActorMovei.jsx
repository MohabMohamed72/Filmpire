import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiKay } from "../../ApiKey";

export const FetchActorMoveis = createAsyncThunk('GetActorMoveis/FetchActorMoveis' ,async (PersonId)=>{
    const pro = await fetch(`https://api.themoviedb.org/3/person/${PersonId}/combined_credits?api_key=${ApiKay}`);
    const data = await pro.json();
    return data;
}) 

export const GetActorMoveis =  createSlice({
    initialState :[],
    name:'GetActorMoveis',
    reducers:{
 
    },
    extraReducers:(builders)=>{
        builders.addCase(FetchActorMoveis.fulfilled , (state,action)=>{
            return action.payload.cast
        })
    },
    

})

export const { } =GetActorMoveis.actions
export default GetActorMoveis.reducer