import styled from 'styled-components'

export const CheckoutAddressAndPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;

  h3 {
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme.colors['base-subtitle']}
  }
`

export const CheckoutAddress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 370px;
  width: 640px;

  border-radius: 6px;
  padding: 40px;
  background: ${(props) => props.theme.colors['base-card']};

  gap: 32px;
`

export const CheckoutAddressTitle = styled.div`
  display: flex;

  gap: 8px;

  font-family: 'Roboto', sans-serif;
  
  h4 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-weight: 500;
  }

  p {
    color: ${(props) => props.theme.colors['base-text']};
    font-weight: 400;
    font-size: 13px;
  }
`

export const CheckoutAddressForm = styled.form`
  display: flex;
  flex-direction: column;

  height: 215px;
  gap: 16px;

  div {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .CEP {
    width: 33.5%;
  }

  .complement {
    width: 100%;
  }

  .UF {
    width: 90%;
  }
`

export const CheckoutPayment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 200px;
  width: 640px;

  border-radius: 6px;
  padding: 40px;
  background: ${(props) => props.theme.colors['base-card']};

  gap: 32px;
`

export const CheckoutPaymentTitle = styled.div`
  display: flex;

  gap: 8px;

  font-family: 'Roboto', sans-serif;

  h4 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-weight: 500;
  }

  p {
    color: ${(props) => props.theme.colors['base-text']};
    font-weight: 400;
    font-size: 13px;
  }
`

export const CheckoutButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`

export const CheckoutButton = styled.button`
  display: flex;
  align-items: center;

  padding: 16px;
  gap: 12px;

  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme.colors['base-button']};

  h4 {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: ${(props) => props.theme.colors['base-text']};
  }

  &:hover {
    background: ${(props) => props.theme.colors['base-hover']};
  }

  &:focus {
    background: ${(props) => props.theme.colors['purple-light']};
    border: 1px solid ${(props) => props.theme.colors['purple']};
  }
`