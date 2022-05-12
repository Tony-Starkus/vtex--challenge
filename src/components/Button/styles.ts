import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background-color: #3b74f2;
  color: #fff;
  display: block;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1.17em;
  font-weight: 700;
  padding: 12px 0px;

  &:hover {
    cursor: pointer;
    filter: brightness(1.05);
  }

  &:disabled {
    cursor: default;
    filter: brightness(1);
    opacity: 0.5;
  }
`;
