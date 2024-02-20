// axiosConfig.js
import axios from 'axios';
import { showAlert } from '../utils/SwalertUtil';
import { Link } from 'react-router-dom';


const http = axios.create({
  //baseURL: process.env.REACT_APP_HOST_URL, // API의 기본 URL 설정  -> package.json 에있는 proxy 설정 백앤드서버로지정으로 변경해야 CORS 오류안남
  timeout: 600000, // 타임아웃 설정 (10분)
  headers: {
    'Content-Type': 'application/json',
    // 여기에 필요한 다른 헤더 설정 추가 가능
    "Authorization": `Bearer ${localStorage.getItem("token")}`
  },
});

http.interceptors.request.use(
  function (config) {
      // 헤더정보 설정 및 JWT 인증키 셋팅
      config.headers["Content-Type"] = "application/json; charset=utf-8";
      config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;

      return config;
  },
  function (error) {
      // 요청 에러가 발생했을때 수행할 로직
      console.log(error);
      return Promise.reject(error);
  }
);

function initLocalStorage(){
  localStorage.removeItem("token");
  localStorage.removeItem("refreshTocken");
  localStorage.removeItem("username");
  localStorage.removeItem("roles");
}



// 응답 인터셉터 추가
http.interceptors.response.use(
  function (response) {
      // // 응답에 대한 로직 작성

      // // 호출한 URL이 로그인 처리 후 정상적으로 처리가 됐다면 localStrage에 값 설정
      // if (response.config.url === "/member/login") {
      //     localStorage.setItem("BrycenKoreaJwtToken", response.headers["jwt"]);
      //     return response.status;
      // }
      return response;

  },
    function (error) {
        const apiUrl = error.response.config.url;
        if (error.response && error.response.status) {
           // 로그인 처리일경우에만 해당 error code 처리 별도로 구현
           if(apiUrl === '/api/login'){
              return Promise.reject(error);
           }else{
              console.error(error.response);
              // error code에 따른 응답 error 처리 하기
              switch (error.response.status) {
                case 401: // 401 Unauthorized                
                    initLocalStorage(); // 로컬스토리지 초기화
                    showAlert("INFO", "사용자 정보가 없습니다." , "info",()=>{window.location.href="/login"});     
                    return Promise.reject(error);
                case 403: // 403 Forbidden
                    initLocalStorage(); // 로컬스토리지 초기화
                    showAlert("ERROR", "잘못된 권한 접근입니다." , "error",()=>{window.location.href="/login"});     
                    window.location.href = "/login";
                    return Promise.reject(error);
                case 404: // 404 Not Found
                    showAlert(error?.response?.data?.title, error?.response?.data?.detail , "error");
                    return Promise.reject(error);
                case 500: // Internal Server Error 
                    showAlert(error?.response?.data?.title, error?.response?.data?.detail , "error");
                    return Promise.reject(error);
                default:
                    return Promise.reject(error);
              }
           }

        }
    }
  );



export default http;