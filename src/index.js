import React from 'react';
import { ColorModeScript,theme} from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import ColorModeSwitcher from './ColorModeSwitcher'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ColorModeScript theme={theme}  />
  <ChakraProvider>
  <ColorModeSwitcher />
    <App />
    </ChakraProvider>
  </React.StrictMode>
);

