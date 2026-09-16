import React from 'react';
import { createRoot } from 'react-dom/client';
import ColorButton from './ColorButton';

const el = document.querySelector('#app2');
if (el) {
  createRoot(el).render(<ColorButton />);
}
