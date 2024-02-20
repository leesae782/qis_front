import React from 'react';
// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import AuthLayout from './layout/AuthLayout/AuthLayout';
import Error404 from './pages/error/Error404';
import Error500 from './pages/error/Error500';

import Login from './pages/login/Login';
import NonAuthLayout from './layout/NonAuthLayout/NonAuthLayout';
import Board from './pages/board/Board';
import CodingTest from './pages/codingTest/CodingTest';
import BoardView from './pages/board/BoardView';

function App() {

  return (
    <BrowserRouter>
      <Routes>
          {/* 추후 로그인처리 붙이면 로그인 로직 바꿔야함*/}
          <Route element={<NonAuthLayout />}>
            <Route path="/login" element={<Login />}></Route> 
          </Route>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/board" element={<Board />}></Route>
            <Route path="/boardView" element={<BoardView />}></Route>
            <Route path="/codingTest" element={<CodingTest />}></Route>
          </Route>

          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          <Route path="/notfound" element={<Error404 />}></Route>
          <Route path="/systemerror" element={<Error500 />}></Route>
          <Route path="*" element={<Error404 />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
