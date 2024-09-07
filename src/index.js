import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

import { ThirdwebProvider } from '@thirdweb-dev/react';
import { ChainId } from '@thirdweb-dev/sdk';

const activeChainId = ChainId.Polygon;

// Por último, envolva o App com o thirdweb provider.
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={activeChainId}>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
);