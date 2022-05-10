import React from 'react';
import { Container, ProductImageContainer, ProductInfo, ProductName } from './styles';

interface ProductItemProps {
  item: {
    name: string;
    imageUrl: string;
  };
}

const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
  return (
    <Container>
      <ProductImageContainer>
        <img style={{ height: '100%' }} src={item.imageUrl} />
      </ProductImageContainer>
      <ProductInfo>
        <ProductName>{item.name}</ProductName>
      </ProductInfo>
    </Container>
  );
};

export default ProductItem;
