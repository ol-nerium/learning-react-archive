import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';
import { selectIsLoggedIn } from '@/redux/auth/selectors';
export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.navigation}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? `${css.navigationLink} ${css.active}`
            : `${css.navigationLink}`
        }
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive
              ? `${css.navigationLink} ${css.active}`
              : `${css.navigationLink}`
          }
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
