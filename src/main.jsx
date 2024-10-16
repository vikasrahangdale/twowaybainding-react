import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Wrapper from '../components/Wrapper';

const root = createRoot(document.getElementById('root'));

root.render(
 
    <Wrapper>
      <App />
    </Wrapper>

);
