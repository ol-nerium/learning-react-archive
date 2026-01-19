import { useAppDispatch, useAppSelector } from '@/app/hooks';
// import { Link } from 'react-router-dom';
import {
  fetchPosts,
  selectAllPosts,
  selectPostsError,
  selectPostsStatus,
} from './postsSlice';
// import { PostAuthor } from './PostAuthor';
// import { TimeAgo } from '@/components/TimeAgo';
// import ReactionButtons from './ReactionButtons';
import { useEffect } from 'react';
import { Spinner } from '@/components/Spinner';
import { PostExcerpt } from '@/components/PostExcerpt';

export const PostsList = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectAllPosts);
  const postStatus = useAppSelector(selectPostsStatus);
  const postsError = useAppSelector(selectPostsError);

  useEffect(() => {
    if (postStatus === 'idle') dispatch(fetchPosts());
  }, [dispatch, postStatus]);

  let content: React.ReactNode;

  if (postStatus === 'pending') {
    content = <Spinner text="Loading..." />;
  }
  if (postStatus === 'succeeded') {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map(post => (
      <PostExcerpt post={post} key={post.id} />
    ));
  }
  if (postStatus === 'failed') content = <div>{postsError}</div>;

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  );
};
