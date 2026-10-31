"use client";

import Hero from "./Hero";
import TrustStrip from "./TrustStrip";
import Faq from "./Faq";
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
      <TrustStrip />
      <Journey />
      <WhyPkt />
      <Courses />
      <StatsSection />
      <Testimonials />
      <Faq />
      <NewsList />
      <CtaBanner />
      <ContactForm />
    </>
  );
}
