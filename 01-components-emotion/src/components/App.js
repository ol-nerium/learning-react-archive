import data from 'upcoming-events.json';

import EventBoard from './EventBoard';
import Title from './Title';

// console.log(data);

function App() {
  return (
    <>
      <Title title="болтание болторезами без болтов" />
      <EventBoard events={data} />
    </>
  );
}

export default App;
