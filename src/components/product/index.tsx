import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react';
import { useContext, useState } from 'react';

import { 
  ProductContainer,
  ProductTags,
  ProductTag,
  ProductTitles,
  ProductFooter,
  ProductPrice,
  ProductQuantity,
  ProductBuy,
} from './style';
import { CartContext } from '../../contexts/CartContext';

export type ProductProps = {
  id: number;
  src: string;
  alt: string;
  productName: string;
  productTags: string[];
  productDescription: string;
  price?: number;
  quantity: number;
};

export function Product({ 
  id,
  src,
  alt,
  productName,
  productTags,
  productDescription,
  price = 9.90,
}: ProductProps) {

  const { addProductToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  function increaseProductQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function decreaseProductQuantity() {
    if (quantity === 0) {
      return 
    }

    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 1));
  }

  function handleAddToCart() {
    addProductToCart({ id, src, alt, productName, productTags, productDescription, price, quantity });
    setQuantity(0)
  }

  return (
    <ProductContainer>
        <img src={src} alt={alt} />

        <ProductTags>
          {productTags.map((tagName) => 
            <ProductTag key={tagName}>
              {tagName}
            </ProductTag>
          )}
        </ProductTags>

        <ProductTitles>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
        </ProductTitles>

        <ProductFooter>
          <ProductPrice>
            <p>R$</p>
            <strong>{price.toFixed(2)}</strong>
          </ProductPrice>

          <ProductQuantity>
            <div>
              <button onClick={decreaseProductQuantity}>
                <Minus size={14} weight='bold' color='#8047F8' />
              </button>
              <span>{quantity}</span>
              <button onClick={increaseProductQuantity}>
                <Plus size={14} weight='bold' color='#8047F8' />
              </button>
            </div>
            <ProductBuy onClick={handleAddToCart}>
              <ShoppingCart size={22} weight='fill' color='#F3F2F2' />
            </ProductBuy>
          </ProductQuantity>
        </ProductFooter>
    </ProductContainer>
  );
}
