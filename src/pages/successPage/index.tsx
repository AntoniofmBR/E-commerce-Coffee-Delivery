import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import illustration from '../../assets/illustration.png'

import {
  SuccessPageContainer,
  SuccessPageOrderInfo,
  SuccessPageBorder,
  SuccessPageUserData,
  SuccessPageUserDetails,
  SuccessPageMapPinIcon,
  SuccessPageTimerIcon,
  SuccessPageDollarIcon,
} from './style'
import { Header } from '../../components/header'
import { useContext } from 'react'
import { UserDataContext } from '../../contexts/UserDataContext'

export function SuccessPage() {
  const { Road, Number, Complement, Neighborhood, City, UF, formOfPayment } = useContext(UserDataContext)

  return (
    <div>
      <Header />
      <SuccessPageContainer>
        <SuccessPageOrderInfo>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>

          <SuccessPageBorder>
            <SuccessPageUserData>
              <SuccessPageUserDetails>
                <SuccessPageMapPinIcon>
                  <MapPin weight='fill' size={16} color='#FAFAFA' />
                </SuccessPageMapPinIcon>
                <section>
                  <h3>Entrega em <strong>{ Road }, { Number } { Complement ? Complement : '' } </strong></h3>
                  <span>{ City } - { Neighborhood }, { UF }</span>
                </section>
              </SuccessPageUserDetails>

              <SuccessPageUserDetails>
                <SuccessPageTimerIcon>
                  <Timer weight='fill' size={16} color='#FAFAFA' />
                </SuccessPageTimerIcon>
                <section>
                  <h3>Previsão de entrega</h3>
                  <span> <strong> 20 min - 30 min </strong> </span>
                </section>
              </SuccessPageUserDetails>

              <SuccessPageUserDetails>
                <SuccessPageDollarIcon>
                  <CurrencyDollar weight='regular' size={16} color='#FAFAFA' />
                </SuccessPageDollarIcon>
                <section>
                  <h3>Pagamento na entrega</h3>
                  <span> <strong>{ formOfPayment }</strong> </span>
                </section>
              </SuccessPageUserDetails>

            </SuccessPageUserData>
          </SuccessPageBorder>
        </SuccessPageOrderInfo>

        <img src={ illustration } alt='illustration'  id='illustration' />
      </SuccessPageContainer>
    </div>
  )
}