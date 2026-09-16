import React from 'react';
import { createRoot } from 'react-dom/client';
import CounterButton from './CounterButton';

const el = document.querySelector('#app1');
if (el) {
  createRoot(el).render(<CounterButton />);
}
