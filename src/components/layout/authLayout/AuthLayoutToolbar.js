import React , {useEffect } from "react";
import { Link } from 'react-router-dom';
import { useLogin } from "../../../hooks/useLogin";
import loginApi from "../../../apis/loginApi";

const AuthLayoutToolbar = () => {    
  const {login, funLogout} = useLogin();
  
  /*
    2024.01.17 - Saylee
    /assets/js/app.js 를 import해올때   
    HTML(jsx)이 전부 만들어지기전에 해당 스크립트를 불러올경우
    app.js 가 정상적으로 동작안하는 이슈 발생
    그래서 useEffect로 Toolbar컴포넌트가 마운트될떄 스크립트를 동적으로 삽입했음...
  */
  useEffect(() => {
    const existingScript = document.querySelector('script[src="/assets/js/app.js"]');
    // 불러온스크립트가 존재하지 않을경우에만 실행
    if(!existingScript){
      // HTML이 삽입된 이후에 실행될 스크립트
      const script = document.createElement('script');
      script.src = '/assets/js/app.js';
      script.async = true;
      // 스크립트를 body에 추가
      document.body.appendChild(script);
    }
    // 컴포넌트가 언마운트될 때 
    return () => {

    };
  }, []);


  /*
    2024.02.20 - Saylee
    로그아웃처리
  */
  const handleLogout = async () => {
    await funLogout();
  }


  return (
    <>
      {/* <!-- ========== Topbar Start ========== --> */}
      <div className="navbar-custom">
          <div className="topbar container-fluid">
              <div className="d-flex align-items-center gap-lg-2 gap-1">
                  {/* <!-- Topbar Brand Logo --> */}
                  <div className="logo-topbar">
                      {/* <!-- Logo Dark --> */}
                      <span className="logo-dark">
                          <span className="logo-lg">
                              <img src="/assets/images/logo/brk_tate.png" alt="brk logo" className="logo-43"/>
                          </span>
                          <span className="logo-sm">
                              <img src="/assets/images/logo/brk_tate.png" alt="brk small logo" className="logo-43"/>
                          </span>
                      </span>
                  </div>

                  {/* <!-- Sidebar Menu Toggle Button --> */}
                  <button className="button-toggle-menu" >
                      <i className="mdi mdi-menu"></i>
                  </button>

                  {/* <!-- Horizontal Menu Toggle Button --> */}
                  <button className="navbar-toggle" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
                      <div className="lines">
                          <span></span>
                          <span></span>
                          <span></span>
                      </div>
                  </button>
              </div>

              <ul className="topbar-menu d-flex align-items-center gap-3">

                  {/* Toolbar 종모양 icon 기능 start */}
                  <li className="dropdown notification-list">
                    <span className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown"  role="button" aria-haspopup="false" aria-expanded="false">
                        <i className="ri-notification-3-line font-22"></i>
                        <span className="noti-icon-badge"></span>
                    </span>
                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg py-0">
                        <div className="p-2 border-top-0 border-start-0 border-end-0 border-dashed border">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h6 className="m-0 font-16 fw-semibold"> Notification</h6>
                                </div>
                                <div className="col-auto">
                                    <span className="text-dark text-decoration-underline">
                                        <small>Clear All</small>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <span className="dropdown-item p-0 notify-item card unread-noti shadow-none mb-2">
                                <div className="card-body">
                                    <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close"></i></span>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0">
                                            <div className="notify-icon bg-primary">
                                                <i className="mdi mdi-comment-account-outline"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 text-truncate ms-2">
                                            <h5 className="noti-item-title fw-semibold font-14">Datacorp <small className="fw-normal text-muted ms-1">1 min ago</small></h5>
                                            <small className="noti-item-subtitle text-muted">Caleb Flakelar commented on Admin</small>
                                        </div>
                                    </div>
                                </div>
                          </span>
                          <span  className="dropdown-item p-0 notify-item card unread-noti shadow-none mb-2">
                                <div className="card-body">
                                    <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close"></i></span>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0">
                                            <div className="notify-icon bg-primary">
                                                <i className="mdi mdi-comment-account-outline"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 text-truncate ms-2">
                                            <h5 className="noti-item-title fw-semibold font-14">Datacorp <small className="fw-normal text-muted ms-1">1 min ago</small></h5>
                                            <small className="noti-item-subtitle text-muted">Caleb Flakelar commented on Admin</small>
                                        </div>
                                    </div>
                                </div>
                          </span>
                        {/* <!-- All--> */}
                        <span className="dropdown-item text-center text-primary notify-item border-top py-2">
                            View All
                        </span>

                    </div>
                  </li>
                  {/* Toolbar 종모양 icon 기능 end */}

                  <li className="dropdown">
                      <span className="nav-link dropdown-toggle arrow-none nav-user px-2" data-bs-toggle="dropdown" role="button" aria-haspopup="false" aria-expanded="false">
                          <span className="account-user-avatar">
                              <img src="/assets/images/users/avatar-1.jpg" alt="user-image" width="32" className="rounded-circle"/>
                          </span>
                          <span className="d-lg-flex flex-column gap-1 d-none">
                              <h5 className="my-0">{login.username}</h5>
                              <h6 className="my-0 fw-normal">Founder</h6>
                          </span>
                      </span>
                      <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated profile-dropdown">
                          {/* <!-- item--> */}
                          <div className=" dropdown-header noti-title">
                              <h6 className="text-overflow m-0">Welcome !</h6>
                          </div>

                          {/* <!-- item--> */}
                          <span className="dropdown-item mouse-hand">
                              <i className="mdi mdi-account-circle me-1"></i>
                              <span>My info</span>
                          </span>

                          {/* <!-- item--> */}
                          <span className="dropdown-item mouse-hand">
                              <i className="mdi mdi-account-edit me-1"></i>
                              <span>Setting</span>
                          </span>
                          {/* <!-- item--> */}
                          <span className="dropdown-item mouse-hand" onClick={handleLogout}>
                              <i className="mdi mdi-logout me-1"></i>
                              <span>Logout</span>
                          </span>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
      {/* <!-- ========== Topbar End ========== --> */}
      </>


   
  );

};

export default AuthLayoutToolbar