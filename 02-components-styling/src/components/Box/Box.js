import s from './Box.module.css';

function Box({ type = 'small', classNames = '' }) {
  // classNames - пользователь может передать класс,
  // который есть в его css
  return <div className={`${s[type]} ${classNames}`}>Box</div>;
}

export default Box;
