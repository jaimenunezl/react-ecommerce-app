import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { StoreContext } from '../../Context';
import { Layout, OrderCard } from '../../Components';

import { ArrowLeftIcon } from '@heroicons/react/24/solid';

export default function MyOrder() {
  const { orders } = useContext(StoreContext);

  let order = null;
  const { id: orderId } = useParams();

  console.log(orderId);

  if (orderId === 'ultima') {
    order = orders.slice(-1);
  } else {
    order = orders.filter(({ metadata }) => metadata.id === orderId);
  }

  if (!order || order.length === 0)
    return (
      <Layout>
        <p className="text-center mt-2">No hay ninguna orden</p>
      </Layout>
    );

  const { products, metadata } = order[0];

  return (
    <Layout>
      <header className="flex flex-col items-center">
        <h2 className="font-semibold text-2xl">Mi Orden</h2>
        <span>Creada el {metadata.date.toLocaleString('es')}</span>
        <Link to="/mis-ordenes">
          <span className="flex mt-5 items-center gap-3">
            <ArrowLeftIcon className="w-5" />
            Volver
          </span>
        </Link>
      </header>
      <main className="mt-5">
        {products.length > 0 ? (
          products.map((product) => (
            <OrderCard key={product.id} data={product} />
          ))
        ) : (
          <p className="text-center mt-2">No hay productos</p>
        )}
      </main>
    </Layout>
  );
}
