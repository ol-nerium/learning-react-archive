import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = React.memo(function ImageGalleryItem({
  src,
  alt,
  onClick,
}: {
  src: string;
  alt: string;
  onClick: (e: React.MouseEvent<HTMLImageElement>) => void;
}) {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        src={src}
        alt={alt}
        className={css['ImageGalleryItem-image']}
        onClick={onClick}
      />
    </li>
  );
});

export default ImageGalleryItem;
