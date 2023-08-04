import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './index.css';
import Contents from '../src/pages/Contents';
import reportWebVitals from './reportWebVitals';
import About from '../src/pages/About';
import Mypage from '../src/pages/Mypage';
import App from '../src/App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
  
    <Routes>
    <Route path='/'element={<App />}>
    <Route path="/about" element={<About />} />
    <Route path="/contents" element={<Contents />} />
    <Route path="/mypage" element={<Mypage />} />
    </Route>
  
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
