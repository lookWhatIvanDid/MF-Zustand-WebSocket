import React from 'react';
import { useStore } from 'shared/store';

const CombinedButton = () => {
  const count = useStore((s) => s.count);
  const color = useStore((s) => s.color);

  return (
    <button style={{ backgroundColor: color }}>
      Count: {count}
    </button>
  );
};

export default CombinedButton;
