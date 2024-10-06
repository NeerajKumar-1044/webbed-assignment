import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import data from "../../../Data/company.json";

function Analysis() {
  
  useEffect(() => {
    const degreeCounts = {};
    data.forEach((company) => {
      company.eligibleBranches.forEach(branch => {
        degreeCounts[branch] = (degreeCounts[branch] || 0) + 1;
      });
    });

    const label_pie = Object.keys(degreeCounts);
    const PiechartData = Object.values(degreeCounts);

    const ctxPie = document.getElementById('myPieChart').getContext('2d');
    const myPieChart = new Chart(ctxPie, {
      type: 'pie',
      data: {
        labels: label_pie,
        datasets: [{
          label: 'Number of Companies Offering Jobs by Degree',
          data: PiechartData,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 0.5
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Number of Companies Offering Jobs by Degree'
          }
        }
      }
    });


    const degreeForSalary = {};
    data.forEach((company) => {
      degreeForSalary[company.jobDetails.Salary] = (degreeForSalary[company.jobDetails.Salary] || 0) + 1;
    });

    const label_Salary = Object.keys(degreeForSalary);
    const Data_Salary = Object.values(degreeForSalary);

    const ctxHistogram = document.getElementById('myHistogram').getContext('2d');
    const myHistogram = new Chart(ctxHistogram, {
      type: 'bar',
      data: {
        labels: label_Salary,
        datasets: [{
          label: 'Offered Salary',
          data: Data_Salary,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Number of Companies'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Salary'
            }
          }
        },
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Offered Salary Distribution'
          }
        }
      }
    });

    return () => {
      myPieChart.destroy();
      myHistogram.destroy();
    };
  }, []);

  return (
    <>
      <div className='flex flex-wrap space-x-5 justify-center mt-20'>
        <div className='w-[40vw] h-[60vh] shadow-lg rounded-lg overflow-hidden'>
          <canvas id="myPieChart" width="400" height="400"></canvas>
        </div>

        <div className='w-[40vw] h-[60vh] shadow-lg rounded-lg overflow-hidden'>
          <canvas id="myHistogram" width="400" height="400"></canvas>
        </div>
      </div>
    </>
  );
}

export default Analysis;
