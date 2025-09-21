import { Component } from 'react';
import { PuffLoader } from 'react-spinners';

import css from './App.module.css';
import type { stateType } from '@/utils/types';

import { fetchData } from '@/utils/pixabay-api';
import Button from '../../Button/Button';
import Searchbar from '../../Searchbar/Searchbar';
import ImageGallery from '@/components/ImageGallery/ImageGallery';
import Modal from '@/components/Modal/Modal';
import SorryMessage from '@/components/SorryMessage/SorryMessage';

const Status = {
  IDLE: 'idle', // Searchbar, no loading, no error, optional gallery
  LOADED: 'loaded', //  searchbar, no loading, no error, gallery, optional modal
  ERROR: 'error', // searchbar, no loading, error, no gallery
};

export default class App extends Component<{}, stateType> {
  state = {
    value: '',
    picturesData: [],
    page: 1,
    totalPages: 1,

    loading: false,
    modalData: { visible: false, dataOriginal: '', alt: '' },
    status: Status.IDLE,
  };

  componentDidMount(): void {
    const stateKeys = Object.keys(this.state) as (keyof stateType)[];
    let resObj: Partial<stateType> = {};
    stateKeys.forEach(key => {
      const saved = localStorage.getItem(key);
      if (saved !== null) {
        try {
          resObj[key] = JSON.parse(saved);
        } catch {
          // ignore invalid JSON
        }
      }
      // const res = JSON.parse(localStorage.getItem(key) as string);
      // resObj = { ...resObj, [key]: res };
    });
    this.setState({ ...this.state, ...resObj, loading: false });
  }

  componentDidUpdate(prevProps: {}, prevState: stateType): void {
    if (
      prevState.value !== this.state.value ||
      prevState.page !== this.state.page ||
      prevState.picturesData !== this.state.picturesData
    ) {
      const stateKeys = Object.keys(this.state) as (keyof stateType)[];
      stateKeys.forEach(key =>
        localStorage.setItem(key, JSON.stringify(this.state[key]))
      );
    }
  }

  getPictures = (value: string, page?: number, limits = 12) => {
    return fetchData(value, page, limits)
      .then(newData => {
        if (newData.hits.length !== 0) {
          this.setState({
            picturesData: [...this.state.picturesData, ...newData.hits],
            totalPages: Math.ceil(newData.totalHits / limits),
            status: Status.LOADED,
          });
        } else this.setState({ loading: false, status: Status.ERROR });
      })
      .catch(error => console.log(error))
      .finally(() => this.setState({ loading: false }));
  };

  onSubmit = (value: string): void => {
    this.setState({
      value: value,
      picturesData: [],
      page: 1,
      loading: true,
    });
    this.getPictures(value);
  };

  onLoadNewPics = () => {
    this.setState({ page: this.state.page + 1, loading: true }, () => {
      const { value, page } = this.state;
      this.getPictures(value, page);
    });
  };

  openModal = (dataOriginal: string, alt: string) => {
    this.setState({
      loading: true,
      modalData: { ...this.state.modalData, visible: true, dataOriginal, alt },
    });
  };

  closeModal = () => {
    this.setState({
      loading: false,
      modalData: { visible: false, dataOriginal: '', alt: '' },
    });
  };

  spinnerViewToggle = () => {
    this.setState({ loading: !this.state.loading });
  };

  render() {
    const isLoadBtnVisible = this.state.page < this.state.totalPages;
    const { status, loading, modalData } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onSubmit} />

        {status === Status.ERROR && <SorryMessage />}
        {status === Status.LOADED && (
          <>
            <ImageGallery
              pictures={this.state.picturesData}
              onClick={this.openModal}
            />
            {isLoadBtnVisible && (
              <Button onClick={this.onLoadNewPics} className={css.LoadBtn}>
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
        {modalData.visible && (
          <Modal
            data={modalData}
            onModalClose={this.closeModal}
            checkIfImgLoaded={this.spinnerViewToggle}
          />
        )}
      </div>
    );
  }
}
