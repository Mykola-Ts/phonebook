import { useEffect } from 'react';

export const useClickOutside = (isOpen, ref, onClickOutside) => {
  useEffect(() => {
    if (!isOpen) return;

    const handlerClickOutside = evt => {
      if (ref.current && !ref.current.contains(evt.target)) {
        onClickOutside();
      }
    };

    const timeoutId = setTimeout(
      () => document.addEventListener('click', handlerClickOutside, true),
      0
    );

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handlerClickOutside, true);
    };
  }, [isOpen, ref, onClickOutside]);
};
