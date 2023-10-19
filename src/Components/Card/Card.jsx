import { useContext } from 'react'

import { StoreContext } from '../../Context'

import { PlusCircleIcon } from '@heroicons/react/24/solid'

export const Card = ({ id, image, title, description, category, price }) => {
  const {
    cartCount,
    setCartCount,
    handleProductDetailVisibility,
    handleProductActive,
  } = useContext(StoreContext)

  const handleOpenProductDetail = () => {
    handleProductActive({ id, image, title, description, category, price })
    handleProductDetailVisibility(true)
  }

  const handleAddToCart = () => {
    setCartCount(cartCount + 1)
  }

  return (
    <div
      className="bg-white cursor-pointer w-56 h-70 cursor-pointer"
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
        <div
          className="absolute top-1 right-1 flex justify-center items-center cursor-pointer"
          onClick={() => handleAddToCart()}
        >
          <PlusCircleIcon className="h-8 w-8 text-white " />
        </div>
      </figure>
      <p className="flex flex-col">
        <span className="font-bold">{title}</span>
        <span className="w-full text-left font-bold text-lg">${price}</span>
      </p>
    </div>
  )
}
