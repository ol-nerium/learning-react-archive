import { createSlice, nanoid, type PayloadAction } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

import type { RootState } from '@/app/store';
export interface Reactions {
  thumbsUp: number;
  tada: number;
  heart: number;
  rocket: number;
  eyes: number;
}

export type ReactionName = keyof Reactions;

export interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  user: string;
  reactions: Reactions;
}

type PostUpdate = Pick<Post, 'id' | 'title' | 'content'>;

const initialReactions: Reactions = {
  thumbsUp: 0,
  tada: 0,
  heart: 0,
  rocket: 0,
  eyes: 0,
};

const initialState: Post[] = [
  {
    id: '1',
    title: 'First Post!',
    content: 'Hello!',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    user: '0',
    reactions: initialReactions,
  },
  {
    id: '2',
    title: 'Second Post',
    content: 'More text',
    date: sub(new Date(), { minutes: 15 }).toISOString(),
    user: '2',
    reactions: initialReactions,
  },
];

// Create the slice and pass in the initial state
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // Declare a "case reducer" named `postAdded`.
    // The type of `action.payload` will be a `Post` object.
    postAdded: {
      reducer(state, action: PayloadAction<Post>) {
        return [...state, action.payload];
      },
      prepare(title: string, content: string, userId: string) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
            reactions: initialReactions,
          },
        };
      },
    },
    postUpdated(state, action: PayloadAction<PostUpdate>) {
      let i = 0;
      const { id, title, content } = action.payload;
      const existingPost = state.find((post, index) => {
        if (post.id === id) i = index;
        return post.id === id;
      });
      if (existingPost) {
        return [
          ...state.slice(0, i),
          { ...existingPost, title, content },
          ...state.slice(i + 1),
        ];
      }
    },

    reactionsAdded(
      state,
      action: PayloadAction<{ postId: string; reaction: ReactionName }>
    ) {
      let i = 0;
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post, index) => {
        if (post.id === postId) i = index;
        return post.id === postId;
      });
      if (existingPost)
        return [
          ...state.slice(0, i),
          {
            ...existingPost,
            reactions: {
              ...existingPost.reactions,
              [reaction]: existingPost.reactions[reaction] + 1,
            },
          },
          ...state.slice(i + 1),
        ];
    },
  },
});

// Export the auto-generated action creator with the same name
export const { postAdded, postUpdated, reactionsAdded } = postsSlice.actions;

// Export the generated reducer function
export default postsSlice.reducer;

export const selectAllPosts = (state: RootState) => state.posts;

export const selectPostById = (state: RootState, postId: string) =>
  state.posts.find(post => post.id === postId);
