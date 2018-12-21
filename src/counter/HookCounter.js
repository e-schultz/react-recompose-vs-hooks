import React, { useState } from 'react';

export const useCounter = () => {
  const [counter, setCounter] = useState(0);
  const reset = () => setCounter(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  return { counter, setCounter, reset, increment, decrement };
};

export const HookCounter = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <section>
      {counter} <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </section>
  );
};
