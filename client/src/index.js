import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { AuthProvider } from '../src/context/AuthProvider';
import './index.css';
import Contents from '../src/pages/Contents';
import About from '../src/pages/About';
import Mypage from '../src/pages/Mypage';
import LoginPage from '../src/pages/LoginPage';
import SignupPage from './pages/SignupPage';
import App from '../src/App';
import PrivateRoute from './PrivateRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<App />}>
              <Route path="/about" element={<About />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
            <Route path="/contents" element={<Contents />} />
            </Route>
            <Route path="/mypage" element={<PrivateRoute element={<Mypage />} />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// ...
