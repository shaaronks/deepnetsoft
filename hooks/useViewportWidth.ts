import { useState, useEffect } from "react";

const useViewportWidth = () => {
  const [viewportWidth, setViewportWidth] = useState<number | null>(null);

  useEffect(() => {
    // Only access window after component mounts in the browser
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setViewportWidth(window.innerWidth);
      };

      // Set initial width
      setViewportWidth(window.innerWidth);

      // Add resize event listener
      window.addEventListener("resize", handleResize);

      // Clean up event listener on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return viewportWidth || 0;
};

export default useViewportWidth;
