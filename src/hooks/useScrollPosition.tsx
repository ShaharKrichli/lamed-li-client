import { useEffect, useState } from 'react'

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;

    const updatePosition = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScrollPosition(window.scrollY);
      }, 18); // Adjust the debounce time (in milliseconds) to your preference
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', updatePosition);

    // Call the update function initially to get the initial scroll position
    updatePosition();

    // Detach the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', updatePosition);
      clearTimeout(timeoutId); // Clear any pending updates when unmounting
    };
  }, []); // Empty dependency array ensures that the effect runs only once during mount

  return scrollPosition;
};