import { useEffect, useState } from 'react';

function getWindowSizes(){
  return {
    width: window.innerWidth,
    height: window.innerHeight
  }
}

export default function(){
  let [ windowSize, setWindowSize ] = useState(getWindowSizes());
  let resizeHandler = () => setWindowSize(getWindowSizes());

  useEffect(() => {
    // BEGIN Add logic of hook
    window.addEventListener('resize', resizeHandler);
    // END

    return () => { // call after removing components
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return windowSize; // result of hook
}
