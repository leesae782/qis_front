import React from "react";
/**
 * CardWidget 컴포넌트
 * 2024.01.24 - Saylee
 * @param 
 */
export const HomeSituationDiv = (props) => {
  const {subjectIcon , subject , content, subComment, subValue} = props
  
  let valueStatus = ''
  if(subValue){
    const parsedValue = parseFloat(subValue);

    /* 상승인지 하락인지  */
  if (!isNaN(parsedValue)) {
      if (parsedValue > 0) {
        valueStatus = 'up';
      } else if (parsedValue < 0) {
        valueStatus = 'down';
      }
    } else {
      // Handle the case when subValue is not a valid number
      console.error("Invalid subValue:", subValue);
    }
  }

  return (
    <div className="card widget-flat">
      

      <div className="card-body">
          <div className="float-end">
              <i className={"mdi widget-icon " + subjectIcon}></i>
          </div>
          <h5 className="text-muted fw-normal mt-0" title="Number of Customers">{subject}</h5>
          <h3 className="mt-3 mb-3">{content}</h3>
          <p className="mb-0 text-muted">

              <span className={ valueStatus === 'up' ? "text-success me-2" : "text-danger me-2"} ><i className={ valueStatus === 'up' ? "mdi mdi-arrow-up-bold" : "mdi mdi-arrow-down-bold"}></i> {subValue}%</span>
              <span className="text-nowrap">{subComment}</span>  
          </p>
      </div> 
    </div> 
  );
};