import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaEye, FaStar } from 'react-icons/fa';
import Image from '../components/common/Image';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Us - The Opportunity League';
  }, []);

  const values = [
    {
      icon: <FaHeart className="w-12 h-12 text-primary" />,
      title: "Integrity",
      description: "We act with honesty, transparency, and ethical principles in all our interactions."
    },
    {
      icon: <FaStar className="w-12 h-12 text-primary" />,
      title: "Excellence",
      description: "We strive for the highest quality in our programs and services to youth."
    },
    {
      icon: <FaEye className="w-12 h-12 text-primary" />,
      title: "Inclusivity",
      description: "We welcome and celebrate diversity, ensuring all youth feel valued and supported."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Executive Director",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg",
      bio: "Sarah has over 15 years of experience in youth development and nonprofit leadership."
    },
    {
      name: "Marcus Thompson",
      role: "Program Director",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      bio: "Marcus leads our educational and sports programs with passion and expertise."
    },
    {
      name: "Lisa Chen",
      role: "Community Outreach Manager",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      bio: "Lisa builds partnerships and connects our programs with the broader community."
    }
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
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">About Us</h1>
            <p className="text-lg text-white/90">
              Learn about our mission, values, and the dedicated team working to empower youth in our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Story</h2>
              <p className="mb-4 text-lg text-dark-lighter">
                Founded in 2010, The Opportunity League began as a small community initiative to provide 
                after-school tutoring for local students. What started with just five volunteers and 
                fifteen students has grown into a comprehensive youth development organization serving 
                thousands of young people annually.
              </p>
              <p className="mb-4 text-lg text-dark-lighter">
                Our founders recognized that youth needed more than just academic support – they needed 
                opportunities to develop leadership skills, engage in healthy activities, and connect 
                with their community. This holistic approach has been the foundation of our success.
              </p>
              <p className="text-lg text-dark-lighter">
                Today, we continue to evolve and expand our programs while staying true to our core 
                mission of empowering youth to reach their full potential.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Image
                src="https://images.pexels.com/photos/8364146/pexels-photo-8364146.jpeg"
                alt="Youth participating in programs"
                className="object-cover w-full h-96 rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="mb-4 text-2xl font-bold text-primary">Our Mission</h3>
              <p className="text-dark-lighter">
                To create opportunities for youth to develop their full potential through education, 
                sports, leadership, and community engagement.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="mb-4 text-2xl font-bold text-primary">Our Vision</h3>
              <p className="text-dark-lighter">
                A world where all young people have equal access to opportunities that empower them 
                to become leaders and change-makers in their communities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="mb-4 text-2xl font-bold text-primary">Our Impact</h3>
              <p className="text-dark-lighter">
                Over 5,000 youth served, 95% high school graduation rate, and 85% college acceptance 
                rate among our program participants.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Values</h2>
            <p className="text-lg text-dark-lighter">
              These core values guide everything we do and shape our interactions with youth, families, and partners.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 text-center bg-white rounded-lg shadow-card"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
                <p className="text-dark-lighter">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Team</h2>
            <p className="text-lg text-dark-lighter">
              Meet the dedicated professionals who make our programs possible.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="p-6 text-center bg-white rounded-lg shadow-card"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-24 h-24 mx-auto mb-4 rounded-full"
                />
                <h3 className="mb-2 text-xl font-bold">{member.name}</h3>
                <p className="mb-3 font-medium text-primary">{member.role}</p>
                <p className="text-sm text-dark-lighter">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;