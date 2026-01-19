import { Routes, Route, NavLink } from 'react-router-dom';
import clsx from 'clsx';

import css from './App.module.css';
import { lazy, Suspense } from 'react';

const Container = lazy(() => import('@/components/Container/Container'));
const Home = lazy(() => import('@/pages/Home'));
const Movies = lazy(() => import('@/pages/Movies'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const MovieCard = lazy(() => import('@/components/MovieCard/MovieCard'));
const Cast = lazy(() => import('@/components/Cast/Cast'));
const Reviews = lazy(() => import('@/components/Reviews/Reviews'));

const buildLinkClass = ({ isActive }: { isActive: boolean }) => {
  return clsx(css.link, isActive && css.active);
};

function App() {
  return (
    <Container>
      <nav>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/movies">
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />

          <Route path="/movies/:filmId" element={<MovieCard />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
