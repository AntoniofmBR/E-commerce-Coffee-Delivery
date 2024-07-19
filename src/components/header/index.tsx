import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'

import {
HeaderContainer,
HeaderActions,
HeaderLocation,
HeaderShopping,
HeaderShoppingNotification,
} from './style'
import logoCoffeeDelivery from '../../assets/logo.svg'
import { CartContext } from '../../contexts/CartContext'
import { UserDataContext } from '../../contexts/UserDataContext'

export function Header() {
  const { cart } = useContext(CartContext)
  const { City, UF } = useContext(UserDataContext)


  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffeeDelivery} alt="Logo" />
      </NavLink>

      <HeaderActions>
          <HeaderLocation>
            <MapPin size={22} weight='fill' />
            <p>{ City ? City + ',' : 'Insira o seu endereço!' } { UF ? UF : '' }</p>
          </HeaderLocation>

          <HeaderShopping href='/checkout'  >
            <ShoppingCart size={22} weight='fill' />
          </HeaderShopping>
          { cart.length > 0 ? (
            <HeaderShoppingNotification>
              { cart.length }
            </HeaderShoppingNotification>
          ) : '' }
      </HeaderActions>
    </HeaderContainer>
  )
}