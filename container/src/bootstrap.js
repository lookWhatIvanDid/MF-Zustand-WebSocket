import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const el = document.querySelector('#app1-block');
if (el) {
  createRoot(el).render(<App />);
}
