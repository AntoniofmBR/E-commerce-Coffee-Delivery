import {
  IntroContainer,
  IntroTexts,
  IntroTitle,
  IntroTopics,
  IntroTropicShopping,
  IntroTopicPackage,
  IntroTropicTimer,
  IntroTropicCoffee,
} from './style'

import introImg from '../../assets/intro.png'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

export function Intro() {
  return (
    <IntroContainer>
      <IntroTexts>
        <IntroTitle>
          <h1>Encontre o café perfeito <br /> para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe o seu café onde estiver, a <br /> qualquer hora </p>
        </IntroTitle>

        <IntroTopics>
            <div>
              <IntroTropicShopping>
                <div>
                  <ShoppingCart size={16} weight='fill' color='#FAFAFA'  />
                </div>
                <p>Compra simples e segura</p>
              </IntroTropicShopping>

              <IntroTopicPackage>
                <div>
                  <Package size={16} weight='fill' color='#FAFAFA'  />
                </div>
                <p>Embalagem mantém o café intacto</p>
              </IntroTopicPackage>
            </div>

            <div>
              <IntroTropicTimer>
                <div>
                  <Timer size={16} weight='fill' color='#FAFAFA'  />
                </div>
                  <p>Entrega rápida e rastreada</p>
              </IntroTropicTimer>

              <IntroTropicCoffee>
                <div>
                  <Coffee size={16} weight='fill' color='#FAFAFA'  />
                </div>
                  <p>O café chega fresquinho até você</p>
              </IntroTropicCoffee>
            </div>
        </IntroTopics>
      </IntroTexts>

      <img src={ introImg } alt="Intro image" />

    </IntroContainer>
  )
}