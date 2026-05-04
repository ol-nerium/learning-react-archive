import css from './Square.module.css';

const Square = ({
  handleClick,
  value,
  isHighLighted,
}: {
  handleClick: () => void;
  value: string;
  isHighLighted: boolean | undefined;
}) => {
  let clasArr = isHighLighted
    ? `${css.squareBtn} ${css.highlighted}`
    : css.squareBtn;
  return (
    <button onClick={handleClick} className={clasArr}>
      {value}
    </button>
  );
};

export default Square;
