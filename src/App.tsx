import React, { useEffect, useState } from 'react';
import { Skeleton } from '@mui/material';
import './App.css';

import { Card, CardContent, CardFooter, CardHeader, Chip } from './styles';
import ProductItem from './components/ProductItem';
import listOne from './mock/products-list-one.json';
import listTwo from './mock/products-list-two.json';
import Button from 'components/Button';

function App() {
  const productsData = listTwo;
  const [loading, setLoading] = useState(true);
  const totalPrice = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
    productsData.totalizers[0].value / 100
  );

  useEffect(() => {
    // Fake api response delay
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="content">
      <Card>
        <CardHeader>
          <h3>Meu carrinho</h3>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Skeleton variant="rectangular" height={100} />
              <Skeleton variant="rectangular" height={100} />
            </div>
          ) : (
            productsData.items.map((product) => <ProductItem key={product.id} item={product} />)
          )}
        </CardContent>
        {loading ? (
          <CardFooter>
            <Skeleton variant="text" />
          </CardFooter>
        ) : (
          <CardFooter>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontWeight: 700,
                fontSize: '1.17em',
                gap: '16px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <span>Total</span>
                <span>{totalPrice}</span>
              </div>
              {productsData.totalizers[0].value / 100 > 10 && (
                <Chip style={{ width: 'fit-content' }}>Parabéns, sua compra tem frete gratis !</Chip>
              )}
            </div>
          </CardFooter>
        )}

        <CardFooter>
          <Button disabled={loading}>Finalizar compra</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;
