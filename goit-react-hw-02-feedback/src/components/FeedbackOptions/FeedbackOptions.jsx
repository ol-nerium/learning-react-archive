import css from './FeedbackOptions.module.css';
const FeedbackOptions = ({ good, bad, neutral, onLeaveFeedback }) => {
  return (
    <ul className={css.options}>
      <li className={css.options__item}>
        <button
          type="button"
          onClick={() => onLeaveFeedback('good')}
          name="good"
          className={css.btn}
        >
          good
        </button>
      </li>
      <li className={css.options__item}>
        <button
          type="button"
          onClick={() => onLeaveFeedback('bad')}
          name="bad"
          className={css.btn}
        >
          bad
        </button>
      </li>
      <li className={css.options__item}>
        <button
          type="button"
          onClick={() => onLeaveFeedback('neutral')}
          name="neutral"
          className={css.btn}
        >
          neutral
        </button>
      </li>
    </ul>
  );
};

export default FeedbackOptions;
