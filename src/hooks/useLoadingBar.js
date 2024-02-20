import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setLoadingAction } from '../reducer/slices/loadingSlice';

/*
* 2024.01.25 - Saylee
* 로딩바 상태값 관리 훅
*/
export const useLoadingBar = () => {
  const  loading = useSelector(state => state.isLoading);
  const dispatch = useDispatch();

  const setLoading = (loadingObj) => {
    dispatch(setLoadingAction(loadingObj));
  };


  /* 로딩바 여부 , 로딩바 띄울시 문구 , 로딩바 true함수 , 로딩바 false 함수 */
  return [loading, setLoading];
};







