import React, { useState, useEffect } from "react";

const images = [
  "/art2.jpeg",
  "/art3.jpeg",
  "/art4.jpeg",
    "/art5.jpeg",   
    "/art6.jpeg",
    "/art7.jpeg",
    "/art8.jpeg",
    "/art9.jpeg",
    "/art10.jpeg",
    "/art11.jpeg",
    "/art12.jpeg",
    
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change image every 3 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="hero-slider"
      style={{
        backgroundImage: `url(${images[index]})`
      }}
    >
      <div className="hero-overlay">
        <h1 className="hero-title">ArtWithLove</h1>
      </div>
    </div>
  );
}
