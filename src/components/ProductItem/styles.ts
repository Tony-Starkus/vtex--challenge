import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 16px;
`;

export const ProductImageContainer = styled.div`
  border: 1px solid #c4c4c4;
  width: 150px;
  height: 150px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProductName = styled.span`
  font-weight: 700;
  padding-top: 10px;
  padding-bottom: 4px;
`;

export const ProductPrice = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #707070ab;
`;

export const ProductSellingPrice = styled.span`
  font-weight: 600;
`;
