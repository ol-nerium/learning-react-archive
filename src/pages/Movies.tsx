import { useEffect, useState, lazy, Suspense } from 'react';
import { getMoviesListByName } from '@/utils/api';
import { useSearchParams } from 'react-router-dom';

const MoviesList = lazy(() => import('@/components/MoviesList/MoviesList'));
const SearchBox = lazy(() => import('@/components/SearchBox/SearchBox'));

export default function Movies() {
  const [resArr, setResArr] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchingRequestValue = searchParams.get('query') ?? '';

  // Функція оновлення ключа url
  const updateSearchParams = (key: string, value: string) => {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set(key, value);
    setSearchParams(updatedParams);
  };

  function handleSubmit(value: string) {
    updateSearchParams('query', value);
  }

  useEffect(() => {
    if (searchingRequestValue === '') return;
    getMoviesListByName(searchingRequestValue)
      .then(res => setResArr(res.data.results))
      .catch(err =>
        alert(`something gone wrong( try later or check console (${err})`)
      );
  }, [searchingRequestValue]);

  return (
    <Suspense fallback={<div>Loading Movies page...</div>}>
      <SearchBox onSubmit={handleSubmit} />
      {!searchingRequestValue || <MoviesList filmsArr={resArr} />}
    </Suspense>
  );
}
