import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import React, { Component, type ReactNode } from 'react';

const modalNode = document.getElementById('modal') as HTMLElement;
export default class Modal extends Component<
  {
    data: { dataOriginal: string; alt: string };
    checkIfImgLoaded: () => void;
    onModalClose: () => void;
  },
  {}
> {
  closeModal = (e: KeyboardEvent) => {
    if (e.code === 'Escape') {
      this.props.onModalClose();
    }
  };

  handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) this.props.onModalClose();
  };

  componentDidMount(): void {
    window.addEventListener('keydown', this.closeModal);
  }
  componentWillUnmount(): void {
    window.removeEventListener('keydown', this.closeModal);
  }

  render(): ReactNode {
    const { dataOriginal, alt } = this.props.data;
    return (
      <>
        {createPortal(
          <div className={css.Overlay} onClick={this.handleOverlayClick}>
            <div className={css.Modal}>
              <img
                src={dataOriginal}
                alt={alt}
                onLoad={this.props.checkIfImgLoaded}
              />
            </div>
          </div>,
          modalNode
        )}
      </>
    );
  }
}
