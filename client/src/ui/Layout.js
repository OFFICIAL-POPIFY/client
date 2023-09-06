
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Top from '../components/header/Top';
import NavBar from '../components/header/NavBar';
import RollingBanner from '../components/header/RollingBanner';
import InnerLayout from "./InnnerLayout";
import Footer from "../components/Footer";
import "../App.css";
function LayoutBox() {
  return (
     
    <Layout id="wrap">
        <InnerLayout>
            <Top />
            <NavBar />
            <RollingBanner />
            <Document >
            <Outlet />
            </Document>

        </InnerLayout>
        <Footer />
    </Layout>);
 
  
}

export default LayoutBox;

export const Layout = styled.div`
position: relative;
min-width: 120rem;
height: 100vh;
margin: 0   auto;
`;

export const Document = styled.div`

display: flex;
flex-direction: column;

//화면이 위아래로 전부 보이게 하기 위해 추가
min-height: 100vh;

margin: 0  20rem;
flex: 1; 

`;
