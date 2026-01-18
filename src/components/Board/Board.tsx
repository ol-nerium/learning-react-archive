import Square from '@/components/Square/Square';
import css from './Board.module.css';

const Board = ({
  squares,
  onClick,
  winnerInfo,
}: {
  squares: string[];
  onClick: (i: number) => void;
  winnerInfo: {
    message: string;
    winnerLine: number[];
  } | null;
}) => (
  <ul className={css.board}>
    {squares.map((value, index) => {
      const handleClick = () => onClick(index);
      const isHighLighted = winnerInfo?.winnerLine.includes(index);
      return (
        <li className={css.boardItem} key={index}>
          <Square
            handleClick={handleClick}
            value={value}
            isHighLighted={isHighLighted}
          />
        </li>
      );
    })}
  </ul>
);

export default Board;
