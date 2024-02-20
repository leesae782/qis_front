import { nullCheck } from '../../../utils/CommonUtils';
import { Link } from 'react-router-dom';


/**
 * 
 * 2024.01.16 - Saylee
 * 기본이벤트방지
 * @param {*} e 이벤트 값
 * @returns 
 */
export const stopLink = (e) => {
  e.preventDefault();
};

/**
 * 2024.01.16 - Saylee
 * 사이드바 메뉴아이템 조회
 * @param {*} parent 메뉴 항목
 * @param {*} index  고유인덱스번호
 * @returns 
 */
export const MenuItem = ({parent}) => {

  if (!nullCheck(parent.submenu)) {
    // 자식메뉴가 있으면
    return (
      <div>
        <li className="side-nav-item ">
        <Link to={"#"+ parent.menuCode} data-bs-toggle="collapse"  aria-controls={parent.menuCode} className="side-nav-link">
            <i className={!nullCheck(parent.icon)? parent.icon : "uil-copy-alt"}></i>
            <span> {parent.menuName} </span>
            <span className="menu-arrow"></span>
        </Link>
        <div className="collapse" id={parent.menuCode}>
            <ul className="side-nav-second-level">
              {parent?.submenu?.map((child) => (
                <SubMenuItem child={child} key={child.menuCode} />
              ))}
            </ul>
        </div>
      </li>
    </div>
    );
  } else{
    // 자식메뉴가 없으면
    return (

        <li className="side-nav-item">
          <Link to={parent.menuUrl} className="side-nav-link" >
            <i className={!nullCheck(parent.icon)? parent.icon : "uil-copy-alt"}></i>
            <span> {parent.menuName} </span>
          </Link>  
        </li>
    );
  }

};

/**
 * 사이드바의 자식아이템 
 * 2024.01.16 - Saylee
 * @param {*} child 자식메뉴 item
 * @param {*} index index
 * @returns 
 */
const SubMenuItem = ({child}) => {

    if (!nullCheck(child.submenu)) {
    // 서브메뉴의 자식 메뉴가 존재하면
       return (
             <li className="side-nav-item" >
               <Link to={"#" + child.menuCode}  data-bs-toggle="collapse"  aria-expanded="true"   >
                  <span> {child.menuName} </span>
                  <span className="menu-arrow"></span>
               </Link>
               <div className="collapse " id={child.menuCode}>
                   <ul className="side-nav-third-level">
                     {child.submenu.map((child ) => (
                       <SubMenuItem child={child} key={child.menuCode}/>
                     ))}
                   </ul>
               </div>
           </li>
       );
    }else {
    // 서브메뉴의 자식메뉴가 존재안하면  
      return (
        <li>
          <Link to={child.menuUrl}>{child.menuName}</Link>
        </li>
      );
    }

};