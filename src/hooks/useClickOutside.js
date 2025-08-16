import { useEffect } from 'react';

export const useClickOutside = (isOpen, ref, onClickOutside) => {
  useEffect(() => {
    if (!isOpen) return;

    const handlerClickOutside = evt => {
      if (ref.current && !ref.current.contains(evt.target)) {
        onClickOutside();
      }
    };

    const handlerPressEscape = evt => {
      if (evt.code === 'Escape') {
        onClickOutside();
      }
    };

    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handlerClickOutside, true);
      window.addEventListener('keydown', handlerPressEscape);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handlerClickOutside, true);
      window.removeEventListener('keydown', handlerPressEscape);
    };
  }, [isOpen, ref, onClickOutside]);
};
