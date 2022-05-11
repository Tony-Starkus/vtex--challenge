import React from 'react';
import {
  Container,
  ProductImageContainer,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductSellingPrice,
} from './styles';

interface ProductItemProps {
  item: {
    name: string;
    imageUrl: string;
    price: number;
    sellingPrice: number;
  };
}

const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
  const formatedPrice = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(item.price / 100);
  const formatedSellingPrice = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
    item.sellingPrice / 100
  );

  return (
    <Container>
      <ProductImageContainer>
        <img style={{ height: '100%' }} src={item.imageUrl} />
      </ProductImageContainer>
      <ProductInfo>
        <ProductName>{item.name}</ProductName>
        <ProductPrice>{formatedPrice}</ProductPrice>
        <ProductSellingPrice>{formatedSellingPrice}</ProductSellingPrice>
      </ProductInfo>
    </Container>
  );
};

export default ProductItem;
