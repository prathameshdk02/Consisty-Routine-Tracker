import { useState, useEffect, useRef } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const retVal = localStorage.getItem(key);
    if (retVal == null) {
      if (initialValue != null) {
        localStorage.setItem(key, JSON.stringify(initialValue));
      }
      return initialValue;
    }
    return JSON.parse(retVal);
  });

  const setLocalItem = (newValue) => {
    setValue((prevValue) => {
      const resultVal = typeof newValue === 'function' ? newValue(prevValue) : newValue;
      if (resultVal != null) {
        localStorage.setItem(key, JSON.stringify(resultVal));
      }
      return resultVal;
    });
  };

  // Handling localStorage updates over multiple tabs - Sync
  useEffect(() => {
    const updateLocalStorage = (e) => {
      if (e.storageArea == localStorage && e.key == key) {
        setValue(JSON.parse(e.newValue));
      }
    };
    window.addEventListener('storage', updateLocalStorage);

    return () => {
      window.removeEventListener('storage', updateLocalStorage);
    };
  }, [key]);

  return [value, setLocalItem, setValue];
};

export default useLocalStorage;
