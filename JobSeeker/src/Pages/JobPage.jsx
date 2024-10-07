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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
              <path fill="#c7ede6" d="M89.215 56.71C90.35 54.555 91 52.105 91 49.5c0-6.621-4.159-12.257-10.001-14.478C80.999 35.015 81 35.008 81 35c0-11.598-9.402-21-21-21-9.784 0-17.981 6.701-20.313 15.757C38.211 29.272 36.638 29 35 29c-7.692 0-14.023 5.793-14.89 13.252C14.906 43.353 11 47.969 11 53.5c0 5.851 5.149 11 11.5 11 .177 0 .352-.012.526-.022C23.022 65.153 23 65.324 23 65.5 23 76.822 32.178 86 43.5 86c6.437 0 12.175-2.972 15.934-7.614C61.612 80.611 64.64 82 68 82c4.65 0 8.674-2.65 10.666-6.518C79.718 75.817 80.837 76 82 76c6.075 0 11-4.925 11-11 0-2.784-1.47-5.746-3.785-7.81z"/>
              <path fill="#fdfcef" d="M78.5 60.5V61h3v-0.5c0 0 4.242 0 5.5 0 2.485 0 4.5-2.015 4.5-4.5 0-2.333-1.782-4.229-4.055-4.455C87.467 51.364 87.5 51.187 87.5 51c0-2.485-2.015-4.5-4.5-4.5-1.438 0-2.703.686-3.527 1.736C79.333 45.6 77.171 43.5 74.5 43.5c-2.761 0-5 2.239-5 5 0 .446.077.87.187 1.282C69.045 49.005 68.086 48.5 67 48.5c-1.781 0-3.234 1.335-3.455 3.055C63.364 51.533 63.187 51.5 63 51.5c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 9.5 0 9.5 0H78.5z"/>
              <path fill="#472b29" d="M74.5 43c-3.033 0-5.5 2.467-5.5 5.5 0 .016 0 .031 0 .047C68.398 48.192 67.71 48 67 48c-1.831 0-3.411 1.261-3.858 3.005C63.095 51.002 63.048 51 63 51c-2.757 0-5 2.243-5 5s2.243 5 5 5h15.5c.276 0 .5-.224.5-.5s-.224-.5-.5-.5H63c-2.206 0-4-1.794-4-4s1.794-4 4-4c.117 0 .23.017.343.032l.141.019c.021.003.041.004.062.004.246 0 .462-.185.495-.437C64.232 50.125 65.504 49 67 49c.885 0 1.723.401 2.301 1.1.098.118.241.182.386.182.078 0 .156-.018.228-.056.209-.107.314-.346.254-.573C70.054 49.218 70 48.852 70 48.5c0-2.481 2.019-4.5 4.5-4.5 2.381 0 4.347 1.872 4.474 4.263.011.208.15.387.349.45.05.016.101.024.152.024.15 0 .296-.069.392-.192C80.638 47.563 81.779 47 83 47c2.206 0 4 1.794 4 4 0 .117-.017.23-.032.343l-.019.141c-.016.134.022.268.106.373.084.105.207.172.34.185C89.451 52.247 91 53.949 91 56c0 2.206-1.794 4-4 4h-5.5c-.276 0-.5.224-.5.5s.224.5.5.5H87c2.757 0 5-2.243 5-5 0-2.397-1.689-4.413-4.003-4.877C87.999 51.082 88 51.041 88 51c0-2.757-2.243-5-5-5-1.176 0-2.293.416-3.183 1.164C79.219 44.76 77.055 43 74.5 43z"/>
            </svg>

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
             <Link to={`/jobdescription/${company.id}`}>View more</Link>
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
