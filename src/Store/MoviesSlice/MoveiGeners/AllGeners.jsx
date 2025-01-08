import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FetchAllGenres = createAsyncThunk('GetAllGenres/FetchAllGenres' ,async ()=>{

    const pro = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=62f2b93e6cc1455fdf5c3f7d88b9c179`);
    const data = await pro.json();
    return data;
}) 

export const GetAllGenres =  createSlice({
    initialState :[],
    name:'GetAllGenres',
    reducers:{

      
    },
    extraReducers:(builders)=>{
        builders.addCase(FetchAllGenres.fulfilled , (state,action)=>{
            return action.payload.genres
        })
    }

})

export const {} =GetAllGenres.actions
export default GetAllGenres.reducer