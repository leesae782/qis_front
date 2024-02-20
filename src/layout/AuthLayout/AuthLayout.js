import React from 'react';
import { Link, Navigate, useOutlet, useLocation, useNavigate} from 'react-router-dom';

import LeftSideBar from '../../components/layout/authLayout/LeftSideBar';
import LoadingBar from '../../components/LoadingBar';
import CommonModal from '../../components/modal/CommonModal';
import AuthLayoutTitle from '../../components/layout/authLayout/AuthLayoutTitle';
import AuthLayoutFooter from '../../components/layout/authLayout/AuthLayoutFooter';
import AuthLayoutToolbar from '../../components/layout/authLayout/AuthLayoutToolbar';
import { useLogin } from '../../hooks/useLogin';

const AuthLayout = () => {
  const {login}  = useLogin()
  const navigate = useNavigate();

  console.log("로그인정보==========")
  console.log(login)

  const outlet = useOutlet();

  // 로그인 정보 없으면 로그인 페이지로 이동시키기
  if(login.username == null){
    return <Navigate to="/login" />;
  }

  return (
    <div className="wrapper">
      <AuthLayoutToolbar/>
      <LeftSideBar/>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            {                
                <>
                {/* 로딩바 */}
                <LoadingBar/>
                {/* Title */}
                <AuthLayoutTitle/>
                {/* 본문(Content) 영역 */}
                {outlet}
                {/* Footer */}
                <AuthLayoutFooter/>
                </>

            }
          </div>
        </div>
      </div>
      {/* 공통 모달 */}
      <CommonModal/>
    </div>
  );
};

export default AuthLayout;