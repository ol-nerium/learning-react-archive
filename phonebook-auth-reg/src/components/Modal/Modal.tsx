import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import css from './Modal.module.css';

const modalRoot = document.getElementById('modal');

export default function Modal({ children }) {
  const navigate = useNavigate();

  // close on click on backdrop
  function handleCLick(e) {
    if (e.target === e.currentTarget) {
      // navigate(-1);
      navigate('/contacts');
    }
  }
  // close on click on btn
  function closeModal(e) {
    // navigate(-1);
    navigate('/contacts');
  }

  // close on esc
  function closeOnEsc(e) {
    // console.log('keydown event');
    // if (e.code === 'Escape') navigate(-1);
    if (e.code === 'Escape') navigate('/contacts');
  }
  useEffect(() => {
    window.addEventListener('keydown', closeOnEsc);
    return () => window.removeEventListener('keydown', closeOnEsc);
  }, []);

  return createPortal(
    <div className={css.backdrop} onClick={handleCLick}>
      <div className={css.modal}>
        {children}
        <button type="button" className={css.closeBtn} onClick={closeModal}>
          X
        </button>
      </div>
    </div>,
    modalRoot
  );
}
