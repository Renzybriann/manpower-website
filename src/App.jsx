/*
  File: src/App.jsx (FIXED)
  Description: The import statements for Navbar and Footer have been changed from
  default to named imports to match how they are exported. This resolves the error.
*/
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar'; // Changed to named import
import { Footer } from './components/Footer'; // Changed to named import
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ForEmployers } from './pages/ForEmployers';
import { ForJobSeekers } from './pages/ForJobSeekers';
import { Testimonials } from './pages/Testimonials';
import { Contact } from './pages/Contact';
import { JobSearchPage } from './pages/JobSearchPage';

function MainPage({ navigateTo }) {
  return (
    <>
      <Home />
      <About />
      <Services />
      <ForEmployers />
      <ForJobSeekers navigateTo={navigateTo} />
      <Testimonials />
      <Contact />
    </>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // This effect runs once on initial load to set the page based on the URL hash
  useEffect(() => {
    const currentPath = window.location.hash;
    if (currentPath === '#/jobs') {
      setCurrentPage('jobs');
    } else {
      setCurrentPage('home');
    }
  }, []);

  // This function now handles navigation by updating the URL hash
  const navigateTo = (page) => {
    if (page === 'jobs') {
      window.location.hash = '/jobs';
      setCurrentPage('jobs');
    } else {
      // For home or section links
      window.location.hash = '/';
      setCurrentPage('home');
      // If it's a section link like '#about', we handle the scroll after the page is set to 'home'
      if (page.startsWith('#')) {
        setTimeout(() => {
            const element = document.querySelector(page);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // A small delay ensures the main page components are rendered
      }
    }
    window.scrollTo(0, 0);
  };


  return (
    <div className="bg-gray-50 font-sans text-gray-900">
      <Navbar navigateTo={navigateTo} />
      <main>
        {currentPage === 'home' && <MainPage navigateTo={navigateTo} />}
        {currentPage === 'jobs' && <JobSearchPage navigateTo={navigateTo} />}
      </main>
      <Footer />
    </div>
  );
}
