/*
  File: src/pages/Home.jsx (FIXED)
  Description: This version uses a more robust method for the background. It combines
  the image and the dark overlay into a single CSS `backgroundImage` property. This
  prevents the "black screen" issue if the image fails to load and is a more
  reliable technique. A fallback background color has also been added.
*/
import React from 'react';

export function Home() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Combined Background Image and Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{
          // This applies a dark semi-transparent gradient ON TOP of the image URL
          backgroundImage: `linear-gradient(rgba(13, 47, 79, 0.6), rgba(13, 47, 79, 0.6)), url('https://images.pexels.com/photos/9122377/pexels-photo-9122377.jpeg')`,
          // This is a fallback color in case the image still fails to load
          backgroundColor: '#0D2F4F'
        }}
        aria-hidden="true"
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
          Your Gateway to Professional Opportunities in <span className="text-blue-300">Greenland</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-200" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.7)'}}>
          We are specialists in connecting skilled talent with businesses in Greenland, managing the entire recruitment, visa, and documentation process.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a href="#employers" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg">
            For Employers in Greenland
          </a>
          <a href="#jobseekers" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 transition-colors shadow-lg">
            Work in Greenland
          </a>
        </div>
      </div>
    </section>
  );
}