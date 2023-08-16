import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Top from '../components/Top';
import NavBar from '../components/NavBar';
import RollingBanner from '../components/RollingBanner';
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
height: 100%;
margin: 0   auto;
`;

export const Document = styled.div`
display: flex;
flex-direction: column;
min-height: calc(100vh - 36rem);
margin: 0 20rem 0 20rem;

`;