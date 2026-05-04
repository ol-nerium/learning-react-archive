import css from './ResetBtn.module.css';

const ResetBtn = ({ handleReset }: { handleReset: () => void }) => {
  return (
    <button onClick={handleReset} className={css.resetBtn}>
      Reset Game!
    </button>
  );
};

export default ResetBtn;
