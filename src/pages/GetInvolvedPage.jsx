import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHandsHelping, FaDollarSign, FaUserFriends, FaCalendarCheck } from 'react-icons/fa';

const GetInvolvedPage = () => {
  useEffect(() => {
    document.title = 'Get Involved - The Opportunity League';
  }, []);

  const ways = [
    {
      icon: <FaHandsHelping className="w-16 h-16 text-primary" />,
      title: "Volunteer",
      description: "Join our team of dedicated volunteers and make a direct impact on youth in our community.",
      opportunities: ["Tutoring and mentoring", "Sports coaching", "Event assistance", "Administrative support"],
      cta: "Apply to Volunteer"
    },
    {
      icon: <FaDollarSign className="w-16 h-16 text-primary" />,
      title: "Donate",
      description: "Your financial support helps us expand our programs and reach more youth in need.",
      opportunities: ["Monthly giving", "One-time donations", "Sponsor a program", "Equipment donations"],
      cta: "Make a Donation"
    },
    {
      icon: <FaUserFriends className="w-16 h-16 text-primary" />,
      title: "Partner",
      description: "Collaborate with us to create new opportunities and strengthen our community impact.",
      opportunities: ["Corporate partnerships", "School collaborations", "Community organizations", "Grant partnerships"],
      cta: "Explore Partnerships"
    },
    {
      icon: <FaCalendarCheck className="w-16 h-16 text-primary" />,
      title: "Attend Events",
      description: "Participate in our events to support our mission and connect with the community.",
      opportunities: ["Fundraising events", "Community celebrations", "Educational workshops", "Sports tournaments"],
      cta: "View Events"
    }
  ];

  const testimonials = [
    {
      quote: "Volunteering with The Opportunity League has been incredibly rewarding. Seeing the youth grow and succeed makes every hour worth it.",
      name: "Jennifer Martinez",
      role: "Volunteer Tutor",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg"
    },
    {
      quote: "Our company's partnership with The Opportunity League aligns perfectly with our values. Together, we're making a real difference.",
      name: "Robert Kim",
      role: "Corporate Partner",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
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
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Get Involved</h1>
            <p className="text-lg text-white/90">
              There are many ways to support our mission and make a positive impact on youth in our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ways to Make a Difference</h2>
            <p className="text-lg text-dark-lighter">
              Choose the way that best fits your interests, skills, and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {ways.map((way, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-lg shadow-card"
              >
                <div className="flex items-center mb-4">
                  {way.icon}
                  <h3 className="ml-4 text-2xl font-bold">{way.title}</h3>
                </div>
                <p className="mb-6 text-dark-lighter">{way.description}</p>
                <ul className="mb-6 space-y-2">
                  {way.opportunities.map((opportunity, oppIndex) => (
                    <li key={oppIndex} className="flex items-center">
                      <div className="w-2 h-2 mr-3 rounded-full bg-primary"></div>
                      <span>{opportunity}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full px-6 py-3 font-medium text-white transition-colors rounded-md bg-primary hover:bg-primary-dark">
                  {way.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-16 bg-gray-50 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold">Volunteer Application</h2>
              <p className="text-lg text-dark-lighter">
                Ready to get started? Fill out this form and we'll be in touch soon.
              </p>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-lg shadow-card"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block mb-2 font-medium">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="mt-6">
                <label className="block mb-2 font-medium">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="mt-6">
                <label className="block mb-2 font-medium">Areas of Interest</label>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                  {['Tutoring/Mentoring', 'Sports Coaching', 'Event Support', 'Administrative', 'Fundraising', 'Other'].map((area) => (
                    <label key={area} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>{area}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <label className="block mb-2 font-medium">Tell us about yourself and why you want to volunteer</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Share your background, interests, and motivation..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 mt-6 font-medium text-white transition-colors rounded-md bg-primary hover:bg-primary-dark"
              >
                Submit Application
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">What Our Supporters Say</h2>
            <p className="text-lg text-dark-lighter">
              Hear from volunteers and partners about their experience with The Opportunity League.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-lg shadow-card"
              >
                <p className="mb-4 text-lg italic text-dark-lighter">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="object-cover w-12 h-12 mr-4 rounded-full"
                  />
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-dark-lighter">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolvedPage;