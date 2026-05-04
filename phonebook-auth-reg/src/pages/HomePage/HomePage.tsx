import picture from '@/assets/duckling.jpg';
import css from './HomePage.module.css';
export default function HomePage() {
  return (
    <div className={css.mainPage}>
      <h1 className={css.title}>this is main page, quak</h1>
      <div className={css.imgWrap}>
        <img src={picture} alt="curious-duck" />
      </div>
    </div>
  );
}
