
import React, { useState,useEffect } from 'react';
import { ModalTitle ,ModalBody, ModalFooter } from '../components/modal/ModalComponents';
import { showAlert } from '../utils/SwalertUtil';
import { handleShow , handleClose } from '../reducer/slices/commonModalSlice';
import { useSelector, useDispatch } from 'react-redux';

const PopTest = () => {


  const param = useSelector(state => state.commonModal.param);

  const dispatch = useDispatch();

useEffect(() => {
  console.log("여기다친구야")
}, []);

  return (
    <>

      {/* Modal 제목 */}
      <ModalTitle>
        제목입니다
      </ModalTitle>
      {/* Modal 내용 작성 */}
      <ModalBody>
        반갑습니다 내용이에요
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
                  modalType : "popTest2",
                  modalSize : "lg"
            
              }
          ));
          }}
        >Save changes</button>
      </ModalFooter>
      
    </>
  );
};

export default PopTest;