import { createPortal } from 'react-dom';
import React, { useEffect, useCallback } from 'react';
import css from './Modal.module.css';

const modalNode = document.getElementById('modal') as HTMLElement;

export default function Modal({
  image,
  onModalClose,
  onLoad,
}: {
  image: { url: string; alt: string };
  onModalClose: () => void;
  onLoad: (value: boolean) => void;
}) {
  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onModalClose();
    },
    [onModalClose]
  );

  const hideLoader = useCallback(() => onLoad(false), [onLoad]);
  const showLoader = useCallback(() => onLoad(true), [onLoad]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onModalClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    showLoader();
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
      document.body.style.position = '';

      hideLoader();
    };
  }, [onModalClose]);

  const { url, alt } = image;
  return createPortal(
    <div className={css.Overlay} onClick={handleOverlayClick}>
      <div role="dialog" aria-modal="true" className={css.Modal}>
        <img src={url} alt={alt} onLoad={hideLoader} />
      </div>
    </div>,
    modalNode
  );
}
