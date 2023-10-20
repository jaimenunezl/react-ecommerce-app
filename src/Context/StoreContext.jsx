import { createContext, useState, useEffect } from 'react';

const StoreContext = createContext();

function StoreProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const [productActive, setProductActive] = useState();
  const [cartItems, setCartItems] = useState([]);

  const handleProductDetailVisibility = (status) => {
    setIsProductDetailOpen(status);
  };

  const handleCheckoutVisibility = (status) => {
    setIsCheckoutSideMenuOpen(status);
  };

  const handleProductActive = (product) => {
    setProductActive(product);
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (id) => {
    const itemsFiltered = cartItems.filter(({ id: itemId }) => itemId !== id);
    setCartItems(itemsFiltered);
  };

  useEffect(() => {
    const items = cartItems.length;
    setCartCount(items);
  }, [cartItems]);

  return (
    <StoreContext.Provider
      value={{
        cartCount,
        cartItems,
        isCheckoutSideMenuOpen,
        isProductDetailOpen,
        productActive,
        handleProductActive,
        handleAddToCart,
        handleProductDetailVisibility,
        handleCheckoutVisibility,
        handleRemoveFromCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export { StoreProvider, StoreContext };
