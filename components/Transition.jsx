"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Animation from "./Animation";

const Transition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Animation />
          </div>

          <motion.div
            className="h-[1920px] w-[1920px] items-center justify-center fixed rounded-full bg-primary pointer-events-none"
            initial={{ opacity: 1, scale: 4 }}
            animate={{
              scale: 0,
              transition: {
                delay: 0.2,
                duration: 1,
                ease: "easeInOut",
              },
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default Transition;
