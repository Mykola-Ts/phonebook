import throttle from 'lodash.throttle';
import { useEffect, useState } from 'react';

export const usePortalPosition = (ref, isOpen) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (!isOpen) return;

    const updatePosition = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();

        setPosition({
          top: rect.bottom + window.scrollY,
          left: rect.left + window.scrollX,
        });
      }
    };

    updatePosition();

    const throttledUpdatePosition = throttle(updatePosition, 50);

    window.addEventListener('resize', throttledUpdatePosition);
    window.addEventListener('scroll', throttledUpdatePosition);

    return () => {
      window.removeEventListener('resize', throttledUpdatePosition);
      window.removeEventListener('scroll', throttledUpdatePosition);
    };
  }, [isOpen, ref]);

  return position;
};
