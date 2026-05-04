import { formatDistanceStrict } from 'date-fns';

export function formatEventDistance(date1, date2) {
  return formatDistanceStrict(Date.parse(date1), Date.parse(date2));
}
