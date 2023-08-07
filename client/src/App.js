import Top from './components/Top';
import NavBar from './components/NavBar';
import RollingBanner from './components/RollingBanner';
import { Outlet } from 'react-router-dom';

import './App.css';

function App() {


  return (
    <>
    <Top />
    <NavBar />
    <RollingBanner />
    <Outlet/>
    </>
  
  );
}

export default App;
