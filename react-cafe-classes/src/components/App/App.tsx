import { useState } from 'react';
import AppNod from './App.styled';
import CafeInfo from '@/components/CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import Notification from '../Notification/Notification';
import VoteStats from '../VoteStats/VoteStats';

import type { Votes, VoteType } from '@/utils/votes';

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function handleVote(type: VoteType): void {
    setVotes({ ...votes, [type]: votes[type] + 1 });
  }

  function resetVotes(): void {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  const { good, neutral, bad } = votes;
  const totalVotes = good + neutral + bad;
  const positivePercentage = totalVotes
    ? Math.round((good / totalVotes) * 100)
    : 0;

  return (
    <AppNod>
      <CafeInfo />
      <VoteOptions handleChange={handleVote} reset={resetVotes} />
      {totalVotes ? (
        <VoteStats
          statsValues={[good, neutral, bad, totalVotes, positivePercentage]}
        />
      ) : (
        <Notification />
      )}
    </AppNod>
  );
}
