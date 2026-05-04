import { useDispatch } from 'react-redux';

import css from './RegForm.module.css';
import { register } from '@/redux/auth/operations';

export default function RegForm() {
  const dispatch = useDispatch();
  function onFormSumbit(e) {
    const formData = e;

    const formValues = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };

    // testuser123445@mail.com

    dispatch(register(formValues));
  }
  return (
    <form action={onFormSumbit} className={css.regForm}>
      <label htmlFor="name" className={css.regFormCaption}>
        Name
      </label>
      <input type="text" id="name" name="name" className={css.regFormInput} />

      <label htmlFor="email" className={css.regFormCaption}>
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className={css.regFormInput}
      />

      <label htmlFor="password" className={css.regFormCaption}>
        Password
      </label>
      <input
        type="text"
        id="password"
        name="password"
        className={css.regFormInput}
      />

      <button type="submit" className={css.regFormBtn}>
        Sign up
      </button>
    </form>
  );
}
