import { useState, useEffect } from 'react';
import { PuffLoader } from 'react-spinners';

import css from './App.module.css';

import { fetchData } from '@/utils/pixabay-api';
import Button from '../../Button/Button';
import Searchbar from '../../Searchbar/Searchbar';
import ImageGallery from '@/components/ImageGallery/ImageGallery';
import SorryMessage from '@/components/SorryMessage/SorryMessage';

const Status = {
  IDLE: 'idle', // Searchbar, no loading, no error, optional gallery
  LOADED: 'loaded', //  searchbar, no loading, no error, gallery, optional modal
  ERROR: 'error', // searchbar, no loading, error, no gallery
};

export default function App() {
  const [loading, setloading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [value, setValue] = useState<string>(() => {
    return loadFromStorage('', 'value');
  });
  const [picturesData, setPicturesData] = useState<any[]>(() => {
    return loadFromStorage([], 'picturesData');
  });
  const [page, setPage] = useState<number>(() => {
    return loadFromStorage(1, 'page');
  });
  const [totalPages, setTotalPages] = useState<number>(() => {
    return loadFromStorage(1, 'totalPages');
  });
  const [status, setStatus] = useState<string>(() => {
    return loadFromStorage(Status.IDLE, 'status') === Status.ERROR
      ? Status.IDLE
      : Status.LOADED;
  });

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
    localStorage.setItem('page', JSON.stringify(page));
    localStorage.setItem('totalPages', JSON.stringify(totalPages));
    localStorage.setItem('status', JSON.stringify(status));
  }, [picturesData, value, page, totalPages, status]);

  const onSubmit = (value: string): void => {
    setValue(value);
    setPicturesData([]);
    setPage(1);
    showLoader();
    getPictures(value);
  };

  const onLoadNewPics = () => {
    showLoader();
    setPage(prev => {
      getPictures(value, prev + 1);
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
        setStatus(Status.LOADED);
      })
      .catch(error => {
        setPicturesData([]);
        setErrorMessage(error.message);
        setStatus(Status.ERROR);
      })
      .finally(() => hideLoader());
  };

  const showLoader = () => {
    setloading(true);
  };
  const hideLoader = () => {
    setloading(false);
  };

  const isLoadBtnVisible = page < totalPages;
  return (
    <div className={css.App}>
      <Searchbar onSubmit={onSubmit} />

      {status === Status.ERROR && <SorryMessage errorMessage={errorMessage} />}
      {status === Status.LOADED && (
        <>
          <h2
            style={{
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Currently searching
            <span style={{ fontSize: '2rem', marginLeft: '0.3rem' }}>
              {value}
            </span>
          </h2>
          <ImageGallery
            pictures={picturesData}
            showLoader={showLoader}
            hideLoader={hideLoader}
          />
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
          size={200}
        />
      )}
    </div>
  );
}
