import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsLoggedIn, selectIsRefreshing } from '@/redux/auth/selectors';

// залогінен => рендер компонента
// не залогінений => редирект на redirectTo

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRerirect = !isLoggedIn && !isRefreshing;
  // return isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
  return shouldRerirect ? <Navigate to={redirectTo} /> : <Component />;
}
