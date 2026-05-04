import { Container, Button, Reset } from './VoteOptions.styled';

import type { OptionType } from '@/utils/votes';

export default function VoteOptions({
  handleVote,
  reset,
}: {
  handleVote: (value: OptionType) => void;
  reset: () => void;
}) {
  const handleChange = (evt: React.MouseEvent<HTMLButtonElement>) => {
    handleVote(evt.currentTarget.dataset.option as OptionType);
  };

  return (
    <Container>
      <Button data-option="good" onClick={handleChange}>
        Good
      </Button>
      <Button data-option="neutral" onClick={handleChange}>
        Neutral
      </Button>
      <Button data-option="bad" onClick={handleChange}>
        Bad
      </Button>
      <Reset onClick={reset}>Reset</Reset>
    </Container>
  );
}
