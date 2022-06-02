import React from 'react';
import {Button as Bttn} from 'react-bootstrap';

export const Button = (props) => {
  const children=props.children
  return (
    <Bttn variant={props.variant} onClick={props.onClick}>{children}</Bttn>
  )
} 