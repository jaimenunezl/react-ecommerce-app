import { Link } from 'react-router-dom';

import { calculateTotal } from '../../Utils';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

export default function OrdersCard({ data }) {
  const { products, metadata } = data;

  const { id, date } = metadata;

  const totalPrice = calculateTotal(products);
  const totalProducts = products.length;

  return (
    <div className="flex flex-row items-center h-20 my-2 gap-1 border border-black p-2 rounded-lg min-w-[300px]">
      <div className="flex flex-col mr-10 flex-grow">
        <p className="flex justify-between">
          <span>Creada el </span>
          <span>
            {new Date(date).toLocaleString('es', {
              dateStyle: 'short',
              timeStyle: 'short',
            })}
          </span>
        </p>
        <p className="flex justify-between">
          <span>Cantidad: </span>
          <span>{totalProducts}</span>
        </p>
        <p className="flex justify-between">
          <span>Total: </span>
          <span>$ {totalPrice}</span>
        </p>
      </div>
      <Link to={`/orden/${id}`}>
        <ArrowTopRightOnSquareIcon className="h-6 w-6 text-black cursor-pointer" />
      </Link>
    </div>
  );
}
