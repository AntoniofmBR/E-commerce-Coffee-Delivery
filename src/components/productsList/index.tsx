import express from '../../assets/coffees/expresso.png'
import express_american from '../../assets/coffees/americano.png'
import express_creamy from '../../assets/coffees/expresso_cremoso.png'
import express_cold from '../../assets/coffees/café_gelado.png'
import coffee_wih_milk from '../../assets/coffees/café_com_leite.png'
import latte from '../../assets/coffees/latte.png'
import cappuccino from '../../assets/coffees/capuccino.png'
import macchiato from '../../assets/coffees/macchiato.png'
import mocaccino from '../../assets/coffees/mochaccino.png'
import chocolate from '../../assets/coffees/chocolate_quente.png'
import cuban from '../../assets/coffees/cubano.png'
import hawaiian from '../../assets/coffees/havaiano.png'
import arabic from '../../assets/coffees/árabe.png'
import irish from '../../assets/coffees/irlandês.png'

import { Product } from '../product/index'

import { ProductsListContainer, ProductsListComponents } from './style'

export function ProductsList() {
  const products = [
    {
      id: 1,
      src: express,
      alt: 'Expresso Tradicional',
      productName: 'Expresso Tradicional',
      productTags: ['TRADICIONAL'],
      productDescription: 'O tradicional café feito com água quente e grãos moídos',
      quantity: 0,
    },
    {
      id: 2,
      src: express_american,
      alt: 'Expresso Americano',
      productName: 'Expresso Americano',
      productTags: ['TRADICIONAL'],
      productDescription: 'Expresso diluído, menos intenso que o tradicional',
      quantity: 0,
    },
    {
      id: 3,
      src: express_creamy,
      alt: 'Expresso Cremoso',
      productName: 'Expresso Cremoso',
      productTags: ['TRADICIONAL'],
      productDescription: 'Café expresso tradicional com espuma cremosa',
      quantity: 0,
    },
    {
      id: 4,
      src: express_cold,
      alt: 'Expresso Gelado',
      productName: 'Expresso Gelado',
      productTags: ['TRADICIONAL', 'GELADO'],
      productDescription: 'Bebida preparada com café expresso e cubos de gelo',
      quantity: 0,
    },
    {
      id: 5,
      src: coffee_wih_milk,
      alt: 'Café com leite',
      productName: 'Café com leite',
      productTags: ['TRADICIONAL', 'COM LEITE'],
      productDescription: 'Meio a meio de expresso tradicional com leite vaporizado',
      quantity: 0,
    },
    {
      id: 6,
      src: latte,
      alt: 'Latte',
      productName: 'Latte',
      productTags: ['TRADICIONAL', 'COM LEITE'],
      productDescription: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      quantity: 0,
    },
    {
      id: 7,
      src: cappuccino,
      alt: 'Capuccino',
      productName: 'Capuccino',
      productTags: ['TRADICIONAL', 'COM LEITE'],
      productDescription: 'Bebida com canela feita de doses iguais de café, leite e espuma',
      quantity: 0,
    },
    {
      id: 8,
      src: macchiato,
      alt: 'Macchiato',
      productName: 'Macchiato',
      productTags: ['TRADICIONAL', 'COM LEITE'],
      productDescription: 'Café expresso misturado com um pouco de leite quente e espuma',
      quantity: 0,
    },
    {
      id: 9,
      src: mocaccino,
      alt: 'Mocaccino',
      productName: 'Mocaccino',
      productTags: ['TRADICIONAL', 'COM LEITE'],
      productDescription: 'Café expresso com calda de chocolate, pouco leite e espuma',
      quantity: 0,
    },
    {
      id: 10,
      src: chocolate,
      alt: 'Chocolate',
      productName: 'Chocolate Quente',
      productTags: ['ESPECIAL', 'COM LEITE'],
      productDescription: 'Bebida feita com chocolate dissolvido no leite quente e café',
      quantity: 0,
    },
    {
      id: 11,
      src: cuban,
      alt: 'Cubano',
      productName: 'Cubano',
      productTags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
      productDescription: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
      quantity: 0,
    },
    {
      id: 12,
      src: hawaiian,
      alt: 'Havaiano',
      productName: 'Havaiano',
      productTags: ['ESPECIAL'],
      productDescription: 'Bebida adocicada com café e leite de coco',
      quantity: 0,
    },
    {
      id: 13,
      src: arabic,
      alt: 'Árabe',
      productName: 'Árabe',
      productTags: ['ESPECIAL'],
      productDescription: 'Bebida preparada com grãos de café árabe e especiarias',
      quantity: 0,
    },
    {
      id: 14,
      src: irish,
      alt: 'Irlandês',
      productName: 'Irlandês',
      productTags: ['ESPECIAL', 'ALCOÓLICO'],
      productDescription: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      quantity: 0,
    },
  ];
  

  return (
    <ProductsListContainer>
      <h1>Nossos cafés</h1>
      <ProductsListComponents>
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            src={product.src}
            alt={product.alt}
            productName={product.productName}
            productTags={product.productTags}
            productDescription={product.productDescription}
            quantity={product.quantity}
          />
        ))}
      </ProductsListComponents>
    </ProductsListContainer>
  )
}