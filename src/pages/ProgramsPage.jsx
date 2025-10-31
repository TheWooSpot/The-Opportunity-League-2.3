import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBasketballBall, FaUsers, FaHandsHelping } from 'react-icons/fa';

const ProgramsPage = () => {
  useEffect(() => {
    document.title = 'Our Programs - The Opportunity League';
  }, []);

  const programs = [
    {
      title: "Educational Support",
      description: "Comprehensive tutoring, mentoring, and academic enrichment programs designed to help students excel in school and prepare for higher education opportunities.",
      icon: <FaGraduationCap className="w-16 h-16 text-primary" />,
      features: ["One-on-one tutoring", "Study groups", "College prep workshops", "Scholarship assistance"],
      image: "https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg"
    },
    {
      title: "Sports Programs",
      description: "Basketball, soccer, and other sports programs that teach teamwork, discipline, leadership, and promote healthy lifestyle habits.",
      icon: <FaBasketballBall className="w-16 h-16 text-primary" />,
      features: ["Basketball leagues", "Soccer training", "Fitness programs", "Sports camps"],
      image: "https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg"
    },
    {
      title: "Leadership Development",
      description: "Workshops, conferences, and hands-on experiences that build essential leadership skills and prepare youth for future success.",
      icon: <FaUsers className="w-16 h-16 text-primary" />,
      features: ["Leadership workshops", "Public speaking", "Project management", "Peer mentoring"],
      image: "https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg"
    },
    {
      title: "Community Advocacy",
      description: "Initiatives that empower youth to identify community needs and develop innovative solutions through service and civic engagement.",
      icon: <FaHandsHelping className="w-16 h-16 text-primary" />,
      features: ["Community service", "Civic engagement", "Social justice projects", "Environmental initiatives"],
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 text-white bg-primary md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Programs</h1>
            <p className="text-lg text-white/90">
              Comprehensive programs designed to empower youth through education, sports, leadership, and community engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:gap-16">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-4">
                    {program.icon}
                    <h2 className="ml-4 text-3xl font-bold">{program.title}</h2>
                  </div>
                  <p className="mb-6 text-lg text-dark-lighter">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 mr-3 rounded-full bg-primary"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="object-cover w-full h-64 rounded-lg shadow-lg md:h-80"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white bg-secondary md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Get Started?</h2>
            <p className="mb-8 text-lg text-white/90">
              Join our programs and start your journey toward personal growth and community impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/get-involved" className="btn btn-primary">
                Apply Now
              </a>
              <a href="/contact" className="btn btn-outline">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;