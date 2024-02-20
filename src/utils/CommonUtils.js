/**
 * Null 체크
 * 2024.01.16 - Saylee
 * @param {*} value Null 체크값
 * @returns 
 */
export const nullCheck = (value) => {
  return value === "" || value === null || value === undefined || (typeof value === "object" && !Object.keys(value).length);
};
/**
 * 문자 YYYYmmdd -> YYYY-mm-dd 값으로 변환  , DB에서 포맷 안맞추고 JS에서 할떄
 * 2024.01.24 - Saylee
 * @param {*} value 문자열 날짜
 * @returns 
 */
export const convertToDateFormatYmd = (value) => {
  if(!nullCheck(value)){
      // value = value.replace(/-/g,'');
      const year = value.substring(0, 4);
      const month = value.substring(4, 6);
      const day = value.substring(6, 8);
  
      if (/^\d{4}$/.test(year) && /^\d{2}$/.test(month) && /^\d{2}$/.test(day)) {
        return `${year}-${month}-${day}`;
      }else{
        return value
      }
    
  }else{
    return "";
  }
};
/**
 * DB에서 불러온 date형식의 문자열  -> YYYY-mm-dd 값으로 변환  , DB에서 포맷 안맞추고 JS에서 할떄
 * 예시 ) 2024-01-05 13:15:20.000 -> 2024-01-05
 * 2024.01.24 - Saylee
 * @param {*} value 문자열 날짜
 * @returns 
 */
export const convertToDateFormat = (value) => {
  if (!nullCheck(value)) {
      const dateRegex = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/;

      const match = value.match(dateRegex);

      if (match) {
          const year = match[1];
          const month = match[2];
          const day = match[3];

          if (/^\d{4}$/.test(year) && /^\d{2}$/.test(month) && /^\d{2}$/.test(day)) {
              return `${year}-${month}-${day}`;
          }
      }
      return value;

  } else {
      return "";
  }
};




export const addComma = (price) => {
          let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          return returnString;
      }
  
