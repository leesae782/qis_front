import http from "../config/httpConfig"

/**
 * noticeService ( = API 호출 함수 )
 * 2024.01.18 - Saylee
 */
const noticeService  = {
  getData: async (page , searchType , searchValue) => {
    try {
      const req = {
        page : page
     , searchType  : searchType
     , searchValue : searchValue 
      };
      const response = await http.get('/notice/selectHomeworkList', {params: req});
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // 에러를 상위로 전파하여 다른 부분에서 처리할 수 있도록 함
    }
  },
};

export default noticeService;