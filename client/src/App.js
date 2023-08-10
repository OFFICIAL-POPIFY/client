import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { AuthProvider } from '../src/context/AuthProvider';
import './index.css';
import Contents from '../src/pages/Contents';
import About from '../src/pages/About';
import Mypage from '../src/pages/Mypage';
import LoginPage from '../src/pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Layout from './ui/Layout';
import PrivateRoute from './PrivateRoute';
import MainPage from './pages/MainPage';
import Cover from "./components/Cover"; // Import the Cover component

function App() {
  return (
    <Provider store={store}> 
      <AuthProvider>
        <Routes>
          {/* Layout 컴포넌트에 Cover 컴포넌트 추가 */}
          <Route path="/" element={<Layout />}>
            {/* 루트 페이지인 경우에만 Cover 컴포넌트 렌더링 */}
            <Route index element={<Cover />} />

            {/* 기타 페이지들 */}
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contents" element={<Contents />} />
          </Route>

          {/* 마이페이지 */}
          <Route path="/mypage" element={<PrivateRoute element={<Mypage />} />} />
        </Routes>
      </AuthProvider>
    </Provider>
  );
}

export default App;
