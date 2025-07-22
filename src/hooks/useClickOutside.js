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
      () => document.addEventListener('click', handlerClickOutside),
      0
    );

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handlerClickOutside);
    };
  }, [isOpen, ref, onClickOutside]);
};
