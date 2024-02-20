import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  // 초깃값
  initialState: {
    value: 0
  },
  // 리듀서
  reducers: {
    // 액션
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    sampleValue : (state , action) => {
      state.value = action.payload;
    }
  }
});

export const { increment, decrement , sampleValue } = counterSlice.actions;

export default counterSlice.reducer;