import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Us - The Opportunity League';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FaPhone className="w-6 h-6 text-primary" />,
      title: "Phone",
      details: "(212) 555-1234",
      link: "tel:+12125551234"
    },
    {
      icon: <FaEnvelope className="w-6 h-6 text-primary" />,
      title: "Email",
      details: "info@opportunityleague.org",
      link: "mailto:info@opportunityleague.org"
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6 text-primary" />,
      title: "Address",
      details: "123 Opportunity Way\nNew York, NY 10001",
      link: "https://maps.google.com"
    },
    {
      icon: <FaClock className="w-6 h-6 text-primary" />,
      title: "Office Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM",
      link: null
    }
  ];

  const departments = [
    {
      name: "General Information",
      email: "info@opportunityleague.org",
      description: "General inquiries and information about our programs"
    },
    {
      name: "Programs",
      email: "programs@opportunityleague.org",
      description: "Questions about our educational and sports programs"
    },
    {
      name: "Volunteer Opportunities",
      email: "volunteer@opportunityleague.org",
      description: "Information about volunteering and getting involved"
    },
    {
      name: "Partnerships",
      email: "partnerships@opportunityleague.org",
      description: "Corporate partnerships and collaboration opportunities"
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
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact Us</h1>
            <p className="text-lg text-white/90">
              We'd love to hear from you. Get in touch with us for any questions, suggestions, or to learn more about our programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-3xl font-bold">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Information</option>
                    <option value="programs">Program Inquiry</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="donation">Donation Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 font-medium text-white transition-colors rounded-md bg-primary hover:bg-primary-dark"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:pl-8"
            >
              <h2 className="mb-6 text-3xl font-bold">Get in Touch</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 p-3 rounded-full bg-primary/10">
                      {info.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-dark">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-dark-lighter hover:text-primary"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.details.split('\n').map((line, i) => (
                            <div key={i}>{line}</div>
                          ))}
                        </a>
                      ) : (
                        <div className="text-dark-lighter">
                          {info.details.split('\n').map((line, i) => (
                            <div key={i}>{line}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="mb-4 font-bold">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-white transition-colors rounded-full bg-primary hover:bg-primary-dark"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-white transition-colors rounded-full bg-primary hover:bg-primary-dark"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-white transition-colors rounded-full bg-primary hover:bg-primary-dark"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 bg-gray-50 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Department Contacts</h2>
            <p className="text-lg text-dark-lighter">
              For specific inquiries, you can reach out directly to the appropriate department.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-lg shadow-card"
              >
                <h3 className="mb-2 text-xl font-bold">{dept.name}</h3>
                <p className="mb-3 text-sm text-dark-lighter">{dept.description}</p>
                <a
                  href={`mailto:${dept.email}`}
                  className="font-medium text-primary hover:text-primary-dark"
                >
                  {dept.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold">Visit Our Office</h2>
            <p className="text-lg text-dark-lighter">
              We're located in the heart of the community we serve. Stop by during office hours or schedule an appointment.
            </p>
          </div>
          
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
              <p className="text-dark-lighter">Interactive map would be embedded here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;