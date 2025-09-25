import { createPortal } from 'react-dom';
import React, { useEffect, useCallback } from 'react';
import css from './Modal.module.css';

const modalNode = document.getElementById('modal') as HTMLElement;

export default function Modal({
  image,
  onModalClose,
}: {
  image: { url: string; alt: string };
  onModalClose: () => void;
}) {
  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onModalClose();
    },
    [onModalClose]
  );

  useEffect(() => {
    const closeModal = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onModalClose();
      }
    };
    window.addEventListener('keydown', closeModal);
    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, [onModalClose]);

  const { url, alt } = image;
  return (
    <>
      {createPortal(
        <div className={css.Overlay} onClick={handleOverlayClick}>
          <div role="dialog" aria-modal="true" className={css.Modal}>
            <img src={url} alt={alt} />
          </div>
        </div>,
        modalNode
      )}
    </>
  );
}
