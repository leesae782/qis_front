import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setUser } from '../reducer/slices/loginSlice';
import loginApi from '../apis/loginApi';
/*
* 2024.01.25 - Saylee
* 로그인 상태값 관리 훅
*/
export const useLogin = () => {
  const dispatch = useDispatch();

  // 리덕스에 저장되어있는 login 값
  const  login = useSelector(state => state.login);
  
  /*
  * 2024.02.20 - Saylee
  * 로그인 함수
  */
  const funLogin = async(loginObj) => {
        // 1. 벨리데이션 체크한다.
        loginApi.checkValidation(loginObj)
    
        // 2. 로그인처리한다 (서버단 api 호출 및 로컬스토리지 저장)
        const loginCode = await loginApi.login(loginObj)

        // 3.성공적으로 로그인시 redux에 값 저장한다.
        if(loginCode === 200){
            dispatch(setUser({username : localStorage.getItem("username") , roles : localStorage.getItem("roles")}));
        }
  };
  /*
  * 2024.02.20 - Saylee
  * 로그아웃 함수
  */
  const funLogout = async(loginObj) => {
    // 1. 서버단 api 호출및 로컬스토리지에서 삭제한다.
    const errcode = await loginApi.logout();

    // 2. 리덕스 스토어에서 초기화처리한다.
    if(errcode === 200){
      dispatch(setUser({username : null , roles : null}));
    }
  };

  return {login, funLogin , funLogout};
};





