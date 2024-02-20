
import React, { useState } from 'react';
import { ModalTitle ,ModalBody, ModalFooter } from '../components/modal/ModalComponents';
import { showAlert } from '../utils/SwalertUtil';
import { handleShow , handleClose } from '../reducer/slices/commonModalSlice';
import { useSelector, useDispatch } from 'react-redux';

const PopTest3 = () => {
  const dispatch = useDispatch();
  return (
    <>

      {/* Modal 제목 */}
      <ModalTitle>
        제목입니다
      </ModalTitle>
      {/* Modal 내용 작성 */}
      <ModalBody>
        반갑습니다 내용이에요33333333333333
        <h1>assssssssssssss</h1>
      </ModalBody>
      {/* Modal Footer 버튼 생성 area (화면마다 버튼 개수, 버튼 이름 다름) */}
      <ModalFooter>
        <button type="button" className="btn btn-light" onClick={
          ()=>{
            dispatch(handleClose())         
           }
        }>Close</button>
        <button type="button" className="btn btn-primary"
          onClick={()=>{
            dispatch(handleShow(
              {
                  param : {key: "123123"},
            
              }
          ));
          }}
        >Save changes</button>
      </ModalFooter>
      
    </>
  );
};

export default PopTest3;