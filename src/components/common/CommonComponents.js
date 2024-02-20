import React from 'react';
import { addComma } from '../../utils/CommonUtils';

/**
 * Table 컴포넌트
 * 2024.01.18 - Saylee
 */
export const Table = ({ children ,className }) => {
  return (
      <div className={className ? className : "table-responsive"}>
          <table className="table table-centered table-nowrap mb-0">{children}</table>
      </div>
  );
};

/**
 * Thead 컴포넌트
 * 2024.01.18 - Saylee
 */
export const Thead = ({ children,className }) => {
  return (
      <thead className={className ? className : "table-light"} >{children}</thead>
  );
};
/**
 * Tbody 컴포넌트
 * 2024.01.18 - Saylee
 */
export const Tbody = ({ children  , className}) => {
  return (
      <tbody className={className ? className : ""}>{children}</tbody>
  );
};
/**
 * Tr 컴포넌트
 * 2024.01.18 - Saylee
 */
export const Tr = ({ children , className}) => {
  return (
      <tr className={className ? className : ""}>{children}</tr>
  );
};
/**
 * Td 컴포넌트
 * 2024.01.18 - Saylee
 */
export const Td = ({ children, colspan ,className ,width}) => {
  return (
      <td style={{width:width}} colSpan={colspan} className={className ? className : ""}>{children}</td>
  );
};
/**
 * Th 컴포넌트
 * 2024.01.18 - Saylee
 */
export const Th = ({ children , width ,className}) => {
  return (
      <th style={{width:width}} className={className ? className : ""}>{children}</th>
  );
};
/**
 * Table 총개수 컴포넌트
 * 2024.01.18 - Saylee
 */
export const TableCount = ({ totalCount }) => {
  return (
      <div className="m-b-10 m-t-10 table-count">총 <span className="fw-bold">{addComma(totalCount)}</span> 건</div>
  );
};


/**
 * 기본 화면 Div 컴포넌트 
 * 2024.01.18 - Saylee
 */
export const DefaultCardDiv = ({ children  }) => {
  return (
      <div className="row">
          <div className="col-12">
              <div className="card">
                  <div className="card-body">
                    {children}
                  </div>  
              </div> 
          </div> 
      </div>
  );
};

/**
 * Div 컴포넌트
 * 2024.01.18 - Saylee
 */
export const Div = ({ children , className }) => {
  return (
      <div className={className ? className : ""}>
          {children}
      </div>
  );
};

/**
 * Table 데이터 존재 안할때 컴포넌트
 * 2024.01.18 - Saylee
 */
export const NotExistList = ({ children , className , colspan}) => {
  return (
      <Tr><Td colspan={colspan} className="text-center">조회된 데이터가 존재하지 않습니다.</Td></Tr>
  );
};

/**
 * 제목 컴포넌트
 * 2024.01.18 - Saylee
 */
export const Subject = ({ children , icon }) => {
  return (
      <h4 className="m-t-10 m-b-10">
        <MdiIcon icon={icon + " me-1"}/>
        {children}
      </h4>
  );
};

/**
 * 검색어 입력 컴포넌트
 * 2024.01.18 - Saylee
 */
export const SearchInput = ({ value , handleChange , handleSearch}) => {
  return (
    <div className="app-search">
      <form onSubmit={(e) => {e.preventDefault();}}> {/* form 제출 방지 */}
        <div className="input-group">
          <input type="search" className="form-control" placeholder="검색어 입력" id="top-search" value={value} onChange={handleChange} />
          <span className="mdi mdi-magnify search-icon"></span>
          <button className="input-group-text btn btn-primary" onClick={handleSearch} type="button">
            <i className="mdi mdi-search-web me-1"></i>검색
          </button>
        </div>
      </form>
    </div>
  );
};
/**
 * Mdi icon 컴포넌트
 * 2024.01.18 - Saylee
 * @param icon 아이콘 css 명 
 */
export const MdiIcon = ({  icon }) => {
  return (
    <i className={icon ? "mdi "+ icon : "mdi me-1"} ></i>
  );
};









