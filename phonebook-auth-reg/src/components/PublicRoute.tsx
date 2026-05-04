import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsLoggedIn } from '@/redux/auth/selectors';

// залогінен та  => рендер компонента
// не залогінений => редирект на redirectTo

export default function PublicRoute({
  component: Component,
  redirectTo = '/',
  restricted = false,
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
  // return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
}
