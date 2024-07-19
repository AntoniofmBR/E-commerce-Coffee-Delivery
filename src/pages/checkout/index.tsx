import {
CheckoutCards,
} from './style'

import { Header } from '../../components/header';
import { CheckoutCoffee } from '../../components/checkoutCoffee';
import { CheckoutAddressAndPayment } from '../../components/checkoutAddressAndPayment';

export function Checkout() {
  return (
    <div>
      <Header />
      <CheckoutCards>
        <CheckoutAddressAndPayment />
        <CheckoutCoffee />
      </CheckoutCards>
    </div>
  )
}