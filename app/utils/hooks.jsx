import { useRef, useLayoutEffect } from 'react';

const isBrowser = typeof window !== `undefined`;

/**
 *
 * helper function to get the current scroll position
 *
 */

function getScrollPosition({ element, useWindow }) {
  // check if the DOM is ready, and the window context exists
  if (!isBrowser) return { x: 0, y: 0 };

  // check if component requested the scroll position of the entire page or a specific element

  const target = element ? element.current : document.body;
  const position = target.getBoundingClientRect();

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top };
}

/**
 *
 * helper function to get the current scroll position
 *
 */

export function useScrollPosition(effect, deps, element, useWindow, wait) {
  const position = useRef(getScrollPosition({ useWindow }));

  let throttleTimeout = null;

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow });
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout = null;
  };

  // starts the event listener when component mounts and removes it when it unmounts
  useLayoutEffect(() => {
    // only call callback after wait time to throttle for perfomance
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, deps);
}
