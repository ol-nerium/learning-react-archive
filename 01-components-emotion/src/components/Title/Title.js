import css from './Title.module.css';

function Title({ title }) {
  return <h1 className={css.title}>{title}</h1>;
}

export default Title;
