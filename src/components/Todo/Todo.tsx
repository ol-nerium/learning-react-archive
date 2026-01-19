import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

// useMutation({
//   mutationFn: async data => {
//     // HTTP-request
//   },
//   onSuccess: data => {
//     // Mutation success!
//   },
//   onError: error => {
//     // An error happened!
//   },
// });
export default function Todo() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async newTodo => {
      const res = await axios.post(
        'https://jsonplaceholder.typicode.com/todos',
        newTodo
      );
      return res.data;
    },
    onSuccess: () => {
      // 3. Коли мутація успішно виконується,
      // інвалідовуємо всі запити з ключем "todos"
      // для оновлення списку завдань
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
  //   console.log(mutation);

  const handleCreateTodo = () => {
    mutation.mutate({
      title: 'My new todo',
      completed: false,
    });
  };

  return (
    <>
      <button onClick={handleCreateTodo}>Create Todo</button>
      {mutation.isPending && <div>Adding todo...</div>}
      {mutation.isError && <div>An error occurred</div>}
      {mutation.isSuccess && <div>Todo added!</div>}
    </>
  );
}

// const arr = [];
// for (let i = 17; i <= 53; i += 1) {
//   arr.push(i);
// }

// const res = arr.map((i: number) => {
//   let n: number | string = '';
//   if (i % 2 === 0) n += 'Foo';
//   if (i % 5 === 0) n += 'Bar';
//   return n || i;
// });

// console.log(res.join(' '));
