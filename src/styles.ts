import styled from 'styled-components';

export const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.2);
  min-width: 400px;
  max-width: 600px;
`;

export const CardHeader = styled.div`
  border-bottom: 1px solid #c4c4c4;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 26px;
`;

export const CardFooter = styled.div`
  border-top: 1px solid #c4c4c4;
  padding: 26px;
`;

export const Chip = styled.span`
  padding: 8px 16px;
  background-color: #c7ffa6;
  border-radius: 25px;
  color: #217b0a;
`;
