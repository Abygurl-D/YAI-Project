import React from 'react';
import ImageSlider from '../ImageSlider';
import About from '../components/About';
import InnovatorProfile from '../components/InnovatorProfile';
import Products from '../components/Products';
import TestimonialsSection from '../components/TestimonialsSection';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <ImageSlider />
      <About />
      <InnovatorProfile />
      <Products />
      <TestimonialsSection />
      <Gallery />
      <Contact />
    </div>
  );
}