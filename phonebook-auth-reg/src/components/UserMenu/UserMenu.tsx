import { useDispatch, useSelector } from 'react-redux';

import css from './UserMenu.module.css';
import { selectName } from '@/redux/auth/selectors';
import { logout } from '@/redux/auth/operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(selectName);

  function onLogout() {
    dispatch(logout());
  }
  return (
    <div className={css.userMenu}>
      <p className={css.userTitle}>Welcome, {name}</p>

      <button type="button" className={css.navigationButton} onClick={onLogout}>
        Log out
      </button>
    </div>
  );
}
