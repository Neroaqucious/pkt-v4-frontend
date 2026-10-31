"use client";

import Hero from "./Hero";
import {
  Journey,
  WhyPkt,
  Courses,
  StatsSection,
  Testimonials,
  NewsList,
  CtaBanner,
  ContactForm,
} from "./HomeSections";

export default function Home() {
  return (
    <>
      <Hero />
      <Journey />
      <WhyPkt />
      <Courses />
      <StatsSection />
      <Testimonials />
      <NewsList />
      <CtaBanner />
      <ContactForm />
    </>
  );
}
