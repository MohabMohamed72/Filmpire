import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FetchActorDetails = createAsyncThunk('GetActorDetails/FetchActorDetails' ,async (PersonId)=>{
    const pro = await fetch(`https://api.themoviedb.org/3/person/${PersonId}?api_key=62f2b93e6cc1455fdf5c3f7d88b9c179`);
    const data = await pro.json();
    return data;
}) 

export const GetActorDetails =  createSlice({
    initialState :[],
    name:'GetActorDetails',
    reducers:{
 
    },
    extraReducers:(builders)=>{
        builders.addCase(FetchActorDetails.fulfilled , (state,action)=>{
            return action.payload
        })
    },
    

})

export const { } =GetActorDetails.actions
export default GetActorDetails.reducer