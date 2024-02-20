import Swal from 'sweetalert2';

/**
 * 2024.01.16 - Saylee
 * 알림 공통 Alert
 * @param {*} text 알림문구
 * @param {*} icon  알림아이콘 success, error, warning, info 등의 아이콘
 * @param {*} callback  콜백함수
 * @returns 
 */
export const showAlert = (title,text, icon, callback) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon, 
    confirmButtonText: '확인',
    customClass: {
      container: 'swalert-custom', // 여기서 container를 설정하여 z-index를 변경합니다.
    },
  }).then((result) => {
    if (result.isConfirmed) {
      // SweetAlert이 확인되면 콜백 함수 실행
      if (callback) {
        callback();
      }
    }
  });
};
/**
 * 2024.01.16 - Saylee
 * 알림 공통 Confirm
 * @param {*} text 알림문구
 * @param {*} icon  알림아이콘 success, error, warning, info 등의 아이콘
 * @param {*} confirmCallback  확인 콜백함수
 * @param {*} cancelCallback  취소 콜백함수
 * @returns 
 */
export const showConfirm = (text, icon, confirmCallback, cancelCallback) => {
  Swal.fire({
    text: text,
    icon: icon,
    showCancelButton: true,
    confirmButtonText: '확인',
    cancelButtonText: '취소',
    customClass: {
      container: 'swalert-custom', // 여기서 container를 설정하여 z-index를 변경합니다.
    },
  }).then((result) => {
    if (result.isConfirmed) {
      // SweetAlert이 확인되면 confirmCallback 실행
      if (confirmCallback) {
        confirmCallback();
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      // SweetAlert이 취소되면 cancelCallback 실행
      if (cancelCallback) {
        cancelCallback();
      }
    }
  });
};