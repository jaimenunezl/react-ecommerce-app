import { useContext } from 'react';

import { StoreContext } from '../../Context';

import { Layout, OrdersCard } from '../../Components';

export default function MyOrders() {
  const { orders } = useContext(StoreContext);

  return (
    <Layout>
      <header className="flex flex-col items-center">
        <h2 className="font-semibold text-2xl">Mis Órdenes</h2>
      </header>
      <main className="mt-5">
        {orders.length > 0 ? (
          orders.map((order) => (
            <OrdersCard key={order.metadata.id} data={order} />
          ))
        ) : (
          <p className="text-center mt-2">No hay órdenes</p>
        )}
      </main>
    </Layout>
  );
}
