import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ForEmployers } from './pages/ForEmployers';
import { ForJobSeekers } from './pages/ForJobSeekers';
import { Testimonials } from './pages/Testimonials';
import { Contact } from './pages/Contact';
import { JobSearchPage } from './pages/JobSearchPage';

function MainPage({ showJobsPage }) {
  return (
    <>
      <Home />
      <About />
      <Services />
      <ForEmployers />
      <ForJobSeekers showJobsPage={showJobsPage} />
      <Testimonials />
      <Contact />
    </>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-gray-50 font-sans text-gray-900">
      <Navbar navigateTo={navigateTo} />
      <main>
        {currentPage === 'home' && <MainPage showJobsPage={() => navigateTo('jobs')} />}
        {currentPage === 'jobs' && <JobSearchPage navigateTo={navigateTo} />}
      </main>
      <Footer />
    </div>
  );
}