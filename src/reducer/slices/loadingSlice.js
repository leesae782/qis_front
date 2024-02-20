import { createSlice } from "@reduxjs/toolkit";


/**
 * 로딩바 slice
 * 2024.01.16 - Saylee
 */
export const loadingSlice = createSlice({
  name: "isLoading",
  // 초깃값
  initialState: {
    isLoading: false ,
    loadingText : "Loading..."
  },
  // 리듀서
  reducers: {
    // 액션
    setLoadingAction: (state, action) => {
      // alert(action.payload.isLoading)
      // alert(action.payload.loadingText)
      // 로딩바 상태변경
      state.isLoading = (action.payload.isLoading) ? true : false;
      // 로딩바 텍스트 변경할게있으면 변경처리 아니면 isLoading
      if(action.payload.isLoading && action.payload.loadingText){
        state.loadingText = action.payload.loadingText
      }else{
        state.loadingText = "Loading..."
      }
    },
  }
});

export const { setLoadingAction} = loadingSlice.actions;

export default loadingSlice.reducer;