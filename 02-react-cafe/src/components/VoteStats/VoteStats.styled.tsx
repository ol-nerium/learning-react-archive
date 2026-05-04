import styled from '@emotion/styled';

const Container = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #dcdfe3;
  border-radius: 4px;
  padding: 16px;
  max-width: 300px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
`;

const Stat = styled.p`
  font-size: 15px;
  color: #2d2d2d;
  margin: 8px 0;
  display: flex;
  justify-content: space-between;
  & strong {
    font-weight: 600;
    color: #0a66c2;
  }
`;

export { Container, Stat };
