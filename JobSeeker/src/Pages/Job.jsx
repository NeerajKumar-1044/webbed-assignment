import React, { useState, useEffect } from 'react';
import JobPage from './JobPage';
import data from "../../../Data/company.json";


function Job() {

    const options = {
        Salary: ["10 LPA", "12 LPA", "15 LPA", "18 LPA"],
        Location: ["Pune", "Mumbai", "Bangalore"],
        JobType: ["on-site", "remote"],
        eligibility: ["professional", "fresher"],
        degree: ["computer Science and Engineering", "information Technology", "Cybersecurity"]
    };

    const [JobData, setJobData] = useState(data);
    const [Salary, setSalary] = useState("");
    const [Location, setLocation] = useState("");
    const [JobType, setJobType] = useState("");
    const [Eligibility, setEligibility] = useState("");
    const [Degree, setDegree] = useState("");
    const [DropdownOpen, setDropdownOpen] = useState([false, false, false, false, false]);

    const handleSubmit = (filter="", option) => {
        switch (filter) {
            case 'Salary':
                setSalary(Salary === option ? "" : option);
                break;
            case 'Location':
                setLocation(Location === option ? "" : option);
                break;
            case 'JobType':
                setJobType(JobType === option ? "" : option);
                break;
            case 'eligibility':
                setEligibility(Eligibility === option ? "" : option);
                break;
            case 'degree':
                setDegree(Degree === option ? "" : option);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        const filteredData = data.filter((job) => {
            return (
                (Salary === "" || job.jobDetails.Salary === Salary) &&
                (Location === "" || job.jobDetails.tentativeJobLocation === Location) &&
                (JobType === "" || job.jobDetails.JobType === JobType) &&
                (Eligibility === "" || job.eligibility === Eligibility) &&
                (Degree === "" || job.eligibleBranches.includes(Degree))
            );
        });
        setJobData(filteredData);
    }, [Salary, Location, JobType, Eligibility, Degree]);


    const isChecked = (filter, option) => {
        switch (filter) {
            case 'Salary':
                return Salary === option;
            case 'Location':
                return Location === option;
            case 'JobType':
                return JobType === option;
            case 'eligibility':
                return Eligibility === option;
            case 'degree':
                return Degree === option;
            default:
                return false;
        }
    };


    const clearAllFilters = () => {
        setSalary("");
        setLocation("");
        setJobType("");
        setEligibility("");
        setDegree("");
    };

    return (
        <>
            <nav className="bg-white border-gray-400">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="hidden w-full md:block md:w-auto">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
                            
                        {Object.keys(options).map((key, index) => (
                            <li key={index} >
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full cursor-pointer py-2 px-3 text-gray-900 border border-gray-400 rounded-3xl hover:bg-gray-100 md:hover:bg-transparent"
                                    onClick={() =>
                                        setDropdownOpen((prev) =>
                                            prev.map((dropdown, i) => (i === index ? !dropdown : dropdown))
                                        )
                                    }
                                >
                                    {key}
                                    <svg
                                        className="w-2.5 h-2.5 ml-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 4 4 4-4"
                                        />
                                    </svg>
                                </button>

                                {DropdownOpen[index] && (
                                    <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute">
                                        <ul className="py-2 text-sm text-gray-700">
                                            {options[key].map((filter) => (
                                                <li key={filter}>
                                                    <button
                                                        onClick={() => handleSubmit(key, filter)}
                                                        className={`flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 ${isChecked(key, filter) ? 'bg-gray-200 font-semibold' : ''}`}
                                                    >
                                                        {filter}
                                                        {isChecked(key, filter) && (
                                                            <svg
                                                                className="w-4 h-4 ml-2 text-blue-600"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M5 13l4 4L19 7"
                                                                ></path>
                                                            </svg>
                                                        )}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}

                            <li>
                                <button onClick={clearAllFilters} className="py-2 px-3 rounded-3xl text-gray-900 border border-gray-100 hover:bg-gray-100">
                                    Clear Filters
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr />

            <JobPage JobData={JobData} />
        </>
    );
}

export default Job;
