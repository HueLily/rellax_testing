// RellaxWrapper.js
import React, { useEffect, useRef } from 'react';
import Rellax from 'rellax';

const RellaxWrapper = ({ children, speed = 0 }) => {
  const rellaxRef = useRef(null);

  useEffect(() => {
    const rellaxInstance = new Rellax(rellaxRef.current, {
      speed,
    });

    return () => {
      rellaxInstance.destroy();
    };
  }, [speed]);

  return (
    <div ref={rellaxRef}>
      {children}
    </div>
  );
};

export default RellaxWrapper;
