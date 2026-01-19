import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { addNewPost } from './postsSlice';
import { selectCurrentUserName } from '../auth/authSLice';
import { useState } from 'react';

// TS types for the input fields
// See: https://epicreact.dev/how-to-type-a-react-form-on-submit-handler/

interface AppPostFormFields extends HTMLFormControlsCollection {
  postTitle: HTMLInputElement;
  postContent: HTMLTextAreaElement;
  postAuthor: HTMLSelectElement;
}
interface AddPostFormElements extends HTMLFormElement {
  elements: AppPostFormFields;
}

export const AddPostForm = () => {
  const [addRequestStatus, setAddRequestStatus] = useState<'idle' | 'pending'>(
    'idle'
  );

  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectCurrentUserName)!;

  const handleSubmit = async (e: React.FormEvent<AddPostFormElements>) => {
    e.preventDefault();

    const { elements } = e.currentTarget;
    const title = elements.postTitle.value;
    const content = elements.postContent.value;
    // Removed the `postAuthor` field everywhere in the component

    const form = e.currentTarget;
    try {
      setAddRequestStatus('pending');
      await dispatch(addNewPost({ title, content, user: userId })).unwrap();
      // createAsyncThunk specifically, you can await dispatch(someThunk()).unwrap() to handle
      // the request success or failure at the component level.
      form.reset();
    } catch (error) {
      console.log('Failed to save the post: ', error);
    } finally {
      setAddRequestStatus('idle');
    }

    // e.currentTarget.reset();
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" id="postTitle" defaultValue="" required />
        {/* <label htmlFor="postAuthor">Author:</label>
        <select name="postAuthor" id="postAuthor" required>
          <option value=""></option>
          {userOptions}
        </select> */}
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          defaultValue=""
          required
        />

        <button>Save Post</button>
      </form>
    </section>
  );
};
