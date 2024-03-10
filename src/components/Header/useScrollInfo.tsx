import { useEffect, useState } from 'react';

const HEADER_HEIGHT = 55;

export default function useScrollInfo() {
  const [scrollInfo, setScrollInfo] = useState({ translateY: 0, prevScrollPos: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollAmount = Math.abs(currentScrollPos - scrollInfo.prevScrollPos);
      const scrollDirection = currentScrollPos > scrollInfo.prevScrollPos ? 'down' : 'up';

      setScrollInfo((prev) => ({
        translateY:
          scrollDirection === 'down'
            ? Math.max(prev.translateY - scrollAmount, -HEADER_HEIGHT)
            : Math.min(prev.translateY + scrollAmount, 0),
        prevScrollPos: currentScrollPos,
      }));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollInfo]);

  return scrollInfo.translateY;
}
