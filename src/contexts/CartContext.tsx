import { createContext, ReactNode, useEffect, useState } from 'react';
import { ProductProps } from '../components/product';

type CartContextType = {
  cart: ProductProps[];
  addProductToCart: (product: ProductProps) => void;
  removeFromCart: (id: number) => void;
  increaseProductQuantity: (id: number) => void;
  decreaseProductQuantity: (id: number) => void;
};

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<ProductProps[]>(() => {
    const savedCart = localStorage.getItem('@CoffeeDelivery:cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('@CoffeeDelivery:cart', JSON.stringify(cart));
  }, [cart]);


  function addProductToCart(product: ProductProps) {
    if (product.quantity === 0) {
      return alert('❌ Não é possível adicionar itens vazios ao carrinho')
    }

    setCart(currentItems => {
      const existingProduct = currentItems.find(item => item.id === product.id);

      if (existingProduct) {
        return currentItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
        );
      } else {
        return [...currentItems, { ...product, quantity: product.quantity }];
      }
    })

    return alert('✔️ Item adicionado ao carrinho com sucesso')
  }

  function removeFromCart(id: number) {
    setCart(currentItems => currentItems.filter(item => item.id !== id));
  }

  function increaseProductQuantity(id: number) {
    setCart(currentItems =>
      currentItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseProductQuantity(id: number) {
    setCart(currentItems =>
      currentItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      ).filter(item => item.quantity > 0)
    );
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeFromCart,
        increaseProductQuantity,
        decreaseProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
