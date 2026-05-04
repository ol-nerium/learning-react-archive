import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

export default function MoviesList({ filmsArr }: { filmsArr: any[] }) {
  const location = useLocation();
  location.state = { from: `${location.pathname}${location.search}` };
  return (
    <ul className={css.moviesList}>
      {filmsArr.map(({ id, title }: { id: string; title: string }) => {
        return (
          <li key={id} className={css.moviesListItem}>
            <Link to={`/movies/${id}`} state={location.state}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
