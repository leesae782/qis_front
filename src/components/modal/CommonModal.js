import React, { useState, useEffect , useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { handleShow , handleClose } from '../../reducer/slices/commonModalSlice';
import PopTest from '../../popups/PopTest';
import PopTest2 from '../../popups/PopTest2';
import PopTest3 from '../../popups/PopTest3';

/**
 * CommonModal
 * 2024.01.18 - Saylee
 * 모달창은 한개만 띄울수있음 모달위에 모달은 안됨 하나의 모달을 열고닫고 하는 식으로 내용물만바꾸는 로직으로 구현해야함.
 * 만약 모달을 여러개띄워야하는경우 해당 소스를참조하여 페이지에 별도로 구현해야함.
 * 
 */
function CommonModal() {
const dispatch = useDispatch();

/* REDUCER 스토어에서 공통모달 상태관리  */
// 모달 show hide 상태
const show = useSelector(state => state.commonModal.show);
// 보여줄 모달 componet 선택
const modalType = useSelector(state => state.commonModal.modalType);
// 보여줄 모달 size lg sm  아무것도 안쓰면 그냥 default
const modalSize = useSelector(state => state.commonModal.modalSize);
// 변경되는 컴포넌트
const [component, setComponent] = useState(null);


useEffect(() => {
    /* Modal로 사룡하려면 modalType와 컴포넌트를 매칭시켜주는 작업이 필요함 */
    let content = null;

    switch (modalType) {
        case "popTest":
          content = <PopTest />;
          break;
        case "popTest2":
          content = <PopTest2 />;
          break;
        // 추가적인 모달 타입에 대한 처리
        case "popTest3":
          content = <PopTest3 />;
          break;
        default:
          // 기본 처리 (예: 모달 타입이 매칭되지 않을 때)
          content = null
          break;
      }
    setComponent(content)
}, [modalType]);


const modalClose = () => {
    dispatch(handleClose());
}


  return (
        <Modal show={show} onHide={modalClose} size={modalSize} scrollable="true">
        {component}
        </Modal>
    );
}

export default CommonModal;



