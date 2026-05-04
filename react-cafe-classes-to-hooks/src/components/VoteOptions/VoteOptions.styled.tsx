import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 10px 22px;
  background-color: #0a66c2;
  color: #fff;
  border: 1px solid #0a66c2;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;
  min-width: 120px;

  &:hover {
    background-color: #004182;
    border-color: #003060;
  }
`;

const Reset = styled.button`
  padding: 10px 22px;
  color: #fff;
  border: 1px solid #0a66c2;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;
  min-width: 120px;
  background-color: #dc3545;
  border-color: #dc3545;

  &:hover {
    background-color: #bb2d3b;
    border-color: #b02a37;
  }
`;

export { Container, Button, Reset };
