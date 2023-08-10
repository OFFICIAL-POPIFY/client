import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Cover from './components/Cover';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <div className='wrapper'>
      <div className='layout'>
        <div className='document'>
          <Cover />
        </div>
      </div>
      <div className='box'></div>
    </div>

    </BrowserRouter>
  </React.StrictMode>
);

// ...
