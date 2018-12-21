import React from 'react';
import { compose, withState, withHandlers } from 'recompose';

const addCounting = compose(
  withState('counter', 'setCounter', 0),
  withHandlers({
    increment: ({ setCounter }) => () => setCounter(n => n + 1),
    decrement: ({ setCounter }) => () => setCounter(n => n - 1),
    reset: ({ setCounter }) => () => setCounter(0)
  })
);

const RecomposeCounter = addCounting(
  ({ counter, increment, decrement, reset }) => {
    return (
      <section>
        {counter} <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>reset</button>
      </section>
    );
  }
);

RecomposeCounter.displayName = 'RecomposeCounter';
export { RecomposeCounter };
