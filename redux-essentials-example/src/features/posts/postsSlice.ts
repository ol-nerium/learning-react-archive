import { createAppAsyncThunk } from './../../app/withTypes';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { client } from '@/api/client';

import type { RootState } from '@/app/store';
import { userLoggedOut } from '@/features/auth/authSLice';
// import { create } from 'domain';
// import { sub } from 'date-fns';

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
type NewPost = Pick<Post, 'title' | 'content' | 'user'>;

// const initialReactions: Reactions = {
//   thumbsUp: 0,
//   tada: 0,
//   heart: 0,
//   rocket: 0,
//   eyes: 0,
// };

interface PostState {
  posts: Post[];
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

export const fetchPosts = createAppAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await client.get<Post[]>('fakeApi/posts');
    return response.data;
  },
  {
    condition(_, thunkApi) {
      const postStatus = selectPostsStatus(thunkApi.getState());
      if (postStatus !== 'idle') return false;
    },
  }
);

export const addNewPost = createAppAsyncThunk(
  'posts/addNewPost',
  async (initialPost: NewPost) => {
    // We send the initial data to the fake API server
    const response = await client.post<Post>('/fakeApi/posts', initialPost);
    // The response includes the complete post object, including unique ID
    return response.data;
  }
);

const initialState: PostState = {
  posts: [],
  status: 'idle',
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // The type of `action.payload` will be a `Post` object.

    // The existing `postAdded` reducer and prepare callback were deleted
    // postAdded: {
    //   reducer(state, action: PayloadAction<Post>) {
    //     return { ...state, posts: [...state.posts, action.payload] };
    //   },
    //   prepare(title: string, content: string, userId: string) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         date: new Date().toISOString(),
    //         reactions: initialReactions,
    //         title,
    //         content,
    //         user: userId,
    //       },
    //     };
    //   },
    // },
    postUpdated(state, action: PayloadAction<PostUpdate>) {
      let i = 0;
      const { id, title, content } = action.payload;
      const existingPost = state.posts.find((post, index) => {
        if (post.id === id) i = index;
        return post.id === id;
      });
      if (existingPost) {
        return {
          ...state,
          posts: [
            ...state.posts.slice(0, i),
            { ...existingPost, title, content },
            ...state.posts.slice(i + 1),
          ],
        };
      }
    },

    reactionsAdded(
      state,
      action: PayloadAction<{ postId: string; reaction: ReactionName }>
    ) {
      let i = 0;
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post, index) => {
        if (post.id === postId) i = index;
        return post.id === postId;
      });
      if (existingPost)
        return {
          ...state,
          posts: [
            ...state.posts.slice(0, i),
            {
              ...existingPost,
              reactions: {
                ...existingPost.reactions,
                [reaction]: existingPost.reactions[reaction] + 1,
              },
            },
            ...state.posts.slice(i + 1),
          ],
        };
    },
  },

  extraReducers: builder => {
    // Clear out the list of posts whenever the user logs out
    builder
      .addCase(userLoggedOut, _ => initialState)
      .addCase(fetchPosts.pending, (state, _) => {
        return { ...state, status: 'pending' };
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        return { ...state, status: 'succeeded', posts: action.payload };
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        return {
          ...state,
          status: 'failed',
          error: action.error.message ?? 'Unknown error',
        };
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        return { ...state, posts: [...state.posts, action.payload] };
      });
    // .addCase(addNewPost.pending, (state, _) => {
    //   return { ...state, status: 'pending' };
    // })
    // .addCase(addNewPost.rejected, (state, action) => {
    //   console.log(action.error.message);
    // });
  },
});

// Export the auto-generated action creator with the same name
export const { postUpdated, reactionsAdded } = postsSlice.actions;

// Export the generated reducer function
export default postsSlice.reducer;

export const selectAllPosts = (state: RootState) => state.posts.posts;

export const selectPostById = (state: RootState, postId: string) =>
  state.posts.posts.find(post => post.id === postId);

export const selectPostsStatus = (state: RootState) => state.posts.status;
export const selectPostsError = (state: RootState) => state.posts.error;
