import { useState, useEffect, useCallback } from 'react';

export function useFetch(fetchTokenProducer) {
  const [abortFetch, setAbortFetch] = useState(null);

  useEffect(() => () => abortFetch && abortFetch(), [abortFetch]);

  return useCallback((...args) => {
    const [fetchPromise, abort] = fetchTokenProducer(...args);
    setAbortFetch(abort);
    return fetchPromise;
  }, [fetchTokenProducer]);
}
