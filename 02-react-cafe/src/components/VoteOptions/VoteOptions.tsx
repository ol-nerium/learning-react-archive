import { Container, Button, Reset } from './VoteOptions.styled';

import type { VoteType } from '@/utils/votes';

export default function VoteOptions({
  handleChange,
  reset,
}: {
  handleChange: (value: VoteType) => void;
  reset: () => void;
}) {
  const onVoteClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const value = evt.currentTarget.value as VoteType;
    handleChange(value);
  };

  return (
    <Container>
      <Button value="good" onClick={onVoteClick}>
        Good
      </Button>
      <Button value="neutral" onClick={onVoteClick}>
        Neutral
      </Button>
      <Button value="bad" onClick={onVoteClick}>
        Bad
      </Button>
      <Reset onClick={reset}>Reset</Reset>
    </Container>
  );
}
