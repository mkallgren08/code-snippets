import React from 'react';
import {Container} from "react-bootstrap";
import './PageWrapper.css';

export const PageWrapper = ({n,children}) => {
  return(
    <Container fluid className="page-wrapper">
      {children}
    </Container>
  )
}
