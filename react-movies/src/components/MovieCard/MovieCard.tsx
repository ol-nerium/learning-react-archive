import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { lazy, Suspense } from 'react';

import { getMovieById } from '@/utils/api';
import css from './MovieCard.module.css';

// import MainInfoCard from '@/components/MainInfoCard/MainInfoCard';
// import AdditionalInfoCard from '@/components/AdditionalInfoCard/AdditionalInfoCard';

const MainInfoCard = lazy(
  () => import('@/components/MainInfoCard/MainInfoCard')
);
const AdditionalInfoCard = lazy(
  () => import('@/components/AdditionalInfoCard/AdditionalInfoCard')
);

export default function MovieCard() {
  const [filmData, setFilmData] = useState(null);
  const { filmId } = useParams();
  const location = useLocation();
  useEffect(() => {
    if (!filmId) return;
    getMovieById(filmId)
      .then(res => {
        setFilmData(res.data);
      })
      .catch(err =>
        alert(`something gone wrong( try later or check console (${err})`)
      );
  }, [filmId]);

  // const backLinkRef = useRef(location.state?.from ?? '/movies');
  const backLinkRef = location.state?.from ?? '/movies';
  return (
    <div className={css.movieCard}>
      {/* <Link to={backLinkRef.current}>back</Link> */}
      {filmData && (
        <>
          <Link to={backLinkRef} className={css.backLink}>
            back
          </Link>
          <MainInfoCard filmInfo={filmData} />
          <AdditionalInfoCard parentState={location} />
        </>
      )}

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
