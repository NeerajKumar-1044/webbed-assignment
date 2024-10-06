import React from 'react';
import { Link } from 'react-router-dom';

function JobPage({ JobData }) {

  return (
    <div className="p-6">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Job Listings</h1>
      {JobData && JobData.length > 0 ? (
        <div className="space-y-8 justify-center">
          {JobData.map((company, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="#"
                  alt={`${company.name} Logo`}
                  className="w-28 h-28 rounded-full mr-4 shadow-md"
                />
                <h2 className="text-xl font-semibold text-gray-800">{company.name}</h2>
              </div>

              <div className="flex justify-between mt-4">
                <div className="w-1/2 pr-4">
                  <h3 className="text-lg font-bold">Job Details</h3>
                  <div className="mt-2 space-y-1">
                    <p className="text-md"><strong className="font-bold">Job Designation:</strong> {company.jobDetails.jobDesignation}</p>
                    <p className="text-md"><strong className="font-bold">Job Type:</strong> <span className="capitalize">{company.jobDetails.jobType}</span></p>
                    <p className="text-md"><strong className="font-bold">Salary:</strong> {company.jobDetails.Salary}</p>
                    <p className="text-md"><strong className="font-bold">Location:</strong> {company.jobDetails.tentativeJobLocation}</p>
                  </div>
                </div>

                <div className="w-1/2 pl-4 border-l border-gray-300">
                  <h3 className="text-lg font-bold">Additional Information</h3>
                  <div className="mt-2 space-y-1">
                    <p className="text-md"><strong className="font-bold">Description:</strong> {company.jobDetails.jobDescription || 'N/A'}</p>
                  </div>
                </div>
              </div>

              <button
                className="inline-block mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
              >
             <Link to={{ pathname: '/jobdescription', state: { jobdata: company } }}>View more</Link>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No job available.</p>
      )}
    </div>
  );
}

export default JobPage;
