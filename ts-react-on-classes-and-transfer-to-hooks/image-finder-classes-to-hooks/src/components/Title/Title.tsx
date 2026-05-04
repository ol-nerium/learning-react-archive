import css from './Title.module.css';

export default function Title({ value }: { value: string }) {
  return (
    <h2 className={css.title}>
      Currently searching
      <span className={css.text}>{value}</span>
    </h2>
  );
}
