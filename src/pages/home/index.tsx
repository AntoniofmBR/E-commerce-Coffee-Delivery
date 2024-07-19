import { HomeContainer } from './style'

import { Header } from '../../components/header';
import { Intro } from '../../components/intro';
import { ProductsList } from '../../components/productsList';

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Intro />
      <ProductsList />
    </HomeContainer>
  )
}