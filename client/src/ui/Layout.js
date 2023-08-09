import React from "react";
import styled from "styled-components";
function LayoutBox() {
  return 
  (
    <Layout>
        <Document>
        
        </Document>
    </Layout>
  )
}

export default LayoutBox;

const Layout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Document = styled.div`
    margin: 0 36rem 0 36rem;
`;