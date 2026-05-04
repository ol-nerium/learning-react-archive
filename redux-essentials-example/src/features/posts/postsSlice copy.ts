// Defining Thunks in createSlice (file wasn't imported anywhere, just for test)

import { nanoid, type PayloadAction } from '@reduxjs/toolkit';
import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit';

import { client } from '@/api/client';
import type { RootState } from '@/app/store';
import { userLoggedOut } from '@/features/auth/authSLice';

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

interface PostState {
  posts: Post[];
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

export const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
}); // That gives us a version of createSlice with the ability to write thunks inside.

const initialState: PostState = {
  posts: [],
  status: 'idle',
  error: null,
};

const postsSlice = createAppSlice({
  name: 'posts',
  initialState,
  reducers: create => {
    return {
      postAdded: create.preparedReducer(
        (title: string, content: string, userId: string) => {
          return {
            payload: {
              id: nanoid(),
              date: new Date().toISOString(),
              reactions: initialReactions,
              title,
              content,
              user: userId,
            },
          };
        },
        (state, action: PayloadAction<Post>) => {
          return { ...state, posts: [...state.posts, action.payload] };
        }
      ),

      postUpdated: create.reducer<PostUpdate>((state, action) => {
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
      }),

      reactionsAdded: create.reducer<{
        postId: string;
        reaction: ReactionName;
      }>((state, action) => {
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
      }),

      fetchPosts: create.asyncThunk(
        async () => {
          // Payload creator function to fetch the data
          const response = await client.get<Post[]>('fakeApi/posts');
          return response.data;
        },
        {
          options: {
            condition(_, thunkApi) {
              const { posts } = thunkApi.getState() as RootState;
              // const postStatus = selectPostsStatus(thunkApi.getState());
              // if (postStatus !== 'idle') return false;
              if (posts.status !== 'idle') return false;
            },
          },

          // The case reducers to handle the dispatched actions.
          // Each of these is optional, but must use these names.
          pending: (state, _) => {
            return { ...state, status: 'pending' };
          },
          fulfilled: (state, action) => {
            return { ...state, status: 'succeeded', posts: action.payload };
          },
          rejected: (state, action) => {
            return {
              ...state,
              status: 'failed',
              error: action.error.message ?? 'Unknown error',
            };
          },
        }
      ),
    };
  },

  extraReducers: builder => {
    // Clear out the list of posts whenever the user logs out
    builder.addCase(userLoggedOut, _ => initialState);
    // The thunk handlers have been removed here
  },
});

// Export the auto-generated action creator with the same name
export const { postAdded, postUpdated, reactionsAdded } = postsSlice.actions;

// Export the generated reducer function
export default postsSlice.reducer;

export const selectAllPosts = (state: RootState) => state.posts.posts;

export const selectPostById = (state: RootState, postId: string) =>
  state.posts.posts.find(post => post.id === postId);

export const selectPostsStatus = (state: RootState) => state.posts.status;
export const selectPostsError = (state: RootState) => state.posts.error;
