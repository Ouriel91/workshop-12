import {useEffect} from "react";

export const useClickOutside = (ref, callback) => {
  // TODO 1: this hook should get a reference to an element and a callback, and will call it whenever you click outside of the element
  useEffect(() => {

    const mousedownOutsideHandler = (e) => {
      if(isClickOutside(ref.current, e)){
        callback()
      }
    }
    document.addEventListener('mousedown', mousedownOutsideHandler)

    return () => document.removeEventListener('mousedown', mousedownOutsideHandler)
  },[ref, callback])
};

const isClickOutside = (element, clickEvent) => {
  return element && !element.contains(clickEvent.target);
};
