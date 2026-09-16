import React from 'react';
import { useStore } from 'shared/store';

const randomColor = () =>
  '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');

const ColorButton = () => {
  const count = useStore((s) => s.count);
  const color = useStore((s) => s.color);
  const setColor = useStore((s) => s.setColor);

  return (
    <button style={{ backgroundColor: color }} onClick={() => setColor(randomColor())}>
      Count: {count}
    </button>
  );
};

export default ColorButton;
