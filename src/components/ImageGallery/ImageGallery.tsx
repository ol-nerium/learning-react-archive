import { Component } from 'react';
import css from './ImageGallery.module.css';

import ImageGalleryItem from '@/components/ImageGalleryItem/ImageGalleryItem';
// import Button from '@/components/Button/Button';

interface picturesItem {
  tags: string;
  previewURL: string;
  largeImageURL: string;
}

export default class ImageGallery extends Component<
  {
    pictures: picturesItem[];
    onClick: (dataOriginal: string, alt: string) => void;
  },
  {}
> {
  render() {
    const data: picturesItem[] = this.props.pictures;
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
                onClick={this.props.onClick}
              />
            );
          })}
        </ul>
      </>
    );
  }
}
