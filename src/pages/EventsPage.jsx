import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaFilter } from 'react-icons/fa';

const EventsPage = () => {
  useEffect(() => {
    document.title = 'Events - The Opportunity League';
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('All');

  const events = [
    {
      id: 1,
      title: "Summer Basketball Camp",
      date: "July 15-19, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "Community Center, 123 Main St",
      image: "https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg",
      category: "Sports",
      description: "A week-long intensive basketball camp for youth ages 10-16, focusing on skill development, teamwork, and sportsmanship."
    },
    {
      id: 2,
      title: "College Prep Workshop",
      date: "August 5, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Public Library, 456 Oak Ave",
      image: "https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg",
      category: "Education",
      description: "Learn about college applications, financial aid, and scholarship opportunities with our expert counselors."
    },
    {
      id: 3,
      title: "Community Service Day",
      date: "August 12, 2024",
      time: "8:00 AM - 12:00 PM",
      location: "City Park, 789 Park Rd",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
      category: "Community",
      description: "Join us for a morning of community beautification and environmental stewardship projects."
    },
    {
      id: 4,
      title: "Leadership Summit",
      date: "September 10, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Convention Center, 321 Summit Blvd",
      image: "https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg",
      category: "Leadership",
      description: "Annual leadership development conference featuring workshops, keynote speakers, and networking opportunities."
    },
    {
      id: 5,
      title: "Fall Soccer League Registration",
      date: "September 15, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Sports Complex, 654 Athletic Way",
      image: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg",
      category: "Sports",
      description: "Register for our fall soccer league and meet coaches and teammates for the upcoming season."
    },
    {
      id: 6,
      title: "STEM Workshop Series",
      date: "October 1-3, 2024",
      time: "4:00 PM - 6:00 PM",
      location: "Tech Hub, 987 Innovation Dr",
      image: "https://images.pexels.com/photos/8364570/pexels-photo-8364570.jpeg",
      category: "Education",
      description: "Three-day workshop series covering robotics, coding, and engineering challenges for middle and high school students."
    }
  ];

  const categories = ['All', 'Sports', 'Education', 'Community', 'Leadership'];

  const filteredEvents = selectedCategory === 'All' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

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
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Upcoming Events</h1>
            <p className="text-lg text-white/90">
              Join us for exciting opportunities to learn, grow, and connect with your community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center mr-4">
              <FaFilter className="mr-2 text-primary" />
              <span className="font-medium">Filter by category:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white text-dark hover:bg-primary hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            layout
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden transition-shadow bg-white rounded-lg shadow-card hover:shadow-lg"
              >
                <div className="relative h-48">
                  <img
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
                  <p className="mb-4 text-sm text-dark-lighter">{event.description}</p>
                  
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
                  
                  <button className="w-full px-4 py-2 font-medium text-white transition-colors rounded-md bg-primary hover:bg-primary-dark">
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredEvents.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-lg text-dark-lighter">No events found for the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white bg-secondary md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Don't Miss Out!</h2>
            <p className="mb-8 text-lg text-white/90">
              Subscribe to our newsletter to stay updated on all upcoming events and programs.
            </p>
            <a href="/contact" className="btn btn-primary">
              Subscribe to Updates
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;