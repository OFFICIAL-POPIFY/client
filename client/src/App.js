import Top from './components/Top';
import NavBar from './components/NavBar';
import RollingBanner from './components/RollingBanner';
import { Outlet } from 'react-router-dom';

import './App.css';

function App() {


  return (
    <>
    <div className='top'>
    <Top />
    <NavBar />
    <RollingBanner />
    </div>
    <Outlet/>
    </>
  
  );
}

export default App;
