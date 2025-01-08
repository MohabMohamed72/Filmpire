
import { createSlice } from "@reduxjs/toolkit";


export const SearchVisablilty =  createSlice({
    initialState :false,
    name:'SearchVisablilty',
    reducers:{
        Visable:(state)=>{
            return state = true
        },
        NotVisable:(state)=>{
            return state = false
        }
    },

    

})

export const {Visable ,NotVisable} =SearchVisablilty.actions
export default SearchVisablilty.reducer