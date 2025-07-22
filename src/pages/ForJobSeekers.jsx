/*
  File: src/pages/ForJobSeekers.jsx (UPDATED)
  Description: Fetches and displays the number of openings for featured jobs.
*/
import React, { useState, useEffect } from 'react';
import sanityClient from '../sanityClient';

export function ForJobSeekers({ navigateTo }) {
  const [featuredJobs, setFeaturedJobs] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "job"] | order(order asc) [0...3] {
          _id, title, location, type, quantity
        }` // Added 'quantity' to the query
      )
      .then((data) => setFeaturedJobs(data))
      .catch(console.error);
  }, []);

  return (
    <section id="jobseekers" className="bg-gray-50">
      <div className="container mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Work in Greenland</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">Your Great Arctic Adventure Awaits. Start Your Career in Greenland.</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Featured Openings in Greenland</h3>
          <div className="max-w-3xl mx-auto">
            {!featuredJobs ? (
              <div className="text-center text-gray-500">Loading...</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredJobs.map((job) => (
                  <div key={job._id} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                    <h4 className="font-bold text-lg text-gray-900">{job.title}</h4>
                    <p className="text-gray-600">{job.location}</p>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <span className="mr-4">{job.type}</span>
                      {/* Display quantity if it exists */}
                      {job.quantity && (
                        <span className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" /></svg>
                          {job.quantity} Openings
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
             {featuredJobs && featuredJobs.length === 0 && (
                <div className="text-center text-gray-500 mt-8">No featured positions at the moment.</div>
             )}
          </div>
        </div>
        <div className="text-center mt-16">
           <button 
             onClick={() => navigateTo('jobs')}
             className="px-10 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
           >
            View All Openings
          </button>
        </div>
      </div>
    </section>
  );
}
