import { useContext } from 'react';

import { StoreContext } from '../../Context';

import { XMarkIcon } from '@heroicons/react/24/solid';

export default function OrderCard({ data }) {
  const { handleRemoveFromCart } = useContext(StoreContext);

  const { id, image, title, price } = data;

  return (
    <div className="flex flex-row items-center h-20 my-2 gap-1 border border-black p-2 rounded-lg">
      <XMarkIcon
        className="h-6 w-6 text-black cursor-pointer"
        onClick={() => handleRemoveFromCart(id)}
      />
      <figure className=" flex-grow h-full">
        <img
          className="w-20 h-full object-cover rounded-lg"
          src={image}
          alt={title}
        />
      </figure>
      <p className="flex flex-col">
        <span className="font-bold">{title}</span>

        <span>${price}</span>
      </p>
    </div>
  );
}
