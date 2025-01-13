"use client";
import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Image from "next/image";

const ImageSwiper = ({
  imageList,
  time,
}: {
  imageList: string[];
  time: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  const prevSlide = () => {
    const index = currentIndex === 0 ? imageList.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === imageList.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, time); // 3초마다 슬라이드 전환

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleTouchStart = (e: TouchEvent) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (touchPosition === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchPosition - currentTouch;

    if (diff > 5) {
      nextSlide();
      setTouchPosition(null);
    }

    if (diff < -5) {
      prevSlide();
      setTouchPosition(null);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        height: "200px",
      }}
      onTouchStart={(e: React.TouchEvent) => handleTouchStart(e.nativeEvent)}
      onTouchMove={(e: React.TouchEvent) => handleTouchMove(e.nativeEvent)}
    >
      {/* 이미지 리스트 */}
      <Box
        sx={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {imageList.map((image, index) => (
          <Box
            key={index}
            flexShrink={0}
            width="100%"
            position="relative"
            height="200px"
          >
            <Image
              src={image}
              alt={`image-${index}`}
              layout="responsive"
              width={150}
              height={200}
              objectFit="cover"
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ImageSwiper;
