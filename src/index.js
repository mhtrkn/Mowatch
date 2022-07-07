import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <Router>
      <App />
    </Router>
);