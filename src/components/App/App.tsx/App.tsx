import { useState, useEffect, useRef, useCallback } from 'react';
import { PuffLoader } from 'react-spinners';

import css from './App.module.css';

import { fetchData } from '@/utils/pixabay-api';
import Button from '../../Button/Button';
import Searchbar from '../../Searchbar/Searchbar';
import ImageGallery from '@/components/ImageGallery/ImageGallery';
import SorryMessage from '@/components/SorryMessage/SorryMessage';
import Title from '@/components/Title/Title';

const Status = {
  IDLE: 'idle', // Searchbar, no loading, no error, optional gallery
  SUCCESS: 'success', //  searchbar, no loading, no error, gallery, optional modal
  ERROR: 'error', // searchbar, no loading, error, no gallery
};

export default function App() {
  const [loading, setloading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [status, setStatus] = useState<string>(() =>
    loadFromStorage(Status.IDLE, 'status')
  );
  const [value, setValue] = useState<string>(() =>
    loadFromStorage('', 'value')
  );
  const [picturesData, setPicturesData] = useState<any[]>(() =>
    loadFromStorage([], 'picturesData')
  );
  const [page, setPage] = useState<number>(() => loadFromStorage(1, 'page'));
  const [totalPages, setTotalPages] = useState<number>(() =>
    loadFromStorage(1, 'totalPages')
  );

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) firstUpdate.current = false;
    return () => {
      firstUpdate.current = true;
    };
  }, []);
  useEffect(() => {
    if (firstUpdate.current) {
      return;
    }
    getPictures(value, page);
  }, [page]);

  function loadFromStorage<T>(init: T, name: string): T {
    const saved = localStorage.getItem(name);
    let keyValue = init;
    if (saved !== null) {
      try {
        keyValue = JSON.parse(saved);
      } catch {
        // ignore invalid JSON
      }
    }
    return keyValue;
  }

  useEffect(() => {
    localStorage.setItem('value', JSON.stringify(value));
    localStorage.setItem('picturesData', JSON.stringify(picturesData));
    localStorage.setItem('totalPages', JSON.stringify(totalPages));
    localStorage.setItem('status', JSON.stringify(status));
    localStorage.setItem('page', JSON.stringify(page));
  }, [picturesData, value, totalPages, status]);

  const onSubmit = (value: string): void => {
    setValue(value);
    setPicturesData([]);
    setPage(1);
    setloading(true);
    getPictures(value);
  };

  const onLoadNewPics = () => {
    setloading(true);
    setPage(prev => {
      return prev + 1;
    });
  };

  const getPictures = (value: string, page = 1, limits = 12) => {
    return fetchData(value, page, limits)
      .then(newData => {
        if (newData.hits.length === 0) {
          throw new Error('Sorry, no results ;(');
        }
        setTotalPages(Math.ceil(newData.totalHits / limits));
        setPicturesData(prev => [...prev, ...newData.hits]);
        setStatus(Status.SUCCESS);
      })
      .catch(error => {
        setErrorMessage(error.message);
        setStatus(Status.ERROR);
      })
      .finally(() => setloading(false));
  };

  const toggleLoading = useCallback(
    (val: boolean) => {
      console.log(val);
      setloading(val);
    },
    [setloading]
  );

  const isLoadBtnVisible = page < totalPages;
  const loaderSize = 200;
  return (
    <div className={css.App}>
      <Searchbar onSubmit={onSubmit} />

      {status === Status.ERROR && <SorryMessage errorMessage={errorMessage} />}
      {status === Status.SUCCESS && (
        <>
          <Title value={value}></Title>
          <ImageGallery pictures={picturesData} loader={toggleLoading} />
          {isLoadBtnVisible && (
            <Button onClick={onLoadNewPics} className={css.LoadBtn}>
              Load more
            </Button>
          )}
        </>
      )}
      {loading && (
        <PuffLoader
          cssOverride={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            translate: '-50% -50%',
          }}
          size={loaderSize}
        />
      )}
    </div>
  );
}
