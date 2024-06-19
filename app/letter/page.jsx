"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Link from "next/link";
import Image from "next/image";

import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    title: "Mi Amor",
    description:
      "No hay nada mejor ni mas lindo que una historia que comienza por casualidad, aunque a lo nuestro, yo no lo llamaría solo casualidad, y lo sabes muy bien que lo nuestro ha sido cosa del destino, algo que estaba planeado, que en serio esperaba a vivir contigo mi amor. Eres justo todo lo que necesitaba en una persona, y también te lo he dicho, que me has dado muchísimo más de lo que he podido imaginar.",
    image: "/assets/forever.jpg",
  },
  {
    title: "Por siempre",
    description:
      "Sabes muy bien que eres lo más importante de mi vida, te has convertido en eso desde que llegaste la primera vez, sin ti no podría haber felicidad en mi corazón, eres quien me anima cada día a seguir adelante. Sobre todo, que sepas que por muy lejos que estemos del otro, que nunca dudes de mi amor que siempre estará ahí apra ti, mientras mi corazoncito siga latiendo, únicamente para tí mi amor.",
    image: "/assets/love.jpg",
  },
  {
    title: "A empezar",
    description:
      "Si tuviese que empezar mi vida de nuevo, estoy muy seguro que empezaría a buscarte a ti de nuevo, para no repetir los mismos errores, para ir directo a tí que me has dado la mayor felicidad que puedo tener, que no me has fallado nunca, y aunque ese nunca sea tan cortito, la verdad es que el tiempo que paso contigo me parece algo de hace siglos, que va lento pero formándose en algo tan maravilloso y tan lindo como tú lo eres.",
    image: "/assets/route.jpg",
  },
  {
    title: "Con Amor",
    description:
      "Te digo que lo único que necesito de tí es que me púedas dar tú mano para nuca jamás soltarla, toma mi corazón que sabes muy bien que es todo tuyo, porque me siento muy seguro al saber que tú cuidas de mi, abrázame por siempre, dame todos esos besos tuyos tan lindos, porque con todo eso, con todo lo que tú eres yo soy muy feliz. Te amo muchísimo mi linda princesita.",
    image: "/assets/hug.jpg",
  },
];

const Letter = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] lg:h-[calc(100vh-72px)] flex flex-col justify-center py-4 lg:py-12 lg:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-[30px]">
          <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-[15px] lg:gap-[30px] mb-8 lg:mb-0 md:mr-0 lg:mr-12">
              {/* ourline num */}
              <div className="text-4xl lg:text-6xl leading-none font-extrabold text-accent">
                {project.title}
              </div>
              {/* project description */}
              <p className="text-primary text-lg">{project.description}</p>
              {/* border */}
              <div className="border border-white/20"></div>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="lg:h-[480px] mb-12 lg:mb-0"
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[420px] lg:h-[400px] relative group flex justify-center items-center bg-pink-50/20 rounded-3xl">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 rounded-3xl"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover rounded-3xl"
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles={
                  "flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none"
                }
                btnStyles={
                  "bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                }
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Letter;
