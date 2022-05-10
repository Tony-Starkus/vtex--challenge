import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { Card, CardContent, CardHeader } from './styles';
import ProductItem from './components/ProductItem';

function App() {
  const [productsList, setProductsList] = useState([
    {
      id: 1,
      name: 'Trufa de morango',
      price: 1.23,
    },
    {
      id: 2,
      name: 'Trufa de morango',
      price: 1.23,
    },
  ]);

  return (
    <div className="content">
      <Card>
        <CardHeader>
          <h3>Meu carrinho</h3>
        </CardHeader>
        <CardContent>
          {productsList.map((product) => (
            <ProductItem />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
