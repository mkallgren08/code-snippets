import React from 'react';
import {Button as Bttn, Card as Crd} from 'react-bootstrap';

export const Card = (props) =>{
  const children=props.children
  return (
    <Crd style={{ width: '18rem' }}>
      <Crd.Img variant={props.variant} src={props.src} />
      <Crd.Body>
        <Crd.Title>{props.title}</Crd.Title>
        <Crd.Text>
          {props.body}
        </Crd.Text>
        {children}
      </Crd.Body>
    </Crd>
  );
};