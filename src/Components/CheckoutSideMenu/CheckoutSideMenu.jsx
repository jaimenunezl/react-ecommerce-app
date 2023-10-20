import { useContext } from 'react';

import { StoreContext } from '../../Context';
import { OrderCard } from '../../Components';

import { XMarkIcon } from '@heroicons/react/24/solid';

export default function CheckoutSideMenu() {
  const { isCheckoutSideMenuOpen, cartItems, handleCheckoutVisibility } =
    useContext(StoreContext);

  const handleCloseProductDetail = () => {
    handleCheckoutVisibility(false);
  };

  return (
    <>
      {isCheckoutSideMenuOpen && (
        <aside className="w-[300px] flex flex-col p-4 fixed bg-white top-[69px] right-0 h-[calc(100vh-68px)] border border-black rounded-lg">
          <div className="h-full">
            <header className="flex justify-between">
              <span className="text-lg">Mi orden</span>
              <XMarkIcon
                className="h-6 w-6 text-black cursor-pointer"
                onClick={() => handleCloseProductDetail()}
              />
            </header>
            <main className="overflow-auto h-full">
              {cartItems.length > 0 ? (
                cartItems.map((item, i) => <OrderCard key={i} data={item} />)
              ) : (
                <p className="text-center mt-2">No hay productos</p>
              )}
            </main>
          </div>
        </aside>
      )}
    </>
  );
}
