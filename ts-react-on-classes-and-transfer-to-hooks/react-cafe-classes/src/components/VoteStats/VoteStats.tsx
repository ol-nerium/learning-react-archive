import { Container, Stat } from './VoteStats.styled';

export default function VoteStats({ statsValues }: { statsValues: number[] }) {
  const [good, neutral, bad, totalVotes, positivePercentage]: number[] =
    statsValues;
  return (
    <Container>
      <Stat>
        Good: <strong>{good}</strong>
      </Stat>
      <Stat>
        Neutral: <strong>{neutral}</strong>
      </Stat>
      <Stat>
        Bad: <strong>{bad}</strong>
      </Stat>
      <Stat>
        Total: <strong>{totalVotes}</strong>
      </Stat>
      <Stat>
        Positive:
        <strong>{positivePercentage}%</strong>
      </Stat>
    </Container>
  );
}
