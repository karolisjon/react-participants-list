import { Container } from '@mui/material';
import React from 'react';

const CustomContainer = ({ children }) => {
  return (
    <Container maxWidth="lg">{children}</Container>
  )
}

export default CustomContainer;
