import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Image from '../common/Image';

const UpcomingEvents = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const events = [
    {
      id: 1,
      title: "Summer Basketball Camp",
      date: "July 15-19, 2023",
      time: "9:00 AM - 3:00 PM",
      location: "Community Center, 123 Main St",
      image: "https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Sports",
    },
    {
      id: 2,
      title: "College Prep Workshop",
      date: "August 5, 2023",
      time: "10:00 AM - 2:00 PM",
      location: "Public Library, 456 Oak Ave",
      image: "https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Education",
    },
    {
      id: 3,
      title: "Community Service Day",
      date: "August 12, 2023",
      time: "8:00 AM - 12:00 PM",
      location: "City Park, 789 Park Rd",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Community",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex flex-col items-center justify-between mb-12 md:flex-row">
          <div>
            <h2 className="section-title">Upcoming Events</h2>
            <p className="section-subtitle">
              Join us for these exciting opportunities to learn, grow, and connect.
            </p>
          </div>
          <Link to="/events" className="mt-4 btn btn-outline md:mt-0">
            View All Events
          </Link>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              className="overflow-hidden transition-shadow bg-white rounded-lg shadow-card hover:shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 right-4 px-3 py-1 text-sm font-medium text-white rounded-full bg-primary">
                  {event.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold">{event.title}</h3>
                
                <div className="mb-4 space-y-2">
                  <div className="flex items-center text-dark-lighter">
                    <FaCalendarAlt className="mr-2 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  
                  <div className="flex items-center text-dark-lighter">
                    <FaClock className="mr-2 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-dark-lighter">
                    <FaMapMarkerAlt className="mr-2 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <Link
                  to={`/events/${event.id}`}
                  className="inline-block px-4 py-2 font-medium transition-colors border-2 rounded-md border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
