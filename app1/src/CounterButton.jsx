import React from 'react';
import { useStore } from 'shared/store';

const CounterButton = () => {
  const count = useStore((s) => s.count);
  const color = useStore((s) => s.color);
  const increment = useStore((s) => s.increment);

  return (
    <button style={{ backgroundColor: color }} onClick={increment}>
      Count: {count}
    </button>
  );
};

export default CounterButton;
