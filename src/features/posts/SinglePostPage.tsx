import { useAppSelector } from '@/app/hooks';
import { Link, useParams } from 'react-router-dom';
import { selectPostById } from './postsSlice';
import { PostAuthor } from './PostAuthor';
import { TimeAgo } from '@/components/TimeAgo';

export const SinglePostPage = () => {
  const { postId } = useParams();

  const post = useAppSelector(state => selectPostById(state, postId!));
  // ! operator to tell the TS compiler this value will not be undefined
  //at this point in the code. (This can be dangerous,
  //but we can make the assumption because we know the routing setup only shows
  //<EditPostForm> if there's a post ID in the URL.)

  if (!post)
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
        <p className="post-content">{post.content}</p>
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  );
};
