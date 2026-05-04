import { format } from 'date-fns';

// format(date, format, [options]);

function formatDate(start) {
  return format(Date.parse(start), 'dd MMMM yyyy, HH:mm');
}

export { formatDate };
