import { useContext } from 'react';

import {
CheckoutCoffeeContainer,
CheckoutCoffeeCard,
CheckoutCoffeePrices,
CheckoutCoffeeTotalItems,
CheckoutCoffeeDelivery,
CheckoutCoffeeTotal,
CheckoutCoffeeConfirmButton,
} from './style'

import { ProductCard } from '../productCard';
import { CartContext } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../../contexts/UserDataContext';

export function CheckoutCoffee() {
  const { cart } = useContext(CartContext)
  const { CEP, Road, Number, Neighborhood, City, UF, formOfPayment } = useContext(UserDataContext)
  const navigate = useNavigate();

  const totalItems = cart.reduce((initialValue, cart) => (initialValue + cart.price!) * cart.quantity, 0);

  const total = totalItems + 3.50

  function handleConfirmOrder() {
    if (cart.length === 0) {
      return alert('❌ Adicione itens ao carrinho para confirmar o pedido!')
    }

    if ( !CEP || !Road || !Number || !Neighborhood || !City || !UF || !formOfPayment ) {
      return alert('❌ Por favor preencha todos os seus dados para confirmar o pedido!')
    }

    return navigate('/success');  
  }


  return (
    <CheckoutCoffeeContainer>
        <h3>Cafés selecionados</h3>
        <CheckoutCoffeeCard>
          <ProductCard />

          <CheckoutCoffeePrices>
            <CheckoutCoffeeTotalItems>
                <p>Total de items</p>
                <p>R$ { totalItems.toFixed(2) }</p>
            </CheckoutCoffeeTotalItems>

            <CheckoutCoffeeDelivery>
                <p>Entrega</p>
                <p>R$ 3,50</p>
            </CheckoutCoffeeDelivery>

            <CheckoutCoffeeTotal>
                <strong>Total</strong>
                <strong>R$ { total.toFixed(2) }</strong>
            </CheckoutCoffeeTotal>
          </CheckoutCoffeePrices>

          <CheckoutCoffeeConfirmButton onClick={ handleConfirmOrder } >
            CONFIRMAR PEDIDO
          </CheckoutCoffeeConfirmButton>
        </CheckoutCoffeeCard>
    </CheckoutCoffeeContainer>
  )
}