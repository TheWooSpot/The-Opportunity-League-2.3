import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBasketballBall, FaUsers, FaHandsHelping } from 'react-icons/fa';

const WhatWeDo = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const programs = [
    {
      title: "Educational Support",
      description: "Tutoring, mentoring, and academic enrichment programs to help students succeed in school and prepare for higher education.",
      icon: <FaGraduationCap className="w-12 h-12 text-primary" />,
    },
    {
      title: "Sports Programs",
      description: "Basketball, soccer, and other sports programs that teach teamwork, discipline, and healthy lifestyle habits.",
      icon: <FaBasketballBall className="w-12 h-12 text-primary" />,
    },
    {
      title: "Leadership Development",
      description: "Workshops, conferences, and hands-on experiences that build leadership skills and prepare youth for future success.",
      icon: <FaUsers className="w-12 h-12 text-primary" />,
    },
    {
      title: "Community Advocacy",
      description: "Initiatives that empower youth to identify community needs and develop solutions through service and civic engagement.",
      icon: <FaHandsHelping className="w-12 h-12 text-primary" />,
    },
  ];

  return (
    <section className="section bg-white" id="what-we-do">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">
            Our comprehensive approach addresses the academic, physical, social, and emotional needs of youth.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-white rounded-lg shadow-card hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10">
                {program.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-center">{program.title}</h3>
              <p className="text-center text-dark-light">{program.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <a href="/programs" className="btn btn-primary">
            Learn More About Our Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
