import PropTypes from 'prop-types';
import {
  StatisticsSection,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';
import randomColor from '../../utils/colorRandomizer';

export default function Statistics({ stats, title }) {
  return (
    <StatisticsSection>
      <Title>{title}</Title>

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item style={{ backgroundColor: randomColor() }} key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage} %</Percentage>
          </Item>
        ))}
      </StatList>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
      id: PropTypes.string,
    }).isRequired,
  ),
  title: PropTypes.string,
};
