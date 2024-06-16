import { useState, useEffect } from 'react';

const useWindowHeight = () => {
  // Initialize state with undefined height for initial render
  const [height, setHeight] = useState(undefined);

  useEffect(() => {
    // Function to update window height on resize
    const handleResize = () => {
      setHeight(window.innerHeight);
    }

    // Attach resize event listener on component mount
    window.addEventListener("resize", handleResize);

    // Call handler to set initial height
    handleResize();

    // Cleanup function to remove listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return height;
};

export default useWindowHeight;