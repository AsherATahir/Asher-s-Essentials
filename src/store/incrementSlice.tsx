import { createSlice } from "@reduxjs/toolkit";
import { item } from "../Interfaces/interface";
import { _NEVER } from "@reduxjs/toolkit/query";
import { PURGE } from "redux-persist";

const incrementSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    items: [] as item[],
    itemID: [] as number[],
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
    addID: (state, action) => {
      return {
        ...state,
        itemID: state.itemID.concat(action.payload),
      };
    },
    removeID: (state, action) => {
      return {
        ...state,
        itemID: state.itemID.filter((_, index) => index !== action.payload),
      };
    },
    clearID: (state) => {
      return {
        ...state,
        itemID: [],
      };
    },
    defineArray: (state) => {
      return {
        ...state,
        itemID: [],
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
export const { addID } = incrementSlice.actions;
export const { clearID } = incrementSlice.actions;
export const { removeID } = incrementSlice.actions;
export const { defineArray } = incrementSlice.actions;

export default incrementSlice.reducer;
