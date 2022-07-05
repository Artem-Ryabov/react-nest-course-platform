import { AxiosPromise } from 'axios';
import { useCallback, useEffect, useState } from 'react';

const useAsync = <T>(callback: () => AxiosPromise<T>, dependencies = []) => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState<T>();
  const [error, setError] = useState();

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    callback()
      .then((v) => setValue(v.data))
      .catch(setError)
      .finally(() => setLoading(false));
  }, dependencies);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return { loading, value, error };
};

export default useAsync;
