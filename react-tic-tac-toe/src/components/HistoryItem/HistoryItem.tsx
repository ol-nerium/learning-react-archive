import { nanoid } from 'nanoid';
import css from './HistoryItem.module.css';

const HistoryItem = ({
  item,
  handleReturn,
}: {
  item: string[];
  handleReturn: () => void;
}) => (
  <li className={css.historyItem}>
    <button onClick={handleReturn} className={css.historyBtn}></button>
    <ul className={css.list}>
      {item.map((item, index) => (
        <li key={`${index}-${nanoid()}`} className={css.item}>
          {item ? item : ' '}
        </li>
      ))}
    </ul>
  </li>
);

export default HistoryItem;
