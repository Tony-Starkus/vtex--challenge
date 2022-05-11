import React from 'react';
import { ButtonContainer } from './styles';

interface ButtonProps {
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

export default Button;
