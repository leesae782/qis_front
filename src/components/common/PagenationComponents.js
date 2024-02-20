import React from "react";

/**
 * Pagenation 컴포넌트  아직 덜구현함 추후 개선하기
 * 2024.01.18 - Saylee
 */

export const Pagenation = ({ children  }) => {
  return (
      <ul className="pagination pagination-rounded mb-0 m-t-10 justify-content-center">
          <li className="page-item mouse-hand">
              <span className="page-link"  aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
              </span>
          </li>
          <li className="page-item"><span className="page-link mouse-hand" >1</span></li>
          <li className="page-item"><span className="page-link mouse-hand" >2</span></li>
          <li className="page-item active"><span className="page-link mouse-hand" >3</span></li>
          <li className="page-item"><span className="page-link mouse-hand" >4</span></li>
          <li className="page-item"><span className="page-link mouse-hand" >5</span></li>
          <li className="page-item mouse-hand">
              <span className="page-link"  aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
              </span>
          </li>
    </ul>
  );
};