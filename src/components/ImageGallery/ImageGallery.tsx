import { useCallback, useState } from 'react';
import css from './ImageGallery.module.css';

import ImageGalleryItem from '@/components/ImageGalleryItem/ImageGalleryItem';
import Modal from '@/components/Modal/Modal';

interface picturesItem {
  tags: string;
  previewURL: string;
  largeImageURL: string;
}

const ImageGallery = ({ pictures }: { pictures: picturesItem[] }) => {
  const [selected, setSelected] = useState<{ url: string; alt: string } | null>(
    null
  );

  const openModal = useCallback((url: string, alt: string): void => {
    setSelected({ url, alt });
  }, []);

  const handleClick = useCallback(
    (url: string, alt: string) => () => openModal(url, alt),
    [openModal]
  );

  const closeModal = useCallback((): void => {
    setSelected(null);
  }, []);

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
      {selected && <Modal image={selected} onModalClose={closeModal} />}
    </>
  );
};

export default ImageGallery;
