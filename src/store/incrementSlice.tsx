import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const incrementSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, (state) => {
      return state;
    });
  },
});

export const { increment } = incrementSlice.actions;
export const { decrement } = incrementSlice.actions;

export default incrementSlice.reducer;
