import { useEffect, useState } from 'react';

const useFakeLoading = (deps: any = [], delay: number = 200) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, deps);

  return { isLoading, setIsLoading };
};

export default useFakeLoading;
