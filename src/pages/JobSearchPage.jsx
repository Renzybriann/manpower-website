/*
  File: src/pages/JobSearchPage.jsx (Vite Version - FINAL & CORRECTED)
  Description: This version correctly uses the 'navigateTo' prop for all navigation,
  fixing the "not a function" errors.
*/
import React, { useState, useEffect, useMemo } from 'react';
import sanityClient from '../sanityClient';

export function JobSearchPage({ navigateTo }) {
  const [allJobs, setAllJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "job"] | order(order asc) {
          _id, title, location, type, quantity
        }`
      )
      .then((data) => {
        setAllJobs(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setError("Failed to load job openings.");
        setIsLoading(false);
      });
  }, []);

  const filteredJobs = useMemo(() => {
    return allJobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            job.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === 'All' || job.type === selectedType;
      return matchesSearch && matchesType;
    });
  }, [allJobs, searchTerm, selectedType]);

  const handleContactClick = () => {
    // 1. Switch back to the homepage
    navigateTo('home');
    // 2. Wait a moment for the page to render, then scroll
    setTimeout(() => {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const jobTypes = ['All', 'Full-time', 'Contract', 'Seasonal', 'Part-time'];

  return (
    <section id="job-search" className="bg-white min-h-screen py-24 pt-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <button onClick={() => navigateTo('home')} className="mb-8 text-blue-600 hover:text-blue-800 font-medium flex items-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Back to Home
          </button>
          <div className="text-center my-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Find Your Opportunity</h2>
            <p className="mt-4 text-lg text-gray-500">Search our complete list of job openings in Greenland.</p>
          </div>

          {/* Search and Filter Controls */}
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md mb-12">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-3">
                <input
                  type="text"
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by title or location..."
                  className="block w-full pl-4 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="md:col-span-2">
                <select
                  id="job-type"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="block w-full py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  {jobTypes.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {isLoading && <p className="text-center text-gray-500">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            {!isLoading && !error && (
              filteredJobs.length > 0 ? (
                filteredJobs.map(job => (
                  <div key={job._id} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500 hover:shadow-xl hover:border-blue-600 transition-all duration-300">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                        <div className="flex flex-wrap items-center text-gray-600 mt-2 text-sm">
                          <span className="flex items-center mr-4 mb-1 sm:mb-0">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                            {job.location}
                          </span>
                          <span className="flex items-center mr-4 mb-1 sm:mb-0">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                            {job.type}
                          </span>
                          {job.quantity && (
                            <span className="flex items-center font-semibold text-blue-600">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" /></svg>
                              {job.quantity} Openings
                            </span>
                          )}
                        </div>
                      </div>
                      <button onClick={handleContactClick} title="Inquire about this job" className="ml-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-400 hover:text-blue-600 transition-colors" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold text-gray-700">No Jobs Found</h3>
                  <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria.</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}