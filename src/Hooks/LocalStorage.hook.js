import { useEffect, useState } from 'react';

export function useLocalStorage(key, initialValue) {
  const itemSaved = localStorage.getItem(key);

  let value;
  try {
    value = JSON.parse(itemSaved);
  } catch {
    value = itemSaved;
  }

  const saveItem = (value) => {
    setItem(value);
  };

  const [item, setItem] = useState(itemSaved ? value : initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(item));
  }, [key, item]);

  return {
    item,
    saveItem,
  };
}
