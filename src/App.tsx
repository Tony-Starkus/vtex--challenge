import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { Card, CardContent, CardHeader } from './styles';
import ProductItem from './components/ProductItem';
import listOne from './mock/products-list-one.json';

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
            <ProductItem item={product} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
