import { NavLink } from 'react-router-dom';
import css from './AdditionalInfoCard.module.css';

export default function AdditionalInfoCard({
  parentState,
}: {
  parentState: {
    hash: string;
    key: string;
    pathname: string;
    search: string;
    state: { from: string };
  };
}) {
  const backLinkRef = parentState.state;
  function linkBuilder(classes: {
    isActive: boolean;
    isPending: boolean;
    isTransitioning: boolean;
  }) {
    if (classes.isActive) return `${css.link} ${css.active}`;
    return css.link;
  }
  return (
    <div className={css.additionalCard}>
      <p className={css.additionalTitle}>Additional information</p>
      <ul className={css.additionalInfoList}>
        <li className={css.additionalInfoListItem}>
          <NavLink to="cast" state={backLinkRef} className={linkBuilder}>
            Cast
          </NavLink>
        </li>
        <li className={css.additionalInfoListItem}>
          <NavLink to="reviews" state={backLinkRef} className={linkBuilder}>
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
