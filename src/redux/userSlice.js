import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { registerUser } = userSlice.actions;
export default userSlice.reducer;
