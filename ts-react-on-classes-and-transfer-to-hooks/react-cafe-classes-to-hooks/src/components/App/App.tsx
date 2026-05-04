import { useState } from 'react';
import AppNod from './App.styled';
import CafeInfo from '@/components/CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import Notification from '../Notification/Notification';
import VoteStats from '../VoteStats/VoteStats';

import type { OptionType } from '@/utils/votes';

export default function App() {
  const [good, setGood] = useState<number>(0);
  const [bad, setBad] = useState<number>(0);
  const [neutral, setNeutral] = useState<number>(0);

  function handleVote(option: OptionType): void {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      default:
        return console.log('no such type');
    }
  }

  function resetVotes(): void {
    setGood(0);
    setNeutral(0);
    setBad(0);
  }

  const totalVotes = good + neutral + bad;
  const positivePercentage = totalVotes
    ? Math.round((good / totalVotes) * 100)
    : 0;

  return (
    <AppNod>
      <CafeInfo />
      <VoteOptions handleVote={handleVote} reset={resetVotes} />
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
