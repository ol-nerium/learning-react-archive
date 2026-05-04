import { Container, Title, Description } from './CafeInfo.styled';

export default function CafeInfo() {
  // console.log('re-render?');
  return (
    <Container>
      <Title>Sip Happens Café</Title>
      <Description>
        Please rate our service by selecting one of the options below.
      </Description>
    </Container>
  );
}
