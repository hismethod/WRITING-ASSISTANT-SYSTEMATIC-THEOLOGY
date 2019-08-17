import { useRef, useEffect } from 'react';
import throttle from 'lodash.throttle';

const isBrowser = typeof window !== `undefined`;

function getScrollPosition({ element, useWindow }) {
  if (!isBrowser) return { x: 0, y: 0 }

  const target = element ? element.current : document.body;
  const position = target.getBoundingClientRect();

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top }
}

export function useScrollPosition(effect, depends, element, useWindow, throttleTime) {
  const position = useRef(getScrollPosition({ useWindow }));

  useEffect(() => {
    const handleScroll = () => {
      const currPos = getScrollPosition({ element, useWindow });
      effect({ prevPos: position.current, currPos });
      position.current = currPos;
    }

    const throttledHandleScroll = throttle(handleScroll, throttleTime);

    window.addEventListener('scroll', throttledHandleScroll);
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [effect, element, throttleTime, useWindow]);
}

useScrollPosition.defaultProps = {
  depends: [],
  element: false,
  useWindow: false,
  wait: null,
}