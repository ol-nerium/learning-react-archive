import { getReviews } from '@/utils/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import css from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState<
    | {
        author: string;
        author_details: {
          name: string;
          username: string;
          avatar_path: boolean;
          rating: number;
        };
        content: string;
        created_at: string;
        id: string;
        updated_at: string;
        url: string;
      }[]
    | null
  >(null);
  const { filmId } = useParams();
  useEffect(() => {
    if (!filmId) return;
    getReviews(filmId)
      .then(res => setReviews(res.data.results))
      .catch(err =>
        alert(`something gone wrong( try later or check console (${err})`)
      );
  }, [filmId]);

  if (reviews !== null)
    return reviews.length > 0 ? (
      <ul className={css.reviewsList}>
        {reviews.map(({ id, author, content }) => (
          <li key={id} className={css.reviewsListItem}>
            <div>
              <h3 className={css.reviewsListName}>
                Author: <span>{author}</span>
              </h3>
              <p className={css.reviewsListContent}>{content}</p>
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <p className={css.withoutInfo}>No reviews yet(</p>
    );
}
