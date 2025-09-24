import { Component } from 'react';
import css from './ImageGallery.module.css';

import ImageGalleryItem from '@/components/ImageGalleryItem/ImageGalleryItem';
import Modal from '@/components/Modal/Modal';

interface picturesItem {
  tags: string;
  previewURL: string;
  largeImageURL: string;
}

export default class ImageGallery extends Component<
  { pictures: picturesItem[]; showLoader: () => void; hideLoader: () => void },
  {
    modalData: { visible: boolean; dataOriginal: string; alt: string };
  }
> {
  state = {
    modalData: { visible: false, dataOriginal: '', alt: '' },
  };

  openModal = (e: React.MouseEvent<HTMLImageElement>): void => {
    const alt: string = e.currentTarget.alt;
    const dataOriginal = e.currentTarget.dataset.original as string;
    this.props.showLoader();
    this.setState({
      modalData: { ...this.state.modalData, visible: true, dataOriginal, alt },
    });
  };

  closeModal = (): void => {
    this.props.hideLoader();
    this.setState({
      modalData: { visible: false, dataOriginal: '', alt: '' },
    });
  };

  render() {
    const data: picturesItem[] = this.props.pictures;
    const { modalData } = this.state;
    const { visible } = modalData;
    return (
      <>
        <ul className={css.ImageGallery}>
          {data.map(({ tags, previewURL, largeImageURL }, index) => {
            return (
              <ImageGalleryItem
                key={index}
                src={previewURL}
                dataOriginal={largeImageURL}
                alt={tags}
                onClick={this.openModal}
              />
            );
          })}
        </ul>
        {visible && <Modal data={modalData} onModalClose={this.closeModal} />}
      </>
    );
  }
}
