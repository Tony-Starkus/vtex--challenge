import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { Card, CardContent, CardFooter, CardHeader, Tooltip } from './styles';
import ProductItem from './components/ProductItem';
import listOne from './mock/products-list-one.json';
import listTwo from './mock/products-list-two.json';
import Button from 'components/Button';

function App() {
  const [productsData, setProductsData] = useState(listTwo);
  const totalPrice = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
    productsData.totalizers[0].value / 100
  );

  return (
    <div className="content">
      <Card>
        <CardHeader>
          <h3>Meu carrinho</h3>
        </CardHeader>
        <CardContent>
          {productsData.items.map((product) => (
            <ProductItem key={product.id} item={product} />
          ))}
        </CardContent>
        <CardFooter>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              fontWeight: 700,
              fontSize: '1.17em',
              gap: '16px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Total</span>
              <span>{totalPrice}</span>
            </div>
            {productsData.totalizers[0].value / 100 > 10 && <Tooltip>Parabéns, sua compra tem frete gratis !</Tooltip>}
          </div>
        </CardFooter>
        <CardFooter>
          <Button>Finalizar compra</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;
