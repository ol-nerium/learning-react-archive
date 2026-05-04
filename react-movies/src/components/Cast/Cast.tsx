import { useParams } from 'react-router-dom';
import { getCredits } from '@/utils/api';
import { useEffect, useState } from 'react';
import picture from './noImage.jpg';

import css from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState<
    | {
        adult: boolean;
        cast_id: number;
        character: string;
        credit_id: string;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        order: number;
        original_name: string;
        popularity: number;
        profile_path: string;
      }[]
    | null
  >(null);
  const { filmId } = useParams();
  // console.log(cast);
  useEffect(() => {
    if (!filmId) return;
    getCredits(filmId)
      .then(res => {
        setCast(res.data.cast);
      })
      .catch(err =>
        alert(`something gone wrong( try later or check console (${err})`)
      );
  }, [filmId]);

  if (cast !== null)
    return cast.length > 0 ? (
      <ul className={css.castList}>
        {cast.map(({ id, profile_path, name, character }) => (
          <li key={`${id}${character}`} className={css.castListItem}>
            <div className={css.castItemImgWrap}>
              <img
                className={css.castItemImg}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : picture
                }
                alt={name}
              />
            </div>
            <ul className={css.castItemContent}>
              <li>
                <p className={css.castItemText}>
                  Name: <span>{name}</span>
                </p>
              </li>
              <li>
                <p className={css.castItemText}>
                  Character: <span>{character}</span>
                </p>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    ) : (
      <p className={css.withoutInfo}>No Info(</p>
    );
}
