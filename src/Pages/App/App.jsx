import { BrowserRouter } from 'react-router-dom';

import { Navbar } from '../../Components';
import { StoreProvider } from '../../Context';
import { AppRoutes } from '../../Routes';

import './App.css';

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
