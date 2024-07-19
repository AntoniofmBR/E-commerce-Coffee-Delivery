import { ThemeProvider } from 'styled-components'; 

import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { CartContextProvider } from './contexts/CartContext';
import { UserDataContextProvider } from './contexts/UserDataContext';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <CartContextProvider>
        <UserDataContextProvider>
          <Router />
        </UserDataContextProvider>
      </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}