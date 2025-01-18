import { createSlice } from "@reduxjs/toolkit";
import { _NEVER } from "@reduxjs/toolkit/query";
import { PURGE } from "redux-persist";

const incrementSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    items: [],
    itemID: [],
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    setArray: (state, action) => {
      return {
        ...state,
        items: action.payload,
      };
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
export const { reset } = incrementSlice.actions;
export const { setArray } = incrementSlice.actions;
//export const { addID } = incrementSlice.actions;

export default incrementSlice.reducer;
