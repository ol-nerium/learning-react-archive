import { Container, Button, Reset } from './VoteOptions.styled';

import type { VoteType } from '@/utils/votes';

export default function VoteOptions({
  handleChange,
  reset,
}: {
  handleChange: (value: VoteType) => void;
  reset: () => void;
}) {
  return (
    <Container>
      <Button
        value="good"
        onClick={(evt: React.MouseEvent<HTMLButtonElement>) =>
          handleChange(evt.currentTarget.value as VoteType)
        }
      >
        Good
      </Button>
      <Button
        value="neutral"
        onClick={(evt: React.MouseEvent<HTMLButtonElement>) =>
          handleChange(evt.currentTarget.value as VoteType)
        }
      >
        Neutral
      </Button>
      <Button
        value="bad"
        onClick={(evt: React.MouseEvent<HTMLButtonElement>) =>
          handleChange(evt.currentTarget.value as VoteType)
        }
      >
        Bad
      </Button>
      <Reset onClick={reset}>Reset</Reset>
    </Container>
  );
}
