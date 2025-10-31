import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaCalendarAlt, FaMapMarkerAlt, FaClock, FaFilter } from 'react-icons/fa';

const ProgramsPage = () => {
  useEffect(() => {
    document.title = 'Our Programs - The Opportunity League';
  }, []);

  const [searchKeywords, setSearchKeywords] = useState('');
  const [selectedAge, setSelectedAge] = useState('All');
  const [selectedInterest, setSelectedInterest] = useState('All');
  const [selectedDay, setSelectedDay] = useState('All');

  // Age ranges with colors
  const ageRanges = [
    { label: 'All', value: 'All', color: 'bg-gray-500' },
    { label: 'Infancy (0-1)', value: 'Infancy', color: 'bg-pink-500' },
    { label: 'Toddler (1-3)', value: 'Toddler', color: 'bg-purple-500' },
    { label: 'Preschool (3-5)', value: 'Preschool', color: 'bg-blue-500' },
    { label: 'School-Age (6-11)', value: 'School-Age', color: 'bg-green-500' },
    { label: 'Early Teens (12-17)', value: 'Early Teens', color: 'bg-orange-500' },
    { label: 'Late Teens (18-21)', value: 'Late Teens', color: 'bg-red-500' }
  ];

  // Interests with colors
  const interests = [
    { label: 'All', value: 'All', color: 'bg-gray-500' },
    { label: 'Youth Sports', value: 'Youth Sports', color: 'bg-emerald-500' },
    { label: 'Mentorship', value: 'Mentorship', color: 'bg-indigo-500' },
    { label: 'College & Career Prep', value: 'College & Career Prep', color: 'bg-violet-500' },
    { label: 'Parent Advocacy', value: 'Parent Advocacy', color: 'bg-rose-500' },
    { label: 'STEM', value: 'STEM', color: 'bg-cyan-500' },
    { label: 'Arts', value: 'Arts', color: 'bg-fuchsia-500' },
    { label: 'Science', value: 'Science', color: 'bg-teal-500' },
    { label: 'Music', value: 'Music', color: 'bg-amber-500' },
    { label: 'Outdoors & Recreation', value: 'Outdoors & Recreation', color: 'bg-lime-500' },
    { label: 'Leadership Development', value: 'Leadership Development', color: 'bg-sky-500' },
    { label: 'Life Skills', value: 'Life Skills', color: 'bg-stone-500' },
    { label: 'Technology', value: 'Technology', color: 'bg-slate-500' },
    { label: 'Health & Wellness', value: 'Health & Wellness', color: 'bg-green-600' },
    { label: 'Community Service', value: 'Community Service', color: 'bg-blue-600' }
  ];

  // Days of the week with colors
  const daysOfWeek = [
    { label: 'All', value: 'All', color: 'bg-gray-500' },
    { label: 'Sunday', value: 'Sunday', color: 'bg-red-400' },
    { label: 'Monday', value: 'Monday', color: 'bg-orange-400' },
    { label: 'Tuesday', value: 'Tuesday', color: 'bg-yellow-400' },
    { label: 'Wednesday', value: 'Wednesday', color: 'bg-green-400' },
    { label: 'Thursday', value: 'Thursday', color: 'bg-blue-400' },
    { label: 'Friday', value: 'Friday', color: 'bg-indigo-400' },
    { label: 'Saturday', value: 'Saturday', color: 'bg-purple-400' }
  ];

  // Sample programs data (40 programs)
  const allPrograms = [
    {
      id: 1,
      title: "Little Explorers Science Club",
      age: "Preschool",
      interest: "Science",
      day: "Tuesday",
      time: "10:00 AM - 11:00 AM",
      location: "Science Lab, Building A",
      image: "https://images.pexels.com/photos/8364570/pexels-photo-8364570.jpeg",
      description: "Hands-on science experiments for curious preschoolers"
    },
    {
      id: 2,
      title: "Youth Basketball League",
      age: "School-Age",
      interest: "Youth Sports",
      day: "Saturday",
      time: "9:00 AM - 11:00 AM",
      location: "Community Gym",
      image: "https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg",
      description: "Competitive basketball league for elementary school students"
    },
    {
      id: 3,
      title: "Teen Leadership Academy",
      age: "Early Teens",
      interest: "Leadership Development",
      day: "Wednesday",
      time: "4:00 PM - 6:00 PM",
      location: "Conference Room B",
      image: "https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg",
      description: "Develop leadership skills through workshops and projects"
    },
    {
      id: 4,
      title: "College Application Workshop",
      age: "Late Teens",
      interest: "College & Career Prep",
      day: "Thursday",
      time: "6:00 PM - 8:00 PM",
      location: "Computer Lab",
      image: "https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg",
      description: "Get help with college applications and essays"
    },
    {
      id: 5,
      title: "Parent Support Circle",
      age: "All",
      interest: "Parent Advocacy",
      day: "Monday",
      time: "7:00 PM - 8:30 PM",
      location: "Community Room",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
      description: "Support group for parents navigating challenges"
    },
    {
      id: 6,
      title: "Toddler Music & Movement",
      age: "Toddler",
      interest: "Music",
      day: "Friday",
      time: "10:00 AM - 10:45 AM",
      location: "Music Room",
      image: "https://images.pexels.com/photos/8364146/pexels-photo-8364146.jpeg",
      description: "Musical activities to develop rhythm and coordination"
    },
    {
      id: 7,
      title: "Coding for Kids",
      age: "School-Age",
      interest: "STEM",
      day: "Tuesday",
      time: "4:00 PM - 5:30 PM",
      location: "Computer Lab",
      image: "https://images.pexels.com/photos/8364570/pexels-photo-8364570.jpeg",
      description: "Learn programming basics through fun games and projects"
    },
    {
      id: 8,
      title: "Art Therapy Sessions",
      age: "Early Teens",
      interest: "Arts",
      day: "Thursday",
      time: "3:30 PM - 5:00 PM",
      location: "Art Studio",
      image: "https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg",
      description: "Express yourself through various art mediums"
    },
    {
      id: 9,
      title: "Nature Hiking Club",
      age: "School-Age",
      interest: "Outdoors & Recreation",
      day: "Saturday",
      time: "8:00 AM - 12:00 PM",
      location: "Various Trail Locations",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
      description: "Explore local trails and learn about nature"
    },
    {
      id: 10,
      title: "Teen Mentorship Program",
      age: "Early Teens",
      interest: "Mentorship",
      day: "Monday",
      time: "4:00 PM - 6:00 PM",
      location: "Mentorship Lounge",
      image: "https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg",
      description: "One-on-one mentoring with community volunteers"
    },
    {
      id: 11,
      title: "Baby & Me Playgroup",
      age: "Infancy",
      interest: "Health & Wellness",
      day: "Wednesday",
      time: "10:00 AM - 11:00 AM",
      location: "Infant Room",
      image: "https://images.pexels.com/photos/8364146/pexels-photo-8364146.jpeg",
      description: "Sensory play and bonding activities for babies and caregivers"
    },
    {
      id: 12,
      title: "Youth Soccer Training",
      age: "School-Age",
      interest: "Youth Sports",
      day: "Thursday",
      time: "5:00 PM - 6:30 PM",
      location: "Soccer Field",
      image: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg",
      description: "Develop soccer skills and teamwork"
    },
    {
      id: 13,
      title: "Creative Writing Workshop",
      age: "Early Teens",
      interest: "Arts",
      day: "Tuesday",
      time: "6:00 PM - 7:30 PM",
      location: "Library",
      image: "https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg",
      description: "Explore creative writing through poetry and storytelling"
    },
    {
      id: 14,
      title: "Robotics Club",
      age: "School-Age",
      interest: "STEM",
      day: "Friday",
      time: "4:00 PM - 6:00 PM",
      location: "STEM Lab",
      image: "https://images.pexels.com/photos/8364570/pexels-photo-8364570.jpeg",
      description: "Build and program robots for competitions"
    },
    {
      id: 15,
      title: "Life Skills for Teens",
      age: "Early Teens",
      interest: "Life Skills",
      day: "Saturday",
      time: "2:00 PM - 4:00 PM",
      location: "Life Skills Kitchen",
      image: "https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg",
      description: "Learn cooking, budgeting, and essential life skills"
    },
    {
      id: 16,
      title: "Preschool Art Adventures",
      age: "Preschool",
      interest: "Arts",
      day: "Monday",
      time: "11:00 AM - 12:00 PM",
      location: "Art Studio",
      image: "https://images.pexels.com/photos/8364146/pexels-photo-8364146.jpeg",
      description: "Creative art projects for young children"
    },
    {
      id: 17,
      title: "Community Garden Project",
      age: "All",
      interest: "Community Service",
      day: "Sunday",
      time: "9:00 AM - 12:00 PM",
      location: "Community Garden",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
      description: "Help maintain our community garden"
    },
    {
      id: 18,
      title: "Teen Fitness Bootcamp",
      age: "Early Teens",
      interest: "Health & Wellness",
      day: "Wednesday",
      time: "5:00 PM - 6:00 PM",
      location: "Fitness Center",
      image: "https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg",
      description: "High-energy fitness training for teenagers"
    },
    {
      id: 19,
      title: "Digital Photography Class",
      age: "Late Teens",
      interest: "Technology",
      day: "Tuesday",
      time: "7:00 PM - 9:00 PM",
      location: "Media Lab",
      image: "https://images.pexels.com/photos/8364570/pexels-photo-8364570.jpeg",
      description: "Learn digital photography and editing techniques"
    },
    {
      id: 20,
      title: "Toddler Swimming Lessons",
      age: "Toddler",
      interest: "Youth Sports",
      day: "Saturday",
      time: "11:00 AM - 11:30 AM",
      location: "Community Pool",
      image: "https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg",
      description: "Water safety and basic swimming for toddlers"
    },
    {
      id: 21,
      title: "Science Fair Prep",
      age: "School-Age",
      interest: "Science",
      day: "Thursday",
      time: "4:00 PM - 5:30 PM",
      location: "Science Lab",
      image: "https://images.pexels.com/photos/8364570/pexels-photo-8364570.jpeg",
      description: "Prepare for school science fairs with expert guidance"
    },
    {
      id: 22,
      title: "Young Musicians Ensemble",
      age: "School-Age",
      interest: "Music",
      day: "Wednesday",
      time: "4:00 PM - 5:30 PM",
      location: "Music Room",
      image: "https://images.pexels.com/photos/8364146/pexels-photo-8364146.jpeg",
      description: "Learn to play instruments and perform together"
    },
    {
      id: 23,
      title: "Career Exploration Series",
      age: "Late Teens",
      interest: "College & Career Prep",
      day: "Friday",
      time: "6:00 PM - 8:00 PM",
      location: "Conference Room A",
      image: "https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg",
      description: "Explore different career paths with professionals"
    },
    {
      id: 24,
      title: "Outdoor Adventure Camp",
      age: "School-Age",
      interest: "Outdoors & Recreation",
      day: "Sunday",
      time: "1:00 PM - 5:00 PM",
      location: "Various Outdoor Locations",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
      description: "Rock climbing, kayaking, and outdoor skills"
    },
    {
      id: 25,
      title: "Peer Mentoring Circle",
      age: "Late Teens",
      interest: "Mentorship",
      day: "Monday",
      time: "6:00 PM - 7:30 PM",
      location: "Youth Lounge",
      image: "https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg",
      description: "Peer-to-peer support and mentoring"
    },
    {
      id: 26,
      title: "Parent Education Workshop",
      age: "All",
      interest: "Parent Advocacy",
      day: "Saturday",
      time: "10:00 AM - 12:00 PM",
      location: "Education Center",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
      description: "Learn effective parenting strategies and advocacy skills"
    },
    {
      id: 27,
      title: "Teen Drama Club",
      age: "Early Teens",
      interest: "Arts",
      day: "Friday",
      time: "4:00 PM - 6:00 PM",
      location: "Theater",
      image: "https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg",
      description: "Explore acting, directing, and theater production"
    },
    {
      id: 28,
      title: "Math Tutoring Sessions",
      age: "School-Age",
      interest: "STEM",
      day: "Monday",
      time: "3:30 PM - 5:00 PM",
      location: "Tutoring Center",
      image: "https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg",
      description: "One-on-one and small group math support"
    },
    {
      id: 29,
      title: "Mindfulness for Teens",
      age: "Early Teens",
      interest: "Health & Wellness",
      day: "Tuesday",
      time: "5:00 PM - 6:00 PM",
      location: "Wellness Room",
      image: "https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg",
      description: "Learn meditation and stress management techniques"
    },
    {
      id: 30,
      title: "Preschool Nature Walks",
      age: "Preschool",
      interest: "Outdoors & Recreation",
      day: "Thursday",
      time: "10:00 AM - 11:00 AM",
      location: "Nature Trail",
      image: "https://images.pexels.com/photos/8364146/pexels-photo-8364146.jpeg",
      description: "Explore nature and learn about plants and animals"
    },
    {
      id: 31,
      title: "Youth Volleyball League",
      age: "Early Teens",
      interest: "Youth Sports",
      day: "Sunday",
      time: "3:00 PM - 5:00 PM",
      location: "Gymnasium",
      image: "https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg",
      description: "Competitive volleyball for middle school students"
    },
    {
      id: 32,
      title: "Web Design Workshop",
      age: "Late Teens",
      interest: "Technology",
      day: "Wednesday",
      time: "6:00 PM - 8:00 PM",
      location: "Computer Lab",
      image: "https://images.pexels.com/photos/8364570/pexels-photo-8364570.jpeg",
      description: "Learn HTML, CSS, and web design principles"
    },
    {
      id: 33,
      title: "Community Clean-Up Day",
      age: "All",
      interest: "Community Service",
      day: "Saturday",
      time: "8:00 AM - 12:00 PM",
      location: "Various Community Locations",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
      description: "Help beautify our neighborhood"
    },
    {
      id: 34,
      title: "Guitar Lessons for Beginners",
      age: "School-Age",
      interest: "Music",
      day: "Friday",
      time: "3:00 PM - 4:00 PM",
      location: "Music Room",
      image: "https://images.pexels.com/photos/8364146/pexels-photo-8364146.jpeg",
      description: "Learn basic guitar chords and songs"
    },
    {
      id: 35,
      title: "Financial Literacy for Teens",
      age: "Late Teens",
      interest: "Life Skills",
      day: "Thursday",
      time: "7:00 PM - 8:30 PM",
      location: "Classroom C",
      image: "https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg",
      description: "Learn budgeting, saving, and financial planning"
    },
    {
      id: 36,
      title: "Chemistry Lab Adventures",
      age: "Early Teens",
      interest: "Science",
      day: "Saturday",
      time: "1:00 PM - 3:00 PM",
      location: "Chemistry Lab",
      image: "https://images.pexels.com/photos/8364570/pexels-photo-8364570.jpeg",
      description: "Hands-on chemistry experiments and demonstrations"
    },
    {
      id: 37,
      title: "Toddler Sensory Play",
      age: "Toddler",
      interest: "Health & Wellness",
      day: "Tuesday",
      time: "9:30 AM - 10:30 AM",
      location: "Sensory Room",
      image: "https://images.pexels.com/photos/8364146/pexels-photo-8364146.jpeg",
      description: "Sensory activities to support development"
    },
    {
      id: 38,
      title: "Public Speaking Club",
      age: "Late Teens",
      interest: "Leadership Development",
      day: "Monday",
      time: "7:00 PM - 8:30 PM",
      location: "Presentation Room",
      image: "https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg",
      description: "Develop confidence in public speaking"
    },
    {
      id: 39,
      title: "Environmental Science Club",
      age: "School-Age",
      interest: "Science",
      day: "Wednesday",
      time: "3:30 PM - 5:00 PM",
      location: "Science Lab",
      image: "https://images.pexels.com/photos/8364570/pexels-photo-8364570.jpeg",
      description: "Learn about environmental conservation and sustainability"
    },
    {
      id: 40,
      title: "Family Game Night",
      age: "All",
      interest: "Community Service",
      day: "Friday",
      time: "6:00 PM - 8:00 PM",
      location: "Community Hall",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
      description: "Fun games and activities for the whole family"
    }
  ];

  // Filter programs based on search and filters
  const filteredPrograms = allPrograms.filter(program => {
    const matchesKeywords = searchKeywords === '' || 
      program.title.toLowerCase().includes(searchKeywords.toLowerCase()) ||
      program.description.toLowerCase().includes(searchKeywords.toLowerCase()) ||
      program.interest.toLowerCase().includes(searchKeywords.toLowerCase());
    
    const matchesAge = selectedAge === 'All' || program.age === selectedAge;
    const matchesInterest = selectedInterest === 'All' || program.interest === selectedInterest;
    const matchesDay = selectedDay === 'All' || program.day === selectedDay;
    
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
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Find Your Perfect Program</h1>
            <p className="text-lg text-white/90">
              Discover programs tailored to your age, interests, and schedule. Search through our 40+ offerings to find the perfect fit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container">
          {/* Search Box */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative">
              <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-primary text-2xl" />
              <input
                type="text"
                placeholder="Search programs by name, description, or interest..."
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

          {/* Three Column Filter Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Age Column */}
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

            {/* Interest Column */}
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

            {/* Day Column */}
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

      {/* Programs Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold">
              {filteredPrograms.length} Program{filteredPrograms.length !== 1 ? 's' : ''} Found
            </h2>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="overflow-hidden transition-all bg-white rounded-lg shadow-card hover:shadow-lg hover:scale-105"
              >
                <div className="relative h-48">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                    <span className={`px-2 py-1 text-xs font-bold text-white rounded-full ${getColorForAge(program.age)}`}>
                      {program.age}
                    </span>
                    <span className={`px-2 py-1 text-xs font-bold text-white rounded-full ${getColorForInterest(program.interest)}`}>
                      {program.interest}
                    </span>
                    <span className={`px-2 py-1 text-xs font-bold text-white rounded-full ${getColorForDay(program.day)}`}>
                      {program.day}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold">{program.title}</h3>
                  <p className="mb-4 text-sm text-dark-lighter">{program.description}</p>
                  
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center text-dark-lighter">
                      <FaCalendarAlt className="mr-2 text-primary" />
                      <span>{program.day}</span>
                    </div>
                    
                    <div className="flex items-center text-dark-lighter">
                      <FaClock className="mr-2 text-primary" />
                      <span>{program.time}</span>
                    </div>
                    
                    <div className="flex items-center text-dark-lighter">
                      <FaMapMarkerAlt className="mr-2 text-primary" />
                      <span>{program.location}</span>
                    </div>
                  </div>
                  
                  <button className="w-full px-4 py-3 font-bold text-white transition-colors rounded-md bg-primary hover:bg-primary-dark">
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredPrograms.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-lg text-dark-lighter">
                No programs found matching your search criteria. Try adjusting your filters or search terms.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;