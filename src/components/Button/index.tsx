import React from 'react';

// import { Container } from './styles';

const Button: React.FC = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>{label}</button>
  );
}

export default Button;