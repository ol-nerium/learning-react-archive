import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoard';

import upcomingEvents from '../upcoming-events.json';

export const App = () => {
  const titleText = '24th core worlds coalition conference';
  return (
    <>
      <PageTitle text={titleText} />
      <EventBoard events={upcomingEvents} />
    </>
  );
};
