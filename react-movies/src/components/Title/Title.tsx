import css from './Title.module.css';

export default function Title({ text }: { text: string }) {
  return <h2 className={css.title}>{text}</h2>;
}
