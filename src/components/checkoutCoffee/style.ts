import styled from 'styled-components'

export const CheckoutCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;

  h3 {
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme.colors['base-subtitle']}
  }
`

export const CheckoutCoffeeCard = styled.div`
  display: flex;
  flex-direction: column;

  width: 448px;

  border-radius: 6px 52px;
  padding: 40px;
  background: ${(props) => props.theme.colors['base-card']};

  gap: 32px;
`

export const CheckoutCoffeePrices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const CheckoutCoffeeTotalItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 15px;

  color: ${(props) => props.theme.colors['base-text']};
`

export const CheckoutCoffeeDelivery = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 15px;

  color: ${(props) => props.theme.colors['base-text']};
`

export const CheckoutCoffeeTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 20px;
  font-weight: 8s00;

  color: ${(props) => props.theme.colors['base-subtitle']};
`

export const CheckoutCoffeeConfirmButton = styled.button`
  background: ${(props) => props.theme.colors['yellow']};
  color: ${(props) => props.theme.colors['white']};
  padding: 12px 8px;
  border: none;
  border-radius: 6px;

  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;

  &:hover {
    background: ${(props) => props.theme.colors['yellow-dark']};
  }
`