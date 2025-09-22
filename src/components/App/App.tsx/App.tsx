import { Component } from 'react';
import { PuffLoader } from 'react-spinners';

import css from './App.module.css';
import type { stateType } from '@/utils/types';

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
    });
    this.setState({ ...this.state, ...resObj });
    this.hideLoader();
  }

  componentDidUpdate(_: {}, prevState: stateType): void {
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

  onSubmit = (value: string): void => {
    this.setState({
      value: value,
      picturesData: [],
      page: 1,
    });
    this.showLoader();
    this.getPictures(value);
  };

  onLoadNewPics = () => {
    this.showLoader();
    this.setState(
      prevState => ({
        page: prevState.page + 1,
      }),
      () => {
        const { value, page } = this.state;
        this.getPictures(value, page);
      }
    );
  };

  getPictures = (value: string, page = 1, limits = 12) => {
    return fetchData(value, page, limits)
      .then(newData => {
        if (newData.hits.length !== 0) {
          this.setState({
            picturesData: [...this.state.picturesData, ...newData.hits],
            totalPages: Math.ceil(newData.totalHits / limits),
            status: Status.LOADED,
          });
        } else
          this.setState({
            status: Status.ERROR,
            picturesData: [],
          });
      })
      .catch(error => {
        console.log('error =>', error);
        this.setState({
          status: Status.ERROR,
          picturesData: [],
        });
      })
      .finally(() => this.hideLoader());
  };

  showLoader = () => {
    this.setState({ loading: true });
  };
  hideLoader = () => {
    this.setState({ loading: false });
  };

  render() {
    const isLoadBtnVisible = this.state.page < this.state.totalPages;
    const { status, loading } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onSubmit} />

        {status === Status.ERROR && <SorryMessage />}
        {status === Status.LOADED && (
          <>
            <ImageGallery
              pictures={this.state.picturesData}
              showLoader={this.showLoader}
              hideLoader={this.hideLoader}
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
      </div>
    );
  }
}
