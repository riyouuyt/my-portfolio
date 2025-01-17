'use client';

import { FC } from 'react';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import Hero from '@/hero/hero';
import Skills from '../skills/skills';
import Projects from '@/projects/project';
import Contact from '@/contact/contact';


const Home: FC = () => {
  return (
    <>
      <Header />
      <main className="pt-16"> {/* Add padding-top for fixed header */}
        <section id="home" className="min-h-screen">
          <Hero />
        </section>

        <section id="skills" className="min-h-screen">
          <Skills/>
        </section>

        <section id="projects" className="min-h-screen">
          <Projects/>
        </section>

        <section id="contact" className="min-h-screen">
          <Contact/>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;