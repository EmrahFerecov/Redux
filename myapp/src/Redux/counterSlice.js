import { createSlice } from "@reduxjs/toolkit"




const initialState = {
    deyer: 0
}


const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.deyer = state.deyer + 1
        },

        decrement: (state) => {
            state.deyer = state.deyer - 1
        },
        incrementByUser: (state, action) => {
            state.deyer = state.deyer + action.payload
        }
    }


})

export const { increment, decrement, incrementByUser } = counterSlice.actions
export default counterSlice.reducer
