import { useRoutes, BrowserRouter } from 'react-router-dom';

import { Home, MyAccount, NotFound, MyOrders, MyOrder } from '../../Pages';
import { Navbar } from '../../Components';
import { StoreProvider } from '../../Context';

import './App.css';

const AppRoutes = () => {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/mi-cuenta',
      element: <MyAccount />,
    },
    {
      path: '/orden/ultima',
      element: <MyOrder />,
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
  ]);
};

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
