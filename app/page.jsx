"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const img = "/assets/avocado.gif";
const img2 = "/assets/avocado-2.gif";

export default function Home() {
  return (
    <section className="h-full w-full py-6 lg:pt-0 lg:pb-0">
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
            Felices <span className="text-accent">11</span> Meses
          </h1>
          <p className="text-xl font-medium text-center lg:text-start">
            Y cuando vi tu sonrisa lo supe. Esa era la sonrisa que siempre
            quería y quiero ver siempre al despertar, cada día, por siempre.
          </p>
          <p className="text-xl font-medium text-center lg:text-start">
            Y por eso mi mayor deseo es también hacerte muy feliz todos los
            días, porque tu mereces ser muy feliz por siempre. Este regalito es
            para ti mi amor.
          </p>
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
            className="w-[268px] h-[268px] lg:w-[428px] lg:h-[428px] xl:w-[468px] xl:h-[468px] relative"
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
      <div className="container h-full lg:h-[calc(100vh-72px)] mx-auto grid grid-cols-1 lg:flex">
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
          className="grid grid-cols-1 lg:flex lg:flex-col justify-center items-center lg:items-start order-2 lg:order-1 w-full h-full lg:w-1/2 p-4 gap-4"
        >
          <h1 className="text-5xl lg:text-6xl text-center lg:text-start font-bold">
            <span className="text-accent">Disfruta</span>
          </h1>
          <p className="text-xl font-medium text-center lg:text-start">
            Aquí te esperan muchas sorpresas mi amor, ya sabes que solo tienes que disfrutar lo que tengo preparado para ti, sabes muy bien que lo hago con mucho amor.
          </p>
          <p className="text-xl font-medium text-center lg:text-start">
            Si quieres puede ir a ver las sopresas aquí o pues buscar arriba en la barra. Que sepas que te amo muchísimo mi amor. Felices 11 meses.
          </p>
          <div className="flex justify-center items-center lg:items-start gap-2">
            <Link href="/hearts">
              <Button
                size="lg"
                className="bg-primary hover:bg-secondary-hover hover:text-white/90 font-bold text-xl lg:text-2xl"
              >
                Regalito
              </Button>
            </Link>
          </div>
        </motion.div>
        <div className="flex justify-center items-center order-1 lg:order-2 w-full lg:w-1/2 p-4">
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
            className="w-[268px] h-[268px] lg:w-[428px] lg:h-[428px] xl:w-[468px] xl:h-[468px] relative"
          >
            <Image
              src={img2}
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
}
