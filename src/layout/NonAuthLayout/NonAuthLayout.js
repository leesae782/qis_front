import React from 'react';
import {  Navigate , useOutlet} from 'react-router-dom';


import NonPageLogo from '../../components/layout/nonAuthLayout/NonPageLogo';
import NonPageText from '../../components/layout/nonAuthLayout/NonPageText';
import { useLogin } from '../../hooks/useLogin';
const NonAuthLayout = () => {
  const {login}  = useLogin()
  console.log("로그인정보 non==========")
  console.log(login)

  const outlet = useOutlet();

  // 로그인 정보 없으면 로그인 페이지로 이동시키기
  if(login.username != null){
    return <Navigate to="/home" />;
  }


  return (
    <div className="auth-fluid">
        <div className="auth-fluid-form-box">
            <div className="card-body d-flex flex-column h-100 gap-3">
               <NonPageLogo/>
                <div className="my-auto">
                    {outlet}
                </div>
            </div> 
        </div>
        <NonPageText/>
    </div>
  );
};

export default NonAuthLayout;