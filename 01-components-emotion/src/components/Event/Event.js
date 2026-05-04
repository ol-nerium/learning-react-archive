import { iconSizes } from 'constants';
import PropTypes from 'prop-types';
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUserAlt,
} from 'react-icons/fa';
import { formatDate, formatEventDistance } from 'utils';
import {
  EventChip,
  EventContainer,
  EventInfo,
  EventTitle,
} from './Event.styled';

function Event({ name, location, speaker, type, timeStart, timeEnd }) {
  return (
    <EventContainer>
      <EventTitle>{name}</EventTitle>
      <EventInfo>
        <FaMapMarkerAlt size={iconSizes.sm} />
        {location}
      </EventInfo>
      <EventInfo>
        <FaUserAlt size={iconSizes.sm} />
        {speaker}
      </EventInfo>
      <EventInfo>
        <FaCalendarAlt size={iconSizes.sm} />
        {formatDate(timeStart)}
      </EventInfo>
      <EventInfo>
        <FaClock size={iconSizes.sm} />
        {formatEventDistance(timeStart, timeEnd)}
      </EventInfo>
      <EventChip eventType={type}>{type}</EventChip>
    </EventContainer>
  );
}

export default Event;

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  timeStart: PropTypes.string.isRequired,
  timeEnd: PropTypes.string.isRequired,
};
