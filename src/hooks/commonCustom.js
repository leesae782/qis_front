import { useState } from 'react';

/*
* 2024.01.25 - Saylee
* Common Custom hook 예시
* input 태그 또는 select 태그 값이 변경 customHook 
  onChange 할시 setState  에 e.targetValue 가 너무 귀찮아서 만들어봄..
*/
export const useChangeValue = (targetValue) => {
  // alert(targetValue)
  const [value, setValue] = useState(targetValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return [value, handleChange];
};







