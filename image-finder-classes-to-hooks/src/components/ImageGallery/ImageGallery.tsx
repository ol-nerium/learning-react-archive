import { useCallback, useState } from 'react';
import css from './ImageGallery.module.css';

import ImageGalleryItem from '@/components/ImageGalleryItem/ImageGalleryItem';
import Modal from '@/components/Modal/Modal';

interface picturesItem {
  tags: string;
  previewURL: string;
  largeImageURL: string;
}

const ImageGallery = ({
  pictures,
  loader,
}: {
  pictures: picturesItem[];
  loader: (value: boolean) => void;
}) => {
  const [selected, setSelected] = useState<{ url: string; alt: string } | null>(
    null
  );

  const openModal = useCallback((url: string, alt: string): void => {
    setSelected({ url, alt });
  }, []);

  const closeModal = useCallback((): void => {
    setSelected(null);
  }, []);

  const handleClick = useCallback(
    (url: string, alt: string) => () => openModal(url, alt),
    [openModal]
  );

  return (
    <>
      <ul className={css.ImageGallery}>
        {pictures.map(({ tags, previewURL, largeImageURL }, index) => {
          const normalizedAlt = tags
            .split(',')
            .map(s => s.trim())
            .join(' ');
          return (
            <ImageGalleryItem
              key={`${largeImageURL}-${index}`}
              src={previewURL}
              alt={normalizedAlt}
              onClick={handleClick(largeImageURL, normalizedAlt)}
            />
          );
        })}
      </ul>
      {selected && (
        <Modal image={selected} onModalClose={closeModal} onLoad={loader} />
      )}
    </>
  );
};

export default ImageGallery;
