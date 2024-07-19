import React, { useContext } from 'react';
import { MapPinLine, CurrencyDollar, CreditCard, Money, Bank } from '@phosphor-icons/react';

import {
  CheckoutAddressAndPaymentContainer,
  CheckoutAddress,
  CheckoutAddressTitle,
  CheckoutAddressForm,
  CheckoutPayment,
  CheckoutPaymentTitle,
  CheckoutButtons,
  CheckoutButton,
} from './style';

import { Input } from '../input';
import { UserDataContext } from '../../contexts/UserDataContext';

export function CheckoutAddressAndPayment() {
  const { CEP, setCEP, Road, setRoad, Number, setNumber, Complement, setComplement, Neighborhood, setNeighborhood, City, setCity, UF, setUF, setFormOfPayment } = useContext(UserDataContext);

  function handleButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    const buttonText = event.currentTarget.querySelector('h4')?.textContent;
    if (!buttonText) {
      return;
    }

    setFormOfPayment(buttonText)
  }

  return (
    <CheckoutAddressAndPaymentContainer>
      <h3>Complete o seu pedido</h3>
      <CheckoutAddress>
        <CheckoutAddressTitle>
          <MapPinLine size={22} color='#C47F17' />
          <section>
            <h4>Endereço de Entrega</h4>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </section>
        </CheckoutAddressTitle>
        <CheckoutAddressForm action="">
          <Input
            type="text"
            placeholder='CEP'
            className='CEP'
            required
            maxLength={8}
            value={CEP}
            onChange={(event) => setCEP(event.target.value)}
          />
          <Input
            type="text"
            placeholder='Rua'
            required
            value={Road}
            onChange={(event) => setRoad(event.target.value)}
          />
          <div>
            <Input
              type="text"
              placeholder='Número'
              required
              value={Number}
              onChange={(event) => setNumber(event.target.value)}
            />
            <Input
              type="text"
              placeholder='Complemento'
              className='complement'
              value={Complement}
              onChange={(event) => setComplement!(event.target.value)}
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder='Bairro'
              required
              value={Neighborhood}
              onChange={(event) => setNeighborhood(event.target.value)}
            />
            <Input
              type="text"
              placeholder='Cidade'
              required
              value={City}
              onChange={(event) => setCity(event.target.value)}
            />
            <Input
              type="text"
              placeholder='UF'
              className='UF'
              required
              maxLength={2}
              value={UF}
              onChange={(event) => setUF(event.target.value)}
            />
          </div>
        </CheckoutAddressForm>
      </CheckoutAddress>

      <CheckoutPayment>
        <CheckoutPaymentTitle>
          <CurrencyDollar size={22} color='#8047F8' />
          <section>
            <h4>Pagamento</h4>
            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          </section>
        </CheckoutPaymentTitle>
        <CheckoutButtons>
          <CheckoutButton onClick={handleButtonClick}>
            <CreditCard size={16} weight='regular' color='#8047F8' />
            <h4>CARTÃO DE CRÉDITO</h4>
          </CheckoutButton>
        
          <CheckoutButton onClick={handleButtonClick}>
            <Money size={16} weight='regular' color='#8047F8' />
            <h4>CARTÃO DE DÉBITO</h4>
          </CheckoutButton>
        
          <CheckoutButton onClick={handleButtonClick}>
            <Bank size={16} weight='regular' color='#8047F8' />
            <h4>DINHEIRO</h4>
          </CheckoutButton>
        </CheckoutButtons>
      </CheckoutPayment>
    </CheckoutAddressAndPaymentContainer>
  );
}
