import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { StoreContext } from '../../Context'

export default function Navbar() {
  const { cartCount } = useContext(StoreContext)

  const activeItem = 'underline underline-offset-4 font-semibold'

  return (
    <nav className="flex justify-between fixed z-10 w-full py-5 px-5 items-center top-0 bg-white">
      <ul className="flex gap-2 items-center">
        <li className=" font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
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
            to="/ropa"
            className={({ isActive }) => (isActive ? activeItem : null)}
          >
            Ropa
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronica"
            className={({ isActive }) => (isActive ? activeItem : null)}
          >
            Electronica
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/juguetes"
            className={({ isActive }) => (isActive ? activeItem : null)}
          >
            Juguetes
          </NavLink>
        </li>
      </ul>

      <ul className="flex gap-2 items-center">
        <li className=" text-lg text-gray-500">jaime.nunez</li>
        <li>
          <NavLink
            to="/mis-ordenes"
            className={({ isActive }) => (isActive ? activeItem : null)}
          >
            Mis Ordenes
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
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? activeItem : null)}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/carrito">🛒 {cartCount}</NavLink>
        </li>
      </ul>
    </nav>
  )
}
