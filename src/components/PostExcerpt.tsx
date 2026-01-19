import { PostAuthor } from '@/features/posts/PostAuthor';
import { TimeAgo } from './TimeAgo';
import ReactionButtons from '@/features/posts/ReactionButtons';
import { Link } from 'react-router-dom';
import type { Post } from '@/features/posts/postsSlice';

interface PostExcerptProps {
  post: Post;
}

export function PostExcerpt({ post }: PostExcerptProps) {
  return (
    <article className="post-excerpt">
      <h3>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <ReactionButtons post={post} />
    </article>
  );
}
