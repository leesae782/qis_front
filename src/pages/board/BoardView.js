import React , {useState , useRef } from "react";
import { Thead , Tbody , Tr , Th , Td ,Table , DefaultCardDiv, Div, NotExistList, Subject, SearchInput, TableCount, MdiIcon } from "../../components/common/CommonComponents";

const BoardView = () => {    

  return (
      <>
        <DefaultCardDiv>
            <Subject icon={"mdi-pencil-box-multiple"}>제목으로 쓰자</Subject>
            <span>이세희 / 2023-01-23</span>
            <hr/>

            <Div>
              내용이 들어가면 될것이다
            </Div>

        </DefaultCardDiv>

        <DefaultCardDiv>
        <Subject icon={"mdi-comment"}>댓글 (4)</Subject>
        <hr/>

        <textarea class="form-control form-control-light mb-2" placeholder="Write message" id="example-textarea" rows="3"></textarea>
        <div class="text-end">

            <div class="btn-group mb-2 ms-2">
                <button type="button" class="btn btn-primary btn-sm">댓글작성</button>
            </div>
        </div>

        <div class="d-flex align-items-start mt-2">
            <img class="me-3 avatar-sm rounded-circle" src="assets/images/users/avatar-3.jpg" alt="Generic placeholder image"/>
            <div class="w-100 overflow-hidden">
                <h5 class="mt-0">Jeremy Tomlinson</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                in faucibus.
        
                <div class="d-flex align-items-start mt-3">
                    <span class="pe-3" >
                        <img src="assets/images/users/avatar-4.jpg" class="avatar-sm rounded-circle" alt="Generic placeholder image"/>
                    </span>
                    <div class="w-100 overflow-hidden">
                        <h5 class="mt-0">Kathleen Thomas</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                        vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                        felis in faucibus.
                    </div>
                </div>
            </div>
        </div>
        </DefaultCardDiv>
      </>

  );

};

export default BoardView