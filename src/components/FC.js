import { useState } from 'react';

function FC() {
  const [total, setTotal] = useState(0);
  const checkOutPut = (value) => {
    if (value > 0) {
      return <p>總數大於0</p>;
    } else {
      return <p></p>;
    }
  };

  return (
    <>
      <h1 onClick={() => setTotal(total + 1)}>{total}</h1>
      {total > 0 ? <p>總數大於0</p> : ''}
      {checkOutPut(total)}
    </>
  );
}

export default FC;
