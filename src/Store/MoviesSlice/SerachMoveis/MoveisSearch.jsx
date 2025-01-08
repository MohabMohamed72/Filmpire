import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FetchMoveiSearch = createAsyncThunk('MoveisSearch/FetchMoveisearch' ,async (Movie)=>{
    const pro = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=62f2b93e6cc1455fdf5c3f7d88b9c179&query=${Movie}`);
    const data = await pro.json();
    return data;
}) 

export const MoveisSearch =  createSlice({
    initialState :[],
    name:'MoveiSearch',
    reducers:{
 
    },
    extraReducers:(builders)=>{
        builders.addCase(FetchMoveiSearch.fulfilled , (state,action)=>{
            return action.payload.results
        })
    },
    

})

export const { } =MoveisSearch.actions
export default MoveisSearch.reducer