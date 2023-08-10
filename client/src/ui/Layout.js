import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Top from '../components/Top';
import NavBar from '../components/NavBar';
import RollingBanner from '../components/RollingBanner';
import InnerLayout from "./InnnerLayout";

function LayoutBox() {
  return (
     
    <Layout>
        <InnerLayout>
            <Top />
            <NavBar />
            <RollingBanner />
            <Document >
            <Outlet />

            </Document>
        </InnerLayout>
    </Layout>);
 
  
}

export default LayoutBox;

const Layout = styled.div`
position: relative;
min-width: 120rem;
height: 100%;
margin: 0 auto;
`;

const Document = styled.div`
display: flex;
flex-direction: column;
min-height: calc(100vh - 36rem);
margin: 0 25rem 0 25rem
`;