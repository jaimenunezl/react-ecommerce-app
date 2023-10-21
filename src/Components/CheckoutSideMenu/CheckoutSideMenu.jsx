import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { StoreContext } from '../../Context';
import { OrderCard } from '../../Components';

import { XMarkIcon } from '@heroicons/react/24/solid';

export default function CheckoutSideMenu() {
  const {
    isCheckoutSideMenuOpen,
    cartItems,
    handleCheckoutVisibility,
    handleRemoveFromCart,
    totalPrice,
    handleSaveOrder,
  } = useContext(StoreContext);

  const handleCloseProductDetail = () => {
    handleCheckoutVisibility(false);
  };

  const handleCheckout = () => {
    const data = {
      products: cartItems,
      metadata: {
        id: crypto.randomUUID(),
        date: new Date(),
      },
    };

    handleCheckoutVisibility(false);
    handleSaveOrder(data);
  };

  const handleDelete = (id) => {
    handleRemoveFromCart(id);
  };

  return (
    <>
      {isCheckoutSideMenuOpen && (
        <aside className="w-[300px] flex flex-col p-4 fixed bg-white top-[68px] right-0 h-[calc(100vh-68px)] border border-black rounded-lg">
          <div className="flex flex-col h-full">
            <header className="flex justify-between">
              <span className="text-lg">Mi orden</span>
              <XMarkIcon
                className="h-6 w-6 text-black cursor-pointer"
                onClick={() => handleCloseProductDetail()}
              />
            </header>
            <main className="overflow-auto flex-grow">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <OrderCard
                    key={item.id}
                    data={item}
                    handleDelete={handleDelete}
                  />
                ))
              ) : (
                <p className="text-center mt-2">No hay productos</p>
              )}
            </main>
            <footer className="mt-3 flex flex-col">
              <p className="flex justify-between font-bold">
                <span>Total </span>
                <span>$ {totalPrice}</span>
              </p>
              <Link to="/orden/ultima">
                <button
                  disabled={cartItems.length === 0}
                  className={`bg-lime-600 text-white px-3 py-2 mt-3 rounded-md cursor-pointer  transition-colors font-semibold w-full ${
                    cartItems.length === 0
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-lime-800'
                  }`}
                  onClick={() => handleCheckout()}
                >
                  Finalizar
                </button>
              </Link>
            </footer>
          </div>
        </aside>
      )}
    </>
  );
}
