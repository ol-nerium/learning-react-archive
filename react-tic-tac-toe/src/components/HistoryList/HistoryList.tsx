import HistoryItem from '../HistoryItem/HistoryItem';
import css from './HistoryList.module.css';

const HistoryList = ({
  history,
  handleReturn,
}: {
  history: string[][];
  handleReturn: (move: number) => void;
}) => (
  <ol className={css.historyList}>
    {history.map((item: string[], index: number) => {
      if (index === 0) return null;
      return (
        <HistoryItem
          item={item}
          key={`history-${index}`}
          handleReturn={() => handleReturn(index + 1)}
        />
      );
    })}
  </ol>
);

export default HistoryList;
