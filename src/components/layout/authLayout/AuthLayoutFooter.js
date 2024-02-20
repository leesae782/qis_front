import React from "react";
import { Link } from "react-router-dom";

const AuthLayoutFooter = () => {    
  
  return (
    <footer className="footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    {new Date().getFullYear()} © Brycenkorea
                </div>
                <div className="col-md-6">
                    <div className="text-md-end footer-links d-none d-md-block">
                        {/* <Link to="/">경기 수원시 팔달구 효원로 299 (인계동) 경인일보하이엔드 507호</Link> */}
                        <span>경기 수원시 팔달구 효원로 299 (인계동) 경인일보하이엔드 507호</span>
                        {/* <Link to="/">Support</Link>
                        <Link to="/">Contact Us</Link> */}
                    </div>
                </div>
            </div>
        </div>
    </footer>

  );

};

export default AuthLayoutFooter