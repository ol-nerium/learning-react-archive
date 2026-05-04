import styled from '@emotion/styled';

export const ProfileContatner = styled.div`
  width: 300px;
  padding: 10px 0px 0px 0px;
  margin-bottom: 20px;

  margin-left: auto;
  margin-right: auto;

  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Avatar = styled.img`
  width: 200px;
  border-radius: 50% 50%;
`;
export const Name = styled.p`
  margin-bottom: 5px;
`;
export const Tag = styled.p`
  margin-bottom: 5px;
`;
export const Location = styled.p`
  margin-bottom: 20px;
`;
export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(34, 60, 80, 0.2);
`;
export const Items = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 3);
  padding: 10px;
  border-right: 1px solid rgba(34, 60, 80, 0.2);
  &: last-of-type {
    border-right: none;
  }
`;
export const Label = styled.span`
  text-align: center;
`;
export const Quantity = styled.span`
  text-align: center;
`;
