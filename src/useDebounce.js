import { useRef } from "react";

export default function useDebounce(callback, delay) {
  const timeoutRef = useRef(null);

  function debounceFunction(...args) {
    window.clearTimeout(timeoutRef.current); //clearing the previous timeouts

    timeoutRef.current = window.setTimeout(() => {
      callback(...args);
    }, delay)
  }
  
  return debounceFunction;
}