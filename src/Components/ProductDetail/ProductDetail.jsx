import { useContext } from 'react';

import { StoreContext } from '../../Context';

import { XMarkIcon } from '@heroicons/react/24/solid';

export default function ProductDetail() {
  const { isProductDetailOpen, productActive, handleProductDetailVisibility } =
    useContext(StoreContext);

  const handleCloseProductDetail = () => {
    handleProductDetailVisibility(false);
  };

  return (
    <>
      {isProductDetailOpen && (
        <aside className="w-[300px] flex flex-col p-4 fixed bg-white top-[68px] right-0 h-[calc(100vh-68px)] border border-black rounded-lg">
          <div>
            <header className="flex justify-between">
              <span className="text-lg">Detalle</span>
              <XMarkIcon
                className="h-6 w-6 text-black"
                onClick={() => handleCloseProductDetail()}
              />
            </header>
            <main>
              <figure>
                <img
                  src={productActive.image}
                  alt={productActive.title}
                  className="my-5 rounded-lg"
                />
              </figure>
              <p className="font-bold text-xl">{productActive.title}</p>
              <p>{productActive.category}</p>
              <p className="my-2">{productActive.description}</p>
              <p className="font-bold text-lg">${productActive.price}</p>
            </main>
          </div>
        </aside>
      )}
    </>
  );
}
