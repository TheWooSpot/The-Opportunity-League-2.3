import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ImpactStats = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    { value: 5000, label: "Youth Served", suffix: "+" },
    { value: 95, label: "High School Graduation Rate", suffix: "%" },
    { value: 85, label: "College Acceptance Rate", suffix: "%" },
    { value: 25, label: "Community Partners", suffix: "+" },
  ];

  return (
    <section className="py-16 text-white bg-primary md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Impact</h2>
          <p className="text-lg text-white/80">
            For over a decade, we've been making a difference in the lives of youth across our communities.
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              inView={inView}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const StatCounter = ({ value, label, suffix = "", inView, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // ms
    const increment = value / (duration / 16); // 60fps

    if (inView) {
      const timer = setInterval(() => {
        start += increment;
        if (start > value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <motion.div
      className="p-6 text-center"
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex items-center justify-center mb-2 text-5xl font-bold md:text-6xl font-heading">
        {count}
        <span>{suffix}</span>
      </div>
      <p className="text-lg font-medium text-white/90">{label}</p>
    </motion.div>
  );
};

export default ImpactStats;
