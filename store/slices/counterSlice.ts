import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = slice.actions; // Export actions to be used in components
export const selectCount = (state: RootState) => state.counter.value; // Export selector for use in components
export default slice.reducer; // Export reducer to be used in store
