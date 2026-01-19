interface Votes {
  good: number;
  neutral: number;
  bad: number;
}

type VoteType = 'good' | 'bad' | 'neutral';

export { Votes, VoteType };
