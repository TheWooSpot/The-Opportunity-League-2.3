import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaSearch } from 'react-icons/fa';
import { supabase } from '../lib/supabase';

const EventsPage = () => {
  useEffect(() => {
    document.title = 'Events - The Opportunity League';
  }, []);

  const [searchKeywords, setSearchKeywords] = useState('');
  const [selectedAge, setSelectedAge] = useState('All');
  const [selectedInterest, setSelectedInterest] = useState('All');
  const [selectedDay, setSelectedDay] = useState('All');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const ageRanges = [
    { label: 'All', value: 'All', color: 'bg-gray-500' },
    { label: 'Infancy (0-1)', value: 'Infancy', color: 'bg-pink-500' },
    { label: 'Toddler (1-3)', value: 'Toddler', color: 'bg-rose-500' },
    { label: 'Preschool (3-5)', value: 'Preschool', color: 'bg-blue-500' },
    { label: 'School-Age (6-11)', value: 'School-Age', color: 'bg-green-500' },
    { label: 'Early Teens (12-17)', value: 'Early Teens', color: 'bg-orange-500' },
    { label: 'Late Teens (18-21)', value: 'Late Teens', color: 'bg-red-500' }
  ];

  const interests = [
    { label: 'All', value: 'All', color: 'bg-gray-500' },
    { label: 'Youth Sports', value: 'Youth Sports', color: 'bg-emerald-500' },
    { label: 'Mentorship', value: 'Mentorship', color: 'bg-cyan-500' },
    { label: 'College & Career Prep', value: 'College & Career Prep', color: 'bg-amber-500' },
    { label: 'Parent Advocacy', value: 'Parent Advocacy', color: 'bg-rose-500' },
    { label: 'STEM', value: 'STEM', color: 'bg-cyan-600' },
    { label: 'Arts', value: 'Arts', color: 'bg-fuchsia-500' },
    { label: 'Science', value: 'Science', color: 'bg-teal-500' },
    { label: 'Music', value: 'Music', color: 'bg-amber-600' },
    { label: 'Outdoors & Recreation', value: 'Outdoors & Recreation', color: 'bg-lime-500' },
    { label: 'Leadership Development', value: 'Leadership Development', color: 'bg-sky-500' },
    { label: 'Life Skills', value: 'Life Skills', color: 'bg-stone-500' },
    { label: 'Technology', value: 'Technology', color: 'bg-slate-500' },
    { label: 'Health & Wellness', value: 'Health & Wellness', color: 'bg-green-600' },
    { label: 'Community Service', value: 'Community Service', color: 'bg-blue-600' }
  ];

  const daysOfWeek = [
    { label: 'All', value: 'All', color: 'bg-gray-500' },
    { label: 'Sunday', value: 'Sunday', color: 'bg-red-400' },
    { label: 'Monday', value: 'Monday', color: 'bg-orange-400' },
    { label: 'Tuesday', value: 'Tuesday', color: 'bg-yellow-400' },
    { label: 'Wednesday', value: 'Wednesday', color: 'bg-green-400' },
    { label: 'Thursday', value: 'Thursday', color: 'bg-blue-400' },
    { label: 'Friday', value: 'Friday', color: 'bg-cyan-400' },
    { label: 'Saturday', value: 'Saturday', color: 'bg-rose-400' }
  ];

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true });

      if (error) throw error;
      setEvents(data || []);
    } catch (error) {
      console.error('Error fetching events:', error);
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredEvents = events.filter(event => {
    const matchesKeywords = searchKeywords === '' ||
      event.title.toLowerCase().includes(searchKeywords.toLowerCase()) ||
      event.description.toLowerCase().includes(searchKeywords.toLowerCase()) ||
      event.interest.toLowerCase().includes(searchKeywords.toLowerCase());

    const matchesAge = selectedAge === 'All' || event.age_range === selectedAge;
    const matchesInterest = selectedInterest === 'All' || event.interest === selectedInterest;
    const matchesDay = selectedDay === 'All' || event.day_of_week === selectedDay;

    return matchesKeywords && matchesAge && matchesInterest && matchesDay;
  });

  const getColorForAge = (age) => {
    const ageRange = ageRanges.find(range => range.value === age);
    return ageRange ? ageRange.color : 'bg-gray-500';
  };

  const getColorForInterest = (interest) => {
    const interestItem = interests.find(item => item.value === interest);
    return interestItem ? interestItem.color : 'bg-gray-500';
  };

  const getColorForDay = (day) => {
    const dayItem = daysOfWeek.find(item => item.value === day);
    return dayItem ? dayItem.color : 'bg-gray-500';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="pt-20">
      <section className="py-16 text-white bg-primary md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Find Your Perfect Event</h1>
            <p className="text-lg text-white/90">
              Discover upcoming events tailored to your age, interests, and schedule. Search through our offerings to find the perfect opportunity.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative">
              <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-primary text-2xl" />
              <input
                type="text"
                placeholder="Search events by name, description, or interest..."
                value={searchKeywords}
                onChange={(e) => setSearchKeywords(e.target.value)}
                className="w-full pl-16 pr-6 py-6 text-2xl font-medium border-4 border-primary/30 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 shadow-lg"
                style={{
                  fontSize: `${Math.max(24, 24 + searchKeywords.length * 0.5)}px`,
                  boxShadow: searchKeywords ? '0 0 20px rgba(255, 107, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.1)'
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 text-center">Age Range</h3>
              <div className="space-y-2">
                {ageRanges.map((age) => (
                  <button
                    key={age.value}
                    onClick={() => setSelectedAge(age.value)}
                    className={`w-full px-4 py-3 rounded-lg font-medium transition-all text-left ${
                      selectedAge === age.value
                        ? `${age.color} text-white shadow-lg`
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {age.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-4 text-center">Interests</h3>
              <div className="space-y-2">
                {interests.map((interest) => (
                  <button
                    key={interest.value}
                    onClick={() => setSelectedInterest(interest.value)}
                    className={`w-full px-4 py-3 rounded-lg font-medium transition-all text-left ${
                      selectedInterest === interest.value
                        ? `${interest.color} text-white shadow-lg`
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {interest.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-4 text-center">Schedule</h3>
              <div className="space-y-2">
                {daysOfWeek.map((day) => (
                  <button
                    key={day.value}
                    onClick={() => setSelectedDay(day.value)}
                    className={`w-full px-4 py-3 rounded-lg font-medium transition-all text-left ${
                      selectedDay === day.value
                        ? `${day.color} text-white shadow-lg`
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {day.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold">
              {loading ? 'Loading...' : `${filteredEvents.length} Event${filteredEvents.length !== 1 ? 's' : ''} Found`}
            </h2>
          </div>

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
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="overflow-hidden transition-all bg-white rounded-lg shadow-card hover:shadow-lg hover:scale-105"
              >
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                    <span className={`px-2 py-1 text-xs font-bold text-white rounded-full ${getColorForAge(event.age_range)}`}>
                      {event.age_range}
                    </span>
                    <span className={`px-2 py-1 text-xs font-bold text-white rounded-full ${getColorForInterest(event.interest)}`}>
                      {event.interest}
                    </span>
                    <span className={`px-2 py-1 text-xs font-bold text-white rounded-full ${getColorForDay(event.day_of_week)}`}>
                      {event.day_of_week}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold">{event.title}</h3>
                  <p className="mb-4 text-sm text-dark-lighter">{event.description}</p>

                  <div className="mb-4 space-y-2">
                    <div className="flex items-center text-dark-lighter">
                      <FaCalendarAlt className="mr-2 text-primary" />
                      <span>{formatDate(event.date)}</span>
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

                  <button className="w-full px-4 py-3 font-bold text-white transition-colors rounded-md bg-primary hover:bg-primary-dark">
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {!loading && filteredEvents.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-lg text-dark-lighter">
                No events found matching your search criteria. Try adjusting your filters or search terms.
              </p>
            </div>
          )}
        </div>
      </section>

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
