import s from 'components/Alert/Alert.module.css';
import Container from 'components/Container';
import PropTypes from 'prop-types';

function Alert({ text, type }) {
  return (
    <Container>
      <p role="alert" className={s[type]}>
        {text}
      </p>
    </Container>
  );
}

export default Alert;

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['error', 'warning', 'success']).isRequired,
};
