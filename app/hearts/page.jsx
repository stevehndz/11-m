"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";

const RandomHearts = () => {
  const [selectedHeart, setSelectedHeart] = useState(null);

  const hearts = useRef([]);

  const getRandomPosition = () => {
    let width = window.innerWidth;
    let height = window.innerHeight;

    if (typeof window !== 'undefined') {
      width = window.innerWidth;
      height = window.innerHeight; 
    }

    const minX = 50;
    const maxX = width - 50;
    const minY = 50;
    const maxY = height - 50;

    const randomX = Math.floor(Math.random() * (maxX - minX) + minX);
    const randomY = Math.floor(Math.random() * (maxY - minY) + minY);

    return { x: randomX, y: randomY };
  };

  const getRandomSize = () => {
    const minSize = 50;
    const maxSize = 100;

    return Math.floor(Math.random() * (maxSize - minSize) + minSize);
  };

  const handleHeartClick = (id) => {
    setSelectedHeart(id);
  };

  return (
    <div className="heart-container">
      <div className="flex justify-center items-center z-0 h-[calc(100vh-72px)] w-screen container">
        <h1 className="font-extrabold text-4xl">
          Busca el corazon que tiene el regalo
        </h1>
      </div>
      {Array.from({ length: 8 }).map((_, index) => (
        <motion.div
          key={index}
          ref={(el) => (hearts.current[index] = el)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1,
              delay: index * 0.1,
            },
          }}
          style={{
            position: "absolute",
            top: getRandomPosition().y,
            left: getRandomPosition().x,
            cursor: "pointer",
          }}
        >
          {index === 1 ? (
            <Link href="/letter">
              <FaHeart
                className={`heart ${selectedHeart === index ? "selected" : ""}`}
                style={{
                  fontSize: getRandomSize(),
                  color: selectedHeart === index ? "red" : "#f00",
                }}
              />
            </Link>
          ) : (
            <FaHeart
              className={`heart ${selectedHeart === index ? "selected" : ""}`}
              style={{
                fontSize: getRandomSize(),
                color: selectedHeart === index ? "red" : "#f00",
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default RandomHearts;
