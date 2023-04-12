import { useState, useCallback } from 'react';

export default (initialState) => {
  const [value, setValue] = useState(initialState);
  const handler = useCallback((e) => {
    setValue(true);
  }, []);
  return [value, handler, setValue];
}
