import React from 'react';

// import { Container } from './styles';

const Button: React.FC = ({ label, onClick }) => {
  return (
    <button onClick={onClick}><b>{label}</b></button>
  );
}

export default Button;