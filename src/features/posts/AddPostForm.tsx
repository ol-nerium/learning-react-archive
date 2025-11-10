import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { postAdded } from './postsSlice';
import { selectCurrentUserName } from '../auth/authSLice';

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
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectCurrentUserName)!;

  const handleSubmit = (e: React.FormEvent<AddPostFormElements>) => {
    e.preventDefault();

    const { elements } = e.currentTarget;
    const title = elements.postTitle.value;
    const content = elements.postContent.value;
    // Removed the `postAuthor` field everywhere in the component

    dispatch(postAdded(title, content, userId));

    e.currentTarget.reset();
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
