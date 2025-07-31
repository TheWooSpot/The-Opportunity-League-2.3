import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "The Opportunity League changed my life. Through their mentorship program, I gained the confidence to apply to college and became the first in my family to earn a degree.",
      name: "Jamal Williams",
      role: "Program Graduate",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      quote: "My daughter has flourished in the after-school program. Her grades have improved, and she's developed leadership skills that have made her more confident in all areas of her life.",
      name: "Maria Rodriguez",
      role: "Parent",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      quote: "Partnering with The Opportunity League has been incredibly rewarding. Their commitment to youth development aligns perfectly with our community values.",
      name: "David Chen",
      role: "Community Partner",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gray-50 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Success Stories</h2>
          <p className="text-lg text-dark-lighter">
            Hear from the youth, families, and partners who have experienced the impact of our programs.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-white rounded-lg shadow-card md:p-12"
            >
              <FaQuoteLeft className="mb-6 text-4xl text-primary/20" />
              
              <div className="flex flex-col items-center md:flex-row md:items-start">
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="object-cover w-24 h-24 rounded-full"
                  />
                </div>
                
                <div>
                  <blockquote className="mb-6 text-lg italic text-dark-light">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  
                  <div>
                    <p className="font-bold text-dark">{testimonials[currentIndex].name}</p>
                    <p className="text-dark-lighter">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 text-white transition-colors rounded-full bg-primary hover:bg-primary-dark"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            
            {/* Indicators */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 text-white transition-colors rounded-full bg-primary hover:bg-primary-dark"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
