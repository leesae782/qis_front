import React, { useState, useEffect } from "react";
import menuData from "./MenuData";
import { v4 } from "uuid";  // 고유식별자 생성하는 것
import { MenuItem } from "./AuthLayoutComponent";
import { Link } from 'react-router-dom';

const LeftSideBar = () => {    
  
  console.log("====== menuData =======")
  console.log(menuData)

// 현재 URL
const currentUrl = "mydrive";

function findMenu(menuData, currentUrl, parentMenus = []) {
    for (const menu of menuData) {
        if (menu.menuUrl === currentUrl) {
            // 현재 URL과 일치하는 메뉴를 찾았을 때
            return [...parentMenus, menu.menuName];
        } else if (menu.submenu) {
            // 서브메뉴가 있는 경우
            const foundMenu = findMenu(menu.submenu, currentUrl, [...parentMenus, menu.menuName]);
            if (foundMenu) {
                // 현재 URL이 서브메뉴에 속하는 경우
                return foundMenu;
            }
        }
    }
    return null;
}

const menuNames = findMenu(menuData, currentUrl);

if (menuNames) {
    console.log("현재 URL과 일치하는 메뉴:", menuNames.join(" > "));
} else {
    console.log("일치하는 메뉴를 찾을 수 없습니다.");
}



  return (
    <>
      {/* <!-- ========== Left Sidebar Start ========== --> */}
      <div className="leftside-menu">

          {/* <!-- Brand Logo Light --> */}
          <Link to="/" className="logo logo-light">
              <span className="logo-lg  m-t-10">
                  <img src="/assets/images/logo/logo_white.png" alt="logo" className="w-h-full"/>
              </span>
              <span className="logo-sm">
                  <img src="/assets/images/logo/logo_white_sm.png" alt="small logo" className="w-h-full"/>
              </span>
          </Link>

          {/* <!-- Sidebar Hover Menu Toggle Button --> */}
          <div className="button-sm-hover" data-bs-toggle="tooltip" data-bs-placement="right" title="Show Full Sidebar">
              <i className="ri-checkbox-blank-circle-line align-middle"></i>
          </div>

          {/* <!-- Full Sidebar Menu Close Button --> */}
          <div className="button-close-fullsidebar">
              <i className="ri-close-fill align-middle"></i>
          </div>

          {/* <!-- Sidebar -left --> */}
          <div className="h-100" id="leftside-menu-container" data-simplebar>


              {/* <!--- Sidemenu --> */}
              <ul className="side-nav">
                <li className="side-nav-item">
                    <Link to="home" className="side-nav-link" >
                        <i className="uil-home-alt"></i>
                        <span> Dashboard </span>
                    </Link>  
                </li>
                 <li className="side-nav-title">MENU</li>
                {/* 메뉴데이터 JSON 파일에서 가져오기 추후 DB에서 가져오는걸로만 바꾸면됨 2024.12.16 - Saylee */}
                {
                    (Object.keys(menuData).length !== 0) && menuData.map(function (menu, idx) {
                        return (
                            <MenuItem parent={menu} index={idx} key={idx}  />
                        );
                    })
                }   

              </ul>
              {/* <!--- End Sidemenu --> */}

              <div className="clearfix"></div>
          </div>
      </div>
      {/* <!-- ========== Left Sidebar End ========== --> */}
    </>
  );

};

export default LeftSideBar