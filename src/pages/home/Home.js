import React from "react";
import { HomeSituationDiv } from "../../components/home/HomeComponents";


const Home = () => {    
  
  return (

    <>
    {/* <!-- Start Content--> */}
    <div className="row">
        <div className="col-xl-5 col-lg-6">

            <div className="row">
                <div className="col-sm-6">
                    {/* 추후 컴파운드 컴포넌트로 변경해야함 */}
                    <HomeSituationDiv 
                        subject={"주간접속 수"} 
                        subjectIcon={'mdi-account-multiple'}
                        content={"36.2222"}
                        subValue={"3.78"}
                        subComment={"전주 대비"}
                    /> 
                </div> 

                <div className="col-sm-6">
                    <HomeSituationDiv 
                        subject={"주간접속 수"} 
                        subjectIcon={'mdi-account-multiple'}
                        content={"36.2222"}
                        subValue={"-3.78"}
                        subComment={"전주 대비"}
                    /> 
                </div>
            </div> 

            <div className="row">
                <div className="col-sm-6">
                    <HomeSituationDiv 
                        subject={"주간접속 수"} 
                        subjectIcon={'mdi-account-multiple'}
                        content={"36.2222"}
                        subValue={"0"}
                        subComment={"전주 대비"}
                    /> 
                </div> 

                <div className="col-sm-6">
                    <HomeSituationDiv 
                        subject={"주간접속 수"} 
                        subjectIcon={'mdi-account-multiple'}
                        content={"36.2222"}
                        subValue={"0"}
                        subComment={"전주 대비"}
                    /> 
                </div> 
            </div> 

        </div> 
        
        <div className="col-xl-7 col-lg-6">
            <div className="card card-h-100">
                <div className="d-flex card-header justify-content-between align-items-center">
                    <h4 className="header-title">Projections Vs Actuals</h4>
                </div>
                <div className="card-body pt-0">
                    <div dir="ltr">
                    </div>
                        
                </div> 
            </div> 

        </div> 

        <div className="col-xl-5 col-lg-6">
            <div className="card card-h-100">
                <div className="d-flex card-header justify-content-between align-items-center">
                    <h4 className="header-title">Projections Vs Actuals</h4>
                </div>
                <div className="card-body pt-0">
                    <div dir="ltr">
                        <div id="high-performing-product" className="apex-charts" data-colors="#727cf5,#91a6bd40"></div>
                    </div>
                        
                </div> 
            </div> 

        </div>

        <div className="col-xl-7 col-lg-6">
            <div className="card card-h-100">
                <div className="d-flex card-header justify-content-between align-items-center">
                    <h4 className="header-title">Projections Vs Actuals</h4>
                </div>
                <div className="card-body pt-0">
                    <div dir="ltr">
                        <div id="high-performing-product" className="apex-charts" data-colors="#727cf5,#91a6bd40"></div>
                    </div>
                        
                </div> 
            </div> 

        </div>
    </div>
                   

    {/* <!-- content --> */}
    </>



  );

};

export default Home