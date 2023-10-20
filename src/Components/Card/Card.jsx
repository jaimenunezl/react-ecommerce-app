import { useContext } from 'react';

import { StoreContext } from '../../Context';

import { PlusCircleIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

export const Card = ({ data }) => {
  const {
    cartItems,
    handleProductDetailVisibility,
    handleProductActive,
    handleCheckoutVisibility,
    handleAddToCart,
  } = useContext(StoreContext);

  const { id, image, title, category, price } = data;

  const handleOpenProductDetail = () => {
    handleProductActive(data);
    handleCheckoutVisibility(false);
    handleProductDetailVisibility(true);
  };

  const handleAddItem = () => {
    handleAddToCart(data);
    handleProductDetailVisibility(false);
    handleCheckoutVisibility(true);
  };

  const AddToCartIcon = ({ id }) => {
    const wasAdded = cartItems.find(({ id: itemId }) => itemId === id);

    const handleClick = (e, hasAdd = false) => {
      e.stopPropagation();
      if (hasAdd) handleAddItem();
    };

    return (
      <>
        {wasAdded ? (
          <CheckCircleIcon
            className="h-8 w-8 text-lime-300"
            onClick={(e) => handleClick(e)}
          />
        ) : (
          <PlusCircleIcon
            className="h-8 w-8 text-white "
            onClick={(e) => handleClick(e, true)}
          />
        )}
      </>
    );
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-70 hover:scale-105 transition-transform"
      onClick={() => handleOpenProductDetail()}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 text-left w-full bg-tra bg-white/[0.6] px-2">
          {category}
        </span>
        <img
          className="object-cover w-full h-full rounded-xl"
          src={image}
          alt={title}
        />
        <div className="absolute top-1 right-1 flex justify-center items-center cursor-pointer hover:scale-110 transition-transform">
          <AddToCartIcon id={id} />
        </div>
      </figure>
      <p className="flex flex-col">
        <span className="font-bold">{title}</span>
        <span className="w-full text-left font-bold text-lg">${price}</span>
      </p>
    </div>
  );
};
