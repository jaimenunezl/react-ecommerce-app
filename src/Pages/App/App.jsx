import { useRoutes, BrowserRouter } from 'react-router-dom'

import { Home, MyAccount, NotFound } from '../../Pages'
import { Navbar } from '../../Components'
import { StoreProvider } from '../../Context'

import './App.css'

const AppRoutes = () => {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/my-account',
      element: <MyAccount />,
    },
    {
      path: '/*',
      element: <NotFound />,
    },
  ])
}

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App
