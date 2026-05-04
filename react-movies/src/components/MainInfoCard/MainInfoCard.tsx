import css from './MainInfoCard.module.css';
import picture from './noImage.jpg';

export default function MainInfoCard({
  filmInfo,
}: {
  filmInfo: { [key: string]: any };
}) {
  const { poster_path, title, overview, genres, vote_average } = filmInfo;
  return (
    <div className={css.mainCard}>
      <div className={css.movieFace}>
        <h3 className={css.cardTitle}>{title}</h3>
        <div className={css.imgWrap}>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w780/${poster_path}`
                : picture
            }
            alt={title}
          />
        </div>
      </div>
      <div className={css.mainContent}>
        <p className={css.score}>
          Average score: <span>{vote_average || 'No info'}</span>
        </p>
        <h4 className={css.overviewTitle}>Overview:</h4>
        <p className={css.overviewText}>{overview || 'No info'}</p>
        <h5 className={css.genresTitle}>Genres:</h5>
        <p className={css.genres}>
          {genres.length > 0
            ? genres
                .map((item: { id: number; name: string }) => item.name)
                .join(' ')
                .trim()
            : 'no information'}
        </p>
      </div>
    </div>
  );
}
