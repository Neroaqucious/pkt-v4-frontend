"use client";

import Header from "./Header";
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
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Journey />
        <WhyPkt />
        <Courses />
        <StatsSection />
        <Testimonials />
        <NewsList />
        <CtaBanner />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
