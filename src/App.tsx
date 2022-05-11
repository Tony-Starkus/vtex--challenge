import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { Card, CardContent, CardFooter, CardHeader } from './styles';
import ProductItem from './components/ProductItem';
import listOne from './mock/products-list-one.json';
import Button from 'components/Button';

function App() {
  const [productsData, setProductsData] = useState(listOne);

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
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '1.17em' }}>
            <span>Total</span>
            <span>
              {new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
                productsData.totalizers[0].value / 100
              )}
            </span>
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
