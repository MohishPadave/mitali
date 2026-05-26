import { useState, useEffect } from 'react';

export function useScrollPosition(threshold = 50) {
  const [scrollState, setScrollState] = useState({
    y: 0,
    isScrolled: false,
    scrollDirection: 'up',
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      
      setScrollState({
        y: currentScrollY,
        isScrolled: currentScrollY > threshold,
        scrollDirection: direction,
      });

      lastScrollY = currentScrollY;
    };

    // Initialize on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrollState;
}
