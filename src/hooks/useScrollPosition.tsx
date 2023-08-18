import { useEffect, useState } from 'react'

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;

    const updatePosition = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScrollPosition(window.scrollY);
      }, 18); 
    };

    window.addEventListener('scroll', updatePosition);

    updatePosition();

    return () => {
      window.removeEventListener('scroll', updatePosition);
      clearTimeout(timeoutId); 
    };
  }, []); 

  return scrollPosition;
};