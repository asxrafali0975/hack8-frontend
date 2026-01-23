// src/components/Hero.jsx
import { useEffect, useState, useRef } from "react";
import CountdownTimer from "./CountDown";

export default function Hero() {
  const images = [
    "one.jpeg",
    "two.jpeg",
    "three.jpeg",
    "five.jpeg",
    "seven.jpeg",
    "eight.jpeg",
    "nine.jpeg",
    "ten.jpeg",
  ];

  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  // swipe state
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Start auto-play
  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
  };

  // Stop auto-play
  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Restart autoplay after delay
  const restartAutoPlay = () => {
    stopAutoPlay();
    setTimeout(() => {
      startAutoPlay();
    }, 3000); // wait 3 seconds after user interaction
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  // Manual control
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    restartAutoPlay();
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    restartAutoPlay();
  };

  // Swipe detection
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      // swipe left → next
      nextSlide();
    }
    if (distance < -50) {
      // swipe right → prev
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="relative h-[90vh] w-full overflow-hidden border-t-2 border-t-slate-200"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`slide-${i}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4 sm:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 leading-tight">
          Welcome to{" "}
          <span className="bg-[#26dcf5] text-black px-2 py-1 rounded-lg">
            Hack8
          </span>{" "}
          Hackathon 2025 🚀
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-5 sm:mb-6 max-w-[90%] sm:max-w-xl md:max-w-2xl leading-relaxed">
          Event has ended , Thanks for participating
        </p>

        {/* <CountdownTimer /> */}
      </div>
    </section>
  );
}
