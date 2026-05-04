import css from './Statistics.module.css';

const Statistics = args => {
  const { total, positivePercentage, options } = args;
  return (
    <ul className={css.stats}>
      {options.map(option => (
        <li className={css.stats__option} key={option}>
          {option} : {args[option]}
        </li>
      ))}
      {total !== 0 ? (
        <li className={css.stats__option}>Total: {total}</li>
      ) : undefined}
      <li className={css.stats__option}>
        PositiveFeedBack: {positivePercentage}
      </li>
    </ul>
  );
};

export default Statistics;
