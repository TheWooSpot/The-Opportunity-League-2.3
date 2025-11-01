import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Image from '../common/Image';

const PartnershipSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const partners = [
    {
      name: "City Education Department",
      logo: "https://via.placeholder.com/150x80?text=Education+Dept",
    },
    {
      name: "Community Foundation",
      logo: "https://via.placeholder.com/150x80?text=Community+Foundation",
    },
    {
      name: "Local University",
      logo: "https://via.placeholder.com/150x80?text=University",
    },
    {
      name: "Sports Association",
      logo: "https://via.placeholder.com/150x80?text=Sports+Assoc",
    },
    {
      name: "Tech Company",
      logo: "https://via.placeholder.com/150x80?text=Tech+Co",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 bg-gray-50 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Partners</h2>
          <p className="text-lg text-dark-lighter">
            We collaborate with organizations that share our commitment to youth development and community empowerment.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 gap-6 mb-12 md:grid-cols-5"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-16"
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="p-8 text-center bg-white rounded-lg shadow-card md:p-12">
          <h3 className="mb-4 text-2xl font-bold">Become a Partner</h3>
          <p className="max-w-2xl mx-auto mb-6 text-dark-lighter">
            Join our network of partners and help us create more opportunities for youth in our community. 
            We welcome partnerships with businesses, schools, community organizations, and individuals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/partnerships" className="btn btn-primary">
              Partnership Opportunities
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
