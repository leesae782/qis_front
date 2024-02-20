import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {    
  const primaryRGB = 'var(--ct-primary-rgb)';
  return (
    <>
        <div className="position-absolute start-0 end-0 start-0 bottom-0 w-100 h-100">
            <svg  width='100%' height='100%' viewBox='0 0 800 800'>
              <g fillOpacity='0.22'>
                <circle style={{ fill: `rgba(${primaryRGB}, 0.1)` }} cx='400' cy='400' r='600' />
                <circle style={{ fill: `rgba(${primaryRGB}, 0.2)` }} cx='400' cy='400' r='500' />
                <circle style={{ fill: `rgba(${primaryRGB}, 0.3)` }} cx='400' cy='400' r='300' />
                <circle style={{ fill: `rgba(${primaryRGB}, 0.4)` }} cx='400' cy='400' r='200' />
                <circle style={{ fill: `rgba(${primaryRGB}, 0.5)` }} cx='400' cy='400' r='100' />
              </g>
            </svg>
        </div>
        <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5 position-relative">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-4 col-lg-5">
                        <div className="card">
                            {/* <!-- Logo --> */}
                            <div className="card-header py-4 text-center bg-primary">                                
                              <span>
                                <img src="/assets/images/logo/logo.png" alt="logo" height="60"/>
                              </span>
                            </div>

                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h1 className="text-error">4<i className="mdi mdi-emoticon-sad"></i>4</h1>
                                    <h4 className="text-uppercase text-danger mt-3">페이지를 찾을수 없습니다</h4>
                                    <p className="text-muted mt-3">페이지의 주소가 정확한지 다시 한번 확인해 주세요.</p>
                                    <Link to="/" className="btn btn-info mt-3"><i className="mdi mdi-reply"></i> 홈으로</Link>
                                </div>
                            </div> 
                        </div>
                        
                    </div> 
                </div>
                {/* <!-- end row --> */}
            </div>
            {/* <!-- end container --> */}
        </div>
    </>
  );

};

export default NotFound