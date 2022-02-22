import React, { useState } from 'react';
import OrderList from './components/OrderList';
import Summary from './components/Summary';
import './App.css';

const products = [
  {
    id: 1,
    name: '咖啡色 T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  // {
  //   id: 2,
  //   name: '白色 T-shirt',
  //   categroy: 'Shirt',
  //   image: 'https://i.imgur.com/ba3tvGm.jpg',
  //   price: 600,
  // },
  // {
  //   id: 3,
  //   name: '黑色 T-shirt',
  //   categroy: 'Shirt',
  //   image: 'https://i.imgur.com/pHQ3xT3.jpg',
  //   price: 400,
  // },
];

function App() {
  const [count, setCount] = useState(1);
  return (
    <div className="card">
      <div className="row">
        <OrderList products={products} count={count} setCount={setCount} />
        <Summary totalNumber={count} totalPrice={count * products[0].price} />
      </div>
    </div>
  );
}

export default App;
