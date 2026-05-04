import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';

const HomePage = lazy(() => import('@/pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('@/pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('@/pages/RegisterPage/RegisterPage'));
const ContactsPage = lazy(() => import('@/pages/ContactsPage/ContactsPage'));
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'));

import AppBar from '../AppBar/AppBar';
import PublicRoute from '../PublicRoute';
import PrivateRoute from '../PrivateRoute';
import Modal from '../Modal/Modal';
import ContactListItem from '../ContactListItem/ContactListItem';

import { refreshUser } from '@/redux/auth/operations';
import { selectIsRefreshing } from '@/redux/auth/selectors';
import ContactsForm from '../ContactsForm/ContactsForm';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <AppBar />

        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route
              path="/"
              element={<PublicRoute component={HomePage} redirectTo="/login" />}
            />

            <Route
              path="/login"
              element={
                <PublicRoute
                  component={LoginPage}
                  redirectTo="/contacts"
                  restricted
                />
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute
                  component={RegisterPage}
                  redirectTo="/contacts"
                  restricted
                />
              }
            />

            <Route
              path="/contacts"
              element={
                <PrivateRoute component={ContactsPage} redirectTo="/login" />
              }
            >
              <Route
                path=":taskId"
                element={
                  <Modal>
                    <ContactListItem />
                  </Modal>
                }
              />
              <Route
                path="addcontact"
                element={
                  <Modal>
                    <ContactsForm />
                  </Modal>
                }
              ></Route>
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </>
    )
  );
}

export default App;
