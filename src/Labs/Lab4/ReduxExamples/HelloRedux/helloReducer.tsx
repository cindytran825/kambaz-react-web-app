import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "Hello World",
};

const helloSlice = createSlice({
  name: "hello",
  initialState,
  reducers: {
    updateMessage: (state, action) => {
      state.message = action.payload;
    }
  },
});

export const { updateMessage } = helloSlice.actions;
export default helloSlice.reducer;