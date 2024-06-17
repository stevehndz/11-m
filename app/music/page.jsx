"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const img = "/assets/avomusic.jpg";

const Music = () => {
  return (
    <section className="h-full w-full py-6 lg:pt-0 lg:pb-0 bg-accent">
      <div className="container h-full lg:h-[calc(100vh-72px)] mb-8 lg:mb-0 mx-auto grid grid-cols-1 lg:flex">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          className="grid grid-cols-1 lg:flex lg:flex-col justify-center items-center lg:items-start order-2 w-full h-full lg:w-1/2 p-4 gap-4"
        >
          <h1 className="text-5xl lg:text-6xl text-center lg:text-start font-bold">
            Una canción para <span className="text-white/80">ti</span>
          </h1>
          <p className="text-xl font-medium text-center lg:text-start">
            Y pues para hoy, tu regalito no estaría completo sin una canción,
            que sabes muy bien que te la dedico con muchísimo amor para ti mi
            princesa hermosa.
          </p>
          <p className="text-xl font-medium text-center lg:text-start">
            Disfruta muchísimo de tu canción, que la escogí pensando muchísimo
            en tí. Te amo muchísimo.
          </p>
          <div className="flex justify-center items-center lg:items-start gap-2">
            <Link href="/hearts" target="_blank">
              <Button
                size="lg"
                className="bg-white/80 text-primary hover:bg-white/60 hover:text-primary/90 font-bold text-xl lg:text-2xl"
              >
                Ver video
              </Button>
            </Link>
          </div>
        </motion.div>
        <div className="flex justify-center items-center order-1 w-full lg:w-1/2 p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 1.4,
                duration: 0.4,
                ease: "easeInOut",
              },
            }}
            className="w-[268px] h-[268px] lg:w-[428px] lg:h-[428px] xl:w-[468px] xl:h-[468px] mix-blend-hard-light relative"
          >
            <Image
              src={img}
              alt="Imagen descriptiva"
              layout="fill"
              objectFit="cover"
              quality={100}
              unoptimized
              className="rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Music;
