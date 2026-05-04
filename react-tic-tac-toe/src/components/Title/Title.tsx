import css from './Title.module.css';

const Title = ({ text }: { text: string }) => {
  return <h2 className={css.title}>{text}</h2>;
};

export default Title;
