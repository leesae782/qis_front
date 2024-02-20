import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import  counterReducer  from "./slices/sampleSlice";
import loadingReducer from "./slices/loadingSlice";
import commonModalReducer from "./slices/commonModalSlice";
import loginReducer from "./slices/loginSlice";
/**
 * redux store
 * 2024.01.19 - Saylee 
 * 사용하려는 slice 를 configureStore 에 추가
 */
const store = configureStore({
  reducer: {
    counter: counterReducer,
    isLoading: loadingReducer,
    commonModal: commonModalReducer,
    login : loginReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false });  // 리덕스 직렬화 체크 안하는 설정 
  },
});

export default store;