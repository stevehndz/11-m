import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useRouter } from "next/router";
import { useWindowSize } from "react-use";

const HeartIconContainer = ({ children }) => {
  const ref = useRef(null);
  const { isInView } = useInView(ref);

  return (
    <div
      ref={ref}
      className="absolute top-0 left-0 w-full h-full z-50 flex items-center justify-center"
      style={{ opacity: isInView ? 1 : 0 }} // Control opacity based on inView
    >
      {children}
    </div>
  );
};

const HeartIcon = ({ isFilled }) => {
  const className = isFilled ? "text-red-500" : "text-gray-400";
  return (
    <div className={`w-1/3 h-auto ${className}`}>
      {isFilled ? <FaHeart /> : <FaRegHeart />}
    </div>
  );
};

const AnimatedHeart = () => {
  const router = useRouter();
  const { width, height } = useWindowSize();
  const [isFilled, setIsFilled] = useState(true); // Track heart state (filled or empty)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFilled((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeartIconContainer style={{ width, height }}>
      <HeartIcon isFilled={isFilled} />
    </HeartIconContainer>
  );
};
export default AnimatedHeart;
