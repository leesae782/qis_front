import { createSlice } from "@reduxjs/toolkit";


/**
 * 로딩바 slice
 * 2024.01.16 - Saylee
 */
export const loginSlice = createSlice({
  name: "isLoading",
  // 초깃값
  initialState: {
    username : localStorage.getItem("username"),
    roles : localStorage.getItem("roles"),
  },
  // 리듀서
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.roles = action.payload.roles;
    },
  }
});

export const { setUser} = loginSlice.actions;

export default loginSlice.reducer;