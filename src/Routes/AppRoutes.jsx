import { useRoutes, Navigate } from 'react-router-dom';

import { Home, MyAccount, NotFound, MyOrders, MyOrder, SignIn } from '../Pages';
import { useContext } from 'react';
import { StoreContext } from '../Context';

export function AppRoutes() {
  const { isLoggedIn } = useContext(StoreContext);

  return useRoutes(
    isLoggedIn
      ? [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: '/mi-cuenta',
            element: <MyAccount />,
          },
          {
            path: '/login',
            element: <SignIn />,
          },
          {
            path: '/orden/:id',
            element: <MyOrder />,
          },
          {
            path: '/mis-ordenes',
            element: <MyOrders />,
          },
          {
            path: '/:category',
            element: <Home />,
          },
          {
            path: '/*',
            element: <NotFound />,
          },
        ]
      : [
          {
            path: '/*',
            element: <SignIn />,
          },
        ]
  );
}
