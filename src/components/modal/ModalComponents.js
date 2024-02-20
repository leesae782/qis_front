import React from 'react';
import {  handleClose } from '../../reducer/slices/commonModalSlice';
import {  useDispatch } from 'react-redux';

/**
 * ModalTitle
 * 2024.01.18 - Saylee
 * 공통팝업 타이틀 컴포넌트
 */
export const ModalTitle = ({ children }) => {
  const dispatch = useDispatch();
  return (
      <div className="modal-header bg-primary">
          <h4 className="modal-title" id="primary-header-modalLabel">
            {children}
          </h4>
          <button type="button" className="btn-close btn-close-white" onClick={()=>{dispatch(handleClose())}}></button>
      </div>
  );
};
/**
 * ModalBody
 * 2024.01.18 - Saylee
 * 공통팝업 내용 컴포넌트
 */
export const ModalBody = ({ children }) => {
  return (
    <div className="modal-body">
      {children}
    </div>
  );
};

/**
 * ModalFooter
 * 2024.01.18 - Saylee
 * 공통팝업 푸터 컴포넌트
 */
export const ModalFooter = ({ children }) => {
  return (
    <div className="modal-footer">
      {children}
    </div>
  );
};



