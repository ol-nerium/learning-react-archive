import { useState } from 'react';
import css from './ImageGallery.module.css';

import ImageGalleryItem from '@/components/ImageGalleryItem/ImageGalleryItem';
import Modal from '@/components/Modal/Modal';

interface picturesItem {
  tags: string;
  previewURL: string;
  largeImageURL: string;
}

const ImageGallery = ({
  showLoader,
  hideLoader,
  pictures,
}: {
  pictures: picturesItem[];
  showLoader: () => void;
  hideLoader: () => void;
}) => {
  //

  const [visible, setVisible] = useState<boolean>(false);
  const [dataOriginal, setDataOriginal] = useState<string>('');
  const [alt, setAlt] = useState<string>('');

  const openModal = (e: React.MouseEvent<HTMLImageElement>): void => {
    const alt: string = e.currentTarget.alt;
    const dataOriginal = e.currentTarget.dataset.original as string;
    showLoader();
    setVisible(true);
    setDataOriginal(dataOriginal);
    setAlt(alt);
    hideLoader();
  };

  const closeModal = (): void => {
    hideLoader();
    setVisible(false);
    setDataOriginal('');
    setAlt('');
  };

  return (
    <>
      <ul className={css.ImageGallery}>
        {pictures.map(({ tags, previewURL, largeImageURL }, index) => {
          return (
            <ImageGalleryItem
              key={index}
              src={previewURL}
              dataOriginal={largeImageURL}
              alt={tags}
              onClick={openModal}
            />
          );
        })}
      </ul>
      {visible && (
        <Modal data={{ dataOriginal, alt }} onModalClose={closeModal} />
      )}
    </>
  );
};

export default ImageGallery;
