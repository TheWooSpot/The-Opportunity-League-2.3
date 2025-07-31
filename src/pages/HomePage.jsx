import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import MissionCarousel from '../components/home/MissionCarousel';
import WhatWeDo from '../components/home/WhatWeDo';
import ImpactStats from '../components/home/ImpactStats';
import TestimonialsSection from '../components/home/TestimonialsSection';
import UpcomingEvents from '../components/home/UpcomingEvents';
import PartnershipSection from '../components/home/PartnershipSection';
import NewsletterSignup from '../components/home/NewsletterSignup';

const HomePage = () => {
  useEffect(() => {
    document.title = 'The Opportunity League - Empowering Youth Through Education & Sports';
  }, []);

  return (
    <>
      <Hero />
      <MissionCarousel />
      <WhatWeDo />
      <ImpactStats />
      <TestimonialsSection />
      <UpcomingEvents />
      <PartnershipSection />
      <NewsletterSignup />
    </>
  );
};

export default HomePage;
