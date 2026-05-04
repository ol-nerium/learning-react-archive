import { useState, useEffect, lazy, Suspense } from 'react';

import { getTranding } from '@/utils/api';

const MoviesList = lazy(() => import('@/components/MoviesList/MoviesList'));
const Title = lazy(() => import('@/components/Title/Title'));

export default function Home() {
  const [trandingArr, setTrandingArr] = useState([]);

  useEffect(() => {
    getTranding()
      .then(res => setTrandingArr(res.data.results))
      .catch(err =>
        alert(`something gone wrong( try later or check console (${err})`)
      );
  }, []);

  return (
    <Suspense fallback={<div>Loading Homapage...</div>}>
      <Title text="Trending today" />
      <MoviesList filmsArr={trandingArr} />
    </Suspense>
  );
}
