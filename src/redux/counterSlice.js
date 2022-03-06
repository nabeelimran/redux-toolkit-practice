import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0
  },
  reducers: {
    increment: state => {state.count++},
    decrement: state => {state.count--},
    reset: state => {state.count = 0},
    incrementByAmount: (state, action) => {state.count+=action.payload},
    decrementByAmount: (state, action) => {state.count-=action.payload}
  }
})

export default counterSlice.reducer;
export const {increment, decrement, reset, incrementByAmount, decrementByAmount} = counterSlice.actions;