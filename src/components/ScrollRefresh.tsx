import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollRefresh: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollRefresh;
