import LoginForm from '@/components/LoginForm/LoginForm';
import RegForm from '@/components/RegForm/RegForm';
import css from './RegisterPage.module.css';

export default function HomePage() {
  return (
    <div className={css.regPage}>
      <h1>Registration</h1>
      <RegForm />
    </div>
  );
}
