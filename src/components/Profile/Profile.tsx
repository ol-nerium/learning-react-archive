import {
  ProfileCard,
  ProfileInfo,
  ProfileStatsList,
  ProfileStatsListItem,
} from "./Profile.styled";

type profileCardPropsType = {
  name: string;
  tag: string;
  location: string;
  image: string;
  stats: {
    followers: number;
    views: number;
    likes: number;
  };
};

export default function Profile(profileCardProps: profileCardPropsType) {
  return (
    <ProfileCard key={profileCardProps.tag}>
      <ProfileInfo>
        <img src={profileCardProps.image} alt="User avatar" />
        <p>{profileCardProps.name}</p>
        <p>@{profileCardProps.tag}</p>
        <p>{profileCardProps.location}</p>
      </ProfileInfo>

      <ProfileStatsList>
        <ProfileStatsListItem>
          <span>Followers</span>
          <span>{profileCardProps.stats.followers}</span>
        </ProfileStatsListItem>
        <ProfileStatsListItem>
          <span>Views</span>
          <span>{profileCardProps.stats.views}</span>
        </ProfileStatsListItem>
        <ProfileStatsListItem>
          <span>Likes</span>
          <span>{profileCardProps.stats.likes}</span>
        </ProfileStatsListItem>
      </ProfileStatsList>
    </ProfileCard>
  );
}
