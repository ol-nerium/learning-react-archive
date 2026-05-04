import { useDispatch } from 'react-redux';

import css from './LoginForm.module.css';
import { login } from '@/redux/auth/operations';

export default function LoginForm() {
  const dispatch = useDispatch();
  function onFormSumbit(e) {
    const formData = e;
    const formValues = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    dispatch(login(formValues));
  }

  return (
    <form action={onFormSumbit} className={css.loginForm}>
      <label htmlFor="email" className={css.loginFormCaption}>
        Email
      </label>
      {/* <input type="email" id="email" /> */}
      <input
        type="text"
        id="email"
        name="email"
        className={css.loginFormInput}
      />
      <label htmlFor="password" className={css.loginFormCaption}>
        Password
      </label>
      <input
        type="text"
        id="password"
        name="password"
        className={css.loginFormInput}
      />
      <button type="submit" className={css.loginFormBtn}>
        Log In
      </button>
    </form>
  );
}
