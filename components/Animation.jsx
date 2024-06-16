import { motion } from "framer-motion";
import useWindowHeight from "@/app/currentHeight";

// Variants
const Animation = () => {
  const height = useWindowHeight();

  // const stairAnimation = {
  //   initial: {
  //     scale: 0,
  //   },
  //   animate: {
  //     scale: 4,
  //   },
  //   exit: {
  //     scale: 0,
  //   },
  // };

  return (
    <>
      <motion.div
        // variants={stairAnimation}
        initial={{ scale: [0, 0, 0] }}
        animate={{
          scale: [0, 2, 0],
          opacity: [0, 1, 0],
          delay: 1,
          duration: 2,
          repeat: 0,
        }}
        className="top-0 right-0 fixed h-[1920px] w-[1920px] bg-accent rounded-full"
      />
    </>
  );
};

export default Animation;
