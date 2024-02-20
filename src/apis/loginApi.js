import http from "../config/httpConfig"
import { nullCheck } from "../utils/CommonUtils";
import { showAlert } from '../utils/SwalertUtil';
/**
 * noticeService ( = API 호출 함수 )
 * 2024.01.18 - Saylee
 */
const loginApi  = {
  checkValidation: (loginData) => {

    if(nullCheck(loginData.username)){
      showAlert("인증실패", "Email을 입력해 주세요." , "error");  
      return false;
    }
      
    if(nullCheck(loginData.password)){
      showAlert("인증실패", "Password를 입력해 주세요." , "error");  
      return false;
    }
    
  },
  login: async (loginData) => {
    let errcode;
    try {
      await http.post('/api/login', loginData)
        .then((resp) => {
          
          if(resp.status === 200){
            console.log(resp)
            // 로컬스토리지에 데이터저장
            localStorage.setItem("token", resp.data.result.data.token);
            localStorage.setItem("refreshTocken", resp.data.result.data.refreshToken);
            localStorage.setItem("username", resp.data.result.data.username);
            localStorage.setItem("roles", resp.data.result.data.roles);

            errcode = resp.status
          }
        });
    } catch (error) {
      errcode = error.response.status;
      if(errcode === 401){ // 비밀번호 틀렸을경우
        showAlert("인증실패", error.response.data.message , "error");  
      }else if(errcode === 404){ // 존재하지 않는 사용자일경우
        showAlert("인증실패","존재하지 않는 사용자입니다.","error");  
      }
    }
    return errcode;
    
  },
  logout: async () => {
    let errcode;
    try {
      await http.post('/api/logout')
        .then((resp) => {
          errcode = resp.status
        });
    } catch (error) {
      console.log(error)
    }

    localStorage.removeItem("token");
    localStorage.removeItem("refreshTocken");
    localStorage.removeItem("username");
    localStorage.removeItem("roles");

    return errcode;
    //alert(localStorage.getItem("token"))
  },


};

export default loginApi;