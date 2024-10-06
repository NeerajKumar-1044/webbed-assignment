import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Chart from 'chart.js/auto';

function Jobdescription() {

    const location = useLocation();
    const jobdata = location.state?.jobdata || {}; 

  useEffect(() => {

    const years = ['2019', '2020', '2021', '2022', '2023'];
    const recruits = jobdata.recruitmentData;

    const ctxRecruitment = document.getElementById('recruitmentHistogram').getContext('2d');
    const recruitmentChart = new Chart(ctxRecruitment, {
      type: 'bar',
      data: {
        labels: years,
        datasets: [{
          label: 'No. of Recruits',
          data: recruits,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'Recruitment Over the Last 5 Years' },
        }
      }
    });


    const salaryData = jobdata.jobDetails.Salary ? { [jobdata.jobDetails.Salary]: 1 } : {};
    const labelsSalary = Object.keys(salaryData);
    const dataSalary = Object.values(salaryData);

    const ctxSalary = document.getElementById('salaryHistogram').getContext('2d');
    const salaryChart = new Chart(ctxSalary, {
      type: 'bar',
      data: {
        labels: labelsSalary,
        datasets: [{
          label: 'Offered Salary',
          data: dataSalary,
          backgroundColor: 'rgba(153, 102, 255, 0.6)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1,
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: { title: { display: true, text: 'Salary' } },
          y: { title: { display: true, text: 'Number of Companies' } },
        },
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'Offered Salary Distribution' },
        }
      }
    });


    return () => {
      recruitmentChart.destroy();
      salaryChart.destroy();
    };
  }, [jobdata]);

  return (
    <div className='flex flex-col items-center p-10'>
      <div className='w-[80vw] border border-black mt-10 p-6'>
        <h1 className='text-3xl font-bold mb-4'>{jobdata.name}</h1>
        <p><strong>Sector:</strong> {jobdata.sector}</p>
        <p><strong>Website:</strong> <a href={jobdata.website} target="_blank" rel="noopener noreferrer" className='text-blue-500 underline'>{jobdata.website}</a></p>
        <p><strong>Category:</strong> {jobdata.category}</p>
        <p><strong>Postal Address:</strong> {jobdata.postalAddress}</p>

        <div className='mt-4'>
          <h2 className='text-xl font-bold'>Job Details</h2>
          <p><strong>Type:</strong> {jobdata.jobDetails.jobType}</p>
          <p><strong>Salary:</strong> {jobdata.jobDetails.Salary}</p>
          <p><strong>Designation:</strong> {jobdata.jobDetails.jobDesignation}</p>
          <p><strong>No. of Hires:</strong> {jobdata.jobDetails.tentativeNoOfHires}</p>
          <p><strong>Joining Date:</strong> {jobdata.jobDetails.tentativeJoiningDate}</p>
          <p><strong>Location:</strong> {jobdata.jobDetails.tentativeJobLocation}</p>
          <p><strong>Description:</strong> {jobdata.jobDetails.jobDescription}</p>
        </div>

        <div className='mt-4'>
          <h2 className='text-xl font-bold'>Contact Details</h2>
          <p><strong>HR Name:</strong> {jobdata.contactDetails.HR.name}</p>
          <p><strong>Designation:</strong> {jobdata.contactDetails.HR.designation}</p>
          <p><strong>Mobile:</strong> {jobdata.contactDetails.HR.mobileNumber}</p>
          <p><strong>Telephone:</strong> {jobdata.contactDetails.HR.telephoneNumber}</p>
          <p><strong>Email:</strong> <a href={`mailto:${jobdata.contactDetails.HR.emailId}`} className='text-blue-500 underline'>{jobdata.contactDetails.HR.emailId}</a></p>
        </div>

        <div className='mt-4'>
          <h2 className='text-xl font-bold'>Eligibility</h2>
          <p><strong>Eligible Branches:</strong> {jobdata.eligibleBranches}</p>
          <p><strong>Eligibility Criteria:</strong> {jobdata.eligibility}</p>
        </div>


        <div className='mt-10'>
          <h2 className='text-xl font-bold mb-4'>Recruitment History (Last 5 Years)</h2>
          <div className='w-[40vw] h-[60vh]'>
            <canvas id='recruitmentHistogram'></canvas>
          </div>
        </div>


        <div className='mt-10'>
          <h2 className='text-xl font-bold mb-4'>Salary Distribution</h2>
          <div className='w-[40vw] h-[60vh]'>
            <canvas id='salaryHistogram'></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobdescription;
