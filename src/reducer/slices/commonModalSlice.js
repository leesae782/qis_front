import { createSlice } from "@reduxjs/toolkit";


/**
 * commom Modal slice
 * 2024.01.19 - Saylee - 모달상태관리는 여기서 (모달은 한개만띄울수있으며 하나의 컴포넌트 생성해놓고 안에 내용물만 바꾸면서사용)
 */
export const commonModalSlice = createSlice({
  name: "commonModal",
  // 초깃값
  initialState: {
    show : false , 
    modalType : "",
    modalSize : "",
    param : {},
  },
  // 리듀서
  reducers: {
    // 액션
    handleShow: (state , action) => {  // 모달 open  
      if(action.payload.modalType !== "" && action.payload.modalType !== undefined && action.payload.modalType !==null){
        state.show = true;
        state.modalType = action.payload.modalType
        state.modalSize = action.payload.modalSize
        state.param = action.payload.param
      }
    },
    handleClose: (state) => { // 모달 close
      state.show = false;
      state.modalType = "";
      // state.modalSize = "";
      state.param ={};
    },

  }
});

export const { handleShow, handleClose } = commonModalSlice.actions;

export default commonModalSlice.reducer;