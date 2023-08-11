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
          <Route path="/" element={<Layout />}>
            <Route index element={<Cover />} />
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contents" element={<Contents />} />
          </Route>
          <Route path="/mypage" element={<PrivateRoute element={<Mypage />} />} />
        </Routes>
      </AuthProvider>
    </Provider>
  );
}

export default App;
