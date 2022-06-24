import {useState, useEffect} from "react";

export const useDebounce = (value, delay) => {
  // TODO 4: Currently the app fetches pokemons on each char change in your input,
  //         implement useDebounce hook in order to minimize unnecessary requests.
  //         this hook should get a value and delay and return a debounced value

  const [debounce, setDebounce] = useState(value)

  useEffect(() => {
    const handlerDebounce = () => {
      setTimeout(() => {
        setDebounce(value);
      }, delay)
    }

    return () => clearTimeout(handlerDebounce)
  },[value, delay])

  return debounce;
};
