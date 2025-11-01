import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from '../common/Image';

const MissionCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(null);

  const slides = [
    {
      title: "Our Mission",
      content: "To create opportunities for youth to develop their full potential through education, sports, leadership, and community engagement.",
      image: "https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg",
    },
    {
      title: "Our Vision",
      content: "A world where all young people have equal access to opportunities that empower them to become leaders and change-makers in their communities.",
      image: "https://images.pexels.com/photos/8364146/pexels-photo-8364146.jpeg",
    },
    {
      title: "Our Values",
      content: "Integrity, Excellence, Inclusivity, Innovation, and Community. These core values guide our programs and interactions with youth, families, and partners.",
      image: "https://images.pexels.com/photos/8364570/pexels-photo-8364570.jpeg",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="relative py-16 overflow-hidden bg-gray-50 md:py-24">
      <div className="container">
        <div className="relative h-[500px] md:h-[400px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="grid h-full grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center">
                  <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
                    {slides[current].title}
                  </h2>
                  <p className="mb-6 text-lg text-dark-light">
                    {slides[current].content}
                  </p>
                </div>
                <div className="relative order-first md:order-last">
                  <Image
                    src={slides[current].image}
                    alt={slides[current].title}
                    className="object-cover w-full h-64 rounded-lg shadow-lg md:h-full"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute z-10 flex space-x-4 transform -translate-x-1/2 bottom-4 left-1/2 md:bottom-0 md:left-auto md:right-0">
            <button
              onClick={prevSlide}
              className="p-2 text-white transition-colors rounded-full bg-primary hover:bg-primary-dark"
              aria-label="Previous slide"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 text-white transition-colors rounded-full bg-primary hover:bg-primary-dark"
              aria-label="Next slide"
            >
              <FaArrowRight />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute z-10 flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2 md:bottom-0">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionCarousel;
