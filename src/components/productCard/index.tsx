import { useContext } from 'react';
import { Minus, Plus, Trash } from '@phosphor-icons/react';
import {
  ProductCardContainer,
  ProductCardTitle,
  ProductCardButtons,
  ProductCardButtonPlusAndMinus,
  ProductCardQuantityButton,
  ProductCardRemoveButton,
  ProductCardPrice,
} from './style';
import { CartContext } from '../../contexts/CartContext';
import { ProductProps } from '../product';

export function ProductCard() {
  const { cart, removeFromCart, increaseProductQuantity, decreaseProductQuantity } = useContext(CartContext)

  return (
    <>
      { cart.map((product: ProductProps) => (
        <ProductCardContainer key={product.id}>
          <img src={product.src} alt={product.alt} />
          <section>
            <ProductCardTitle>{product.productName}</ProductCardTitle>
            <ProductCardButtons>
              <ProductCardQuantityButton>
                <ProductCardButtonPlusAndMinus onClick={() => decreaseProductQuantity(product.id)} >
                    <Minus size={14} color='#8047F8' />
                </ProductCardButtonPlusAndMinus>
                <p>{product.quantity}</p>
                <ProductCardButtonPlusAndMinus onClick={() => increaseProductQuantity(product.id)} >
                    <Plus size={14} color='#8047F8' />
                </ProductCardButtonPlusAndMinus>
              </ProductCardQuantityButton>

              <ProductCardRemoveButton onClick={() => removeFromCart(product.id)}>
                <Trash size={16} color='#8047F8' />
                <p>REMOVER</p>
              </ProductCardRemoveButton>
            </ProductCardButtons>
          </section>
          <ProductCardPrice>
            <p>R$ {product.price!.toFixed(2)}</p>
          </ProductCardPrice>
        </ProductCardContainer>
      )) }
    </>
  );
}
