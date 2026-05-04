import styled from '@emotion/styled';

const Container = styled.div`
  padding: 32px 24px;
  background-color: #ffffff;
  border: 1px solid #e1e4e8;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
`;

const Title = styled.h1`
  margin: 0;
  font-size: 36px;
  color: #1a1a1a;
  font-weight: 600;
  margin-bottom: 16px;
`;

const Description = styled.p`
  margin: 0;
  font-size: 16px;
  color: #4b4b4b;
  max-width: 600px;
  line-height: 1.6;
`;

export { Container, Title, Description };
