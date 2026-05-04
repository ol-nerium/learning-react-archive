import PropTypes from 'prop-types';
import s from './Alert.module.css';

export default function Alert({ text, type }) {
  return (
    // //   для ванильного css или sass
    // <p role="alert" className={`Alert Alert--${type}`}>
    //   {text}
    // </p>
    <p role="alert" className={s[type]}>
      {text}
    </p>
  );
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'warning', 'error']).isRequired,
};
