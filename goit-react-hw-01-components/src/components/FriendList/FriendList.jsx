import PropTypes from 'prop-types';
import { List, Item, Avatar, Name, Status } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <List>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <Item key={id}>
          <Status isOnline={isOnline} />
          <Avatar src={avatar} alt="User avatar" width="48" />
          <Name>{name}</Name>
        </Item>
      ))}
    </List>
  );
}

FriendList.propTypes = {
  id: PropTypes.string,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
