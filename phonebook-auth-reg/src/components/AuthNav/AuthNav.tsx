import { NavLink } from 'react-router-dom';

import css from './AuthNav.module.css';
export default function AuthNav() {
  return (
    <div className={css.navigation}>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? `${css.navLink} ${css.active}` : `${css.navLink}`
        }
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? `${css.navLink} ${css.active}` : `${css.navLink}`
        }
      >
        Log In
      </NavLink>
    </div>
  );
}
