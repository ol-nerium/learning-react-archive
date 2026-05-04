import PropTypes from 'prop-types';
import s from './Painting.module.css';
import defaultImage from './default.jpg';

export default function Painting(props) {
  // console.log(props);
  const {
    ImageUrl = defaultImage,
    title,
    profileUrl,
    authorName = 'Неизвестно',
    price,
    quantity,
  } = props;
  return (
    <div className={s.container}>
      <img src={ImageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{authorName}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity <= 10 ? 'заканчивается' : 'есть в наличии'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

Painting.propTypes = {
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ImageUrl: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
