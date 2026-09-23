import React from 'react';
import HeroSearch from '../components/home/HeroSearch';
import LogoMarquee from '../components/common/LogoMarquee';
import FeaturedSection from '../components/home/FeaturedSection';
import HowItWorksSticky from '../components/home/HowItWorksSticky';
import PopularCities from '../components/home/PopularCities';
import PropertyTypes from '../components/home/PropertyTypes';
import WhyIndstate from '../components/home/WhyIndstate';
import AgentShowcase from '../components/home/AgentShowcase';
import Testimonials from '../components/home/Testimonials';
import BlogPreview from '../components/home/BlogPreview';

export default function HomePage() {
  return (
    <main>
      <HeroSearch />
      <LogoMarquee />
      <FeaturedSection />
      <HowItWorksSticky />
      <PopularCities />
      <PropertyTypes />
      <WhyIndstate />
      <AgentShowcase />
      <Testimonials />
      <BlogPreview />
    </main>
  );
}
