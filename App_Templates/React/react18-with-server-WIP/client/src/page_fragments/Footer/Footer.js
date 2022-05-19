import React from 'react';
import {Container,Row,Col} from "react-bootstrap";
import './Footer.css'

export const Footer = () => {
  return (
    <Container fluid className="footer d-flex justify-content-center align-self-flex-end">
      <div>Last updated May 2022</div>
    </Container>
  )
}