import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const DrakMode =  createSlice({
    initialState :false,
    name:'DrakMode',
    reducers:{
        ToggelDark:(state)=>{
            return !state
        }
    },
  

})

export const { ToggelDark} =DrakMode.actions
export default DrakMode.reducer