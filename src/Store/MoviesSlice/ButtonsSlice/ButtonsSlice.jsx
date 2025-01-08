import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const ButtonsHandel =  createSlice({
    initialState :1,
    name:'ButtonsHandel',
    reducers:{
        IncrementPage:(state)=>{
            return state+=1;
        },
        DecrementPage:(state)=>{
            if(state < 2){
                return state = 1;
            }
            else{

                return state-=1;
            }

        },
    }


})

export const {IncrementPage ,DecrementPage} =ButtonsHandel.actions
export default ButtonsHandel.reducer