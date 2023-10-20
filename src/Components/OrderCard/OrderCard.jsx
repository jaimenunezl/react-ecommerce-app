import { XMarkIcon } from '@heroicons/react/24/solid';

export default function OrderCard({ data, handleDelete }) {
  const { id, image, title, price } = data;

  return (
    <div className="flex flex-row items-center h-20 my-2 gap-1 border border-black p-2 rounded-lg">
      {handleDelete && (
        <XMarkIcon
          className="h-6 w-6 text-black cursor-pointer"
          onClick={() => handleDelete(id)}
        />
      )}
      <figure className="h-full text-center w-20">
        <img
          className="h-full object-cover rounded-lg w-full"
          src={image}
          alt={title}
        />
      </figure>
      <p className="flex flex-col">
        <span className="font-semibold">{title}</span>

        <span>${price}</span>
      </p>
    </div>
  );
}
