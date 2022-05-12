import React from 'react';
import { ButtonContainer } from './styles';

interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, disabled }) => {
  return <ButtonContainer disabled={disabled}>{children}</ButtonContainer>;
};

export default Button;
