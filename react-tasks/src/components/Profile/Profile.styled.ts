import styled from "@emotion/styled";

const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  border: 5px solid black;
  max-width: 350px;
  margin: 0 auto;
  padding: 20px;

  font-size: 1.5rem;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 10px;

  & img {
    display: block;
    border-radius: 50%;
    object-fit: cover;
    width: 70%;
    aspect-ratio: 1/1;
  }

  & p {
    color: rgb(125, 108, 108);
  }

  & p:first-of-type {
    color: rgb(2, 2, 2);
    font-weight: 700;
  }

  & ul,
  & li,
  & p {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

const ProfileStatsList = styled.ul`
  display: flex;
  width: 100%;
  background-color: rgb(201, 195, 189);
`;

const ProfileStatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  padding: 20px 10px;
  flex-basis: calc(100% / 3);
  border: 1px solid grey;
  border-top-width: 3px;
  background-color: rgba(255, 255, 255, 0.6);
  & span {
    text-align: center;
    width: 100%;
  }

  & span:last-of-type {
    color: rgb(2, 2, 2);
    font-weight: 700;
  }
`;

export { ProfileCard, ProfileInfo, ProfileStatsList, ProfileStatsListItem };
