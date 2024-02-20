import React , {useState , useRef ,useEffect} from "react";
import {  Navigate, useNavigate} from 'react-router-dom';
import { Thead , Tbody , Tr , Th , Td ,Table , DefaultCardDiv, Div, NotExistList, Subject, SearchInput, TableCount, MdiIcon } from "../../components/common/CommonComponents";
 import { Pagenation } from "../../components/common/PagenationComponents";
import { addComma, convertToDateFormat } from "../../utils/CommonUtils";
import { useLoadingBar } from "../../hooks/useLoadingBar";

import {useChangeValue} from "../../hooks/commonCustom";
import noticeService from "../../apis/noticeService";

import Pagination from "react-js-pagination"; //"react-js-pagination";
import useBoardList from "../../hooks/useBoardList";

const BoardList = () => {    

  const { boardList
        , searchType
        , setSearchType
        , searchValue
        , setSearchValue
        , page, totalCnt
        , handleView
        , changePage
        , getNoticeList
        } = useBoardList();

  return (

        <DefaultCardDiv>
            <Subject icon={"mdi-pencil-box-multiple"}>게시글 목록</Subject>
            <Div className={"row"}>
                <Div className={"col-md-3 m-t-10"}>
                    {/*  추후 select box 도 컴포넌트 공통화해야함 코드테이블에서 해당 option값을 list로 가져와 공통화하자 */}
                    <select className="form-select" defaultValue={searchType} onChange={setSearchType} >
                        <option value="01">제목</option>
                        <option value="02">내용</option>
                        <option value="03">작성자</option>
                    </select>
                </Div>
                <Div className={"col-md-6 m-t-10"}>
                    <SearchInput value={searchValue} handleChange={setSearchValue} handleSearch={()=>{getNoticeList(1)}}  />
                </Div>
            </Div>

             <hr/>
             <div className="d-flex justify-content-between align-items-center">
                <TableCount totalCount={totalCnt}/>
                <span className="btn btn-sm btn-primary m-b-5"><MdiIcon icon={"mdi-plus-circle-outline me-1"}/>글쓰기</span>
             </div>
            
            <Table>
                <Thead>
                    <Tr> 
                        <Th><MdiIcon icon={"mdi-format-list-numbered-rtl me-1"}/>번호</Th>
                        <Th width={"60%"}><MdiIcon icon={"mdi-format-title me-1"}/>제목</Th>
                        <Th><MdiIcon icon={"mdi-account me-1"}/>작성자</Th>
                        <Th><MdiIcon icon={"mdi-calendar me-1"}/>작성일</Th>
                        <Th><MdiIcon icon={"mdi-eye me-1"}/>조회수</Th> 
                    </Tr>
                </Thead>
                <Tbody>
                    {boardList && boardList.length > 0 ? (
                        boardList.map((item, index) => (
                            <Tr key={index}>
                                <Td>{item.nttId}</Td>
                                <Td><span className="text-body fw-bold mouse-hand" onClick={()=>{handleView(item.nttId)}}>{item.nttSj}</span></Td>
                                <Td>{item.userKorNm}</Td>
                                <Td>{ convertToDateFormat(item.registDt) /* YYYY-mm-dd 형식맞추기 db에서안하고 js에서하기 사유는 그냥 */ }</Td> 
                                <Td>{ item.viewCnt?.toLocaleString()}</Td>
                            </Tr>
                        ))
                    ) : (
                        <NotExistList colspan={"5"}/>
                    )}
                </Tbody>
            </Table>

            <Pagination innerClass="pagination pagination-rounded mb-0 m-t-10 justify-content-center"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="active"
                prevPageText="<"
                nextPageText=">"
                activePage={page}
                itemsCountPerPage={10}
                totalItemsCount={totalCnt}
                pageRangeDisplayed={5}
                onChange={changePage}
            />    

            {/* <Pagenation/> */}
        </DefaultCardDiv>
  );

};

export default BoardList