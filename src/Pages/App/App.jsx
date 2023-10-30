import { HashRouter } from 'react-router-dom';

import { Navbar } from '../../Components';
import { StoreProvider } from '../../Context';
import { AppRoutes } from '../../Routes';

import './App.css';

function App() {
  return (
    <StoreProvider>
      <HashRouter>
        <Navbar />
        <AppRoutes />
      </HashRouter>
    </StoreProvider>
  );
}

export default App;
