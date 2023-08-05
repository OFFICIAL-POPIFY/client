import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './index.css';
import Contents from '../src/pages/Contents';
import reportWebVitals from './reportWebVitals';
import About from '../src/pages/About';
import Mypage from '../src/pages/Mypage';
import LoginPage from '../src/pages/LoginPage';
import App from '../src/App';
import { Provider } from 'react-redux';
import store from './store';
import SignupPage from './pages/SignupPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
    <BrowserRouter>
  
    <Routes>
    <Route path='/'element={<App />}>
    <Route path="/about" element={<About />} />
    <Route path="/contents" element={<Contents />} />
    <Route path="/signup" element={<SignupPage />} />
    <Route path="/mypage" element={<Mypage />} />
    <Route path="/login" element={<LoginPage />} />
    </Route>
  
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
