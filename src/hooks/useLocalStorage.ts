

import { useState, useEffect } from "react";


function useLocalStorage(key: string, initialValue: any) {

    const [storeValue, setStoredValue] = useState(() => {
        try {

            // read from local storage
            const value = localStorage.getItem(key);

            if (value) {
                return JSON.parse(value);
            } else {
                return initialValue;
            }

        } catch(error) {
            // handle Errors
            console.error(error);
            return initialValue
        }
    })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storeValue));
    } catch (error) {
      console.error("Error setting localStorage key:", key, error);
    }
  }, [key, storeValue]);

  return [storeValue, setStoredValue] as const;
}
export default useLocalStorage;