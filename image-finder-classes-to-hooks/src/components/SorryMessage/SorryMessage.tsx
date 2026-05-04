import css from './SorryMessage.module.css';
import errorImg from './error.jpg';

export default function SorryMessage({
  errorMessage,
}: {
  errorMessage: string;
}) {
  return (
    <div className={css.container}>
      <p className={css.title}>{errorMessage}</p>
      <div className={css.imageWrap}></div>
      <img src={errorImg} alt="crying cat" className={css.image} />
    </div>
  );
}
