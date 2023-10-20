import { createContext, useState, useEffect } from 'react';

import { calculateTotal } from '../Utils';
import { useLocalStorage } from '../Hooks/LocalStorage.hook';

const StoreContext = createContext();
const ORDER_KEY = 'orders';

function StoreProvider({ children }) {
  const { item: ordersSaved, saveItem: saveOrders } = useLocalStorage(
    ORDER_KEY,
    []
  );

  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const [productActive, setProductActive] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState(ordersSaved);

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

  const handleSaveOrder = (order) => {
    setOrders([...orders, order]);
    saveOrders([...orders, order]);
  };

  useEffect(() => {
    const items = cartItems.length;
    setCartCount(items);

    const total = calculateTotal(cartItems);
    setTotalPrice(total);
  }, [cartItems]);

  useEffect(() => {
    setCartItems([]);
  }, [orders]);

  return (
    <StoreContext.Provider
      value={{
        orders,
        cartCount,
        totalPrice,
        cartItems,
        isCheckoutSideMenuOpen,
        isProductDetailOpen,
        productActive,
        handleProductActive,
        handleAddToCart,
        handleProductDetailVisibility,
        handleCheckoutVisibility,
        handleRemoveFromCart,
        handleSaveOrder,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export { StoreProvider, StoreContext };
