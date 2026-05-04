import styled from '@emotion/styled';

export const List = styled.ul`
  margin-bottom: 20px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;

  padding: 10px;

  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;

export const Avatar = styled.img`
  border-radius: 10px;
  margin-left: 20px;
`;

export const Name = styled.p`
  margin-left: 20px;
  font-weight: bolder;
`;

export const Status = styled.span`
  border-radius: 100%;
  width: 20px;
  height: 20px;
  background-color: ${({ isOnline }) =>
    isOnline ? 'rgb(0, 131, 0)' : 'rgb(255, 0, 0)'}};
`;
