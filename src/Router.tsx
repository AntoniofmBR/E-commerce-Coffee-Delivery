import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/home/index';
import { Checkout } from './pages/checkout/index';
import { SuccessPage } from './pages/successPage';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/checkout' element={ <Checkout /> } />
      <Route path='/success' element={ <SuccessPage /> } />
    </Routes>
  )
}