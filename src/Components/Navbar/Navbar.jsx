import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { StoreContext } from '../../Context';

export default function Navbar() {
  const {
    cartCount,
    account,
    isLoggedIn,
    updateLoginStatus,
    isCheckoutSideMenuOpen,
    handleCheckoutVisibility,
  } = useContext(StoreContext);
  const navigate = useNavigate();

  const activeItem = 'underline underline-offset-4 font-semibold';

  const handleLogout = () => {
    updateLoginStatus(false);

    navigate('/login');
  };

  return (
    <nav className="flex justify-between fixed z-10 w-full py-5 px-5 items-center top-0 bg-white">
      <ul className="flex gap-2 items-center">
        <li className=" font-semibold text-lg">
          <NavLink to={isLoggedIn ? '/' : '/login'}>Shopi</NavLink>
        </li>
        {isLoggedIn && (
          <>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? activeItem : null)}
              >
                Todo
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/clothes"
                className={({ isActive }) => (isActive ? activeItem : null)}
              >
                Ropa
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/electronics"
                className={({ isActive }) => (isActive ? activeItem : null)}
              >
                Electronica
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/furniture"
                className={({ isActive }) => (isActive ? activeItem : null)}
              >
                Juguetes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/others"
                className={({ isActive }) => (isActive ? activeItem : null)}
              >
                Otros
              </NavLink>
            </li>
          </>
        )}
      </ul>

      <ul className="flex gap-2 items-center">
        {isLoggedIn && (
          <>
            <li className=" text-lg text-gray-500">{account.name}</li>
            <li>
              <NavLink
                to="/mis-ordenes"
                className={({ isActive }) => (isActive ? activeItem : null)}
              >
                Mis Órdenes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mi-cuenta"
                className={({ isActive }) => (isActive ? activeItem : null)}
              >
                Mi Cuenta
              </NavLink>
            </li>
            <li className="cursor-pointer" onClick={() => handleLogout()}>
              Salir
            </li>
          </>
        )}

        {!isLoggedIn && (
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? activeItem : null)}
            >
              Login
            </NavLink>
          </li>
        )}

        {isLoggedIn && (
          <>
            <li
              className="cursor-pointer"
              onClick={() => handleCheckoutVisibility(!isCheckoutSideMenuOpen)}
            >
              🛒 {cartCount}
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
