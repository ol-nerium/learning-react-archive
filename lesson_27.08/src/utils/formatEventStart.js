import { format } from 'date-fns';

// format(date, format, [options])

export const formatEventStart = start => {
  return format(Date.parse(start), 'dd MMMM yyyy, HH:mm');
};
