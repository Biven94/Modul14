import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const logCounterComponent = () => {
  const counterHtmlString = `<div><p>Current Count: ${count}</p></div>`;
    console.log(counterHtmlString);
  };

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Увеличить</button>
      <button onClick={decrement}>Уменьшить</button>
      <button onClick={logCounterComponent}>Отобразить в консоли</button>
    </div>
  );
};

export default Counter;

