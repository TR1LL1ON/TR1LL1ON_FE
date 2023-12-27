import React, { useState, useEffect, ReactNode } from 'react';

interface DelayedFallbackProps {
  delay: number;
  fallback: ReactNode;
}

const DelayedFallback: React.FC<DelayedFallbackProps> = ({
  delay,
  fallback,
}) => {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowFallback(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return showFallback ? fallback : null;
};

export default DelayedFallback;
