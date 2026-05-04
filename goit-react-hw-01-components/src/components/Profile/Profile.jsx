import PropTypes from 'prop-types';
import {
  ProfileContatner,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Items,
  Label,
  Quantity,
} from './Profile.styled';

export default function Profile(props) {
  const { avatar, username, tag, location, followers, views, likes } = props;
  return (
    <ProfileContatner>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Items>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Items>
        <Items>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Items>
        <Items>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Items>
      </Stats>
    </ProfileContatner>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,

  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
