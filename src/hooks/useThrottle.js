import { useEffect, useRef, useCallback } from "react";

const useThrottle = (callback, threshold) => {
  const wait = useRef(false);
  const timeout = useRef(-1);

  useEffect(() => () => clearTimeout(timeout.current), []); // No need for deps here since 'timeout' is mutated

  return useCallback((...args) => {
    if (!wait.current) {
      callback(...args);
      wait.current = true;
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        wait.current = false;
      }, threshold);
    }
  }, [callback, threshold]);
};

export default useThrottle;