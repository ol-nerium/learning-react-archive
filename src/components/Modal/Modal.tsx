import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import React, { useEffect } from 'react';

const modalNode = document.getElementById('modal') as HTMLElement;

export default function Modal({
  data,
  onModalClose,
}: {
  data: { dataOriginal: string; alt: string };
  onModalClose: () => void;
}) {
  useEffect(() => {
    window.addEventListener('keydown', closeModal);
    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, []);

  const closeModal = (e: KeyboardEvent) => {
    console.log('still working');
    if (e.code === 'Escape') {
      onModalClose();
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onModalClose();
  };

  const { dataOriginal, alt } = data;
  return (
    <>
      {createPortal(
        <div className={css.Overlay} onClick={handleOverlayClick}>
          <div className={css.Modal}>
            <img src={dataOriginal} alt={alt} />
          </div>
        </div>,
        modalNode
      )}
    </>
  );
}
