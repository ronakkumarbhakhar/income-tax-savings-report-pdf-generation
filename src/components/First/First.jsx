import './First.css'
import Footer from '../Footer/Footer';
import logo from './static/logo.svg'
import { useLayoutEffect } from 'react';
import Chart from 'chart.js/auto';

function First(props){
  useLayoutEffect(()=>{
    let arr=[429190,302639,395787,308482]
    let recommended=Math.min(...arr); 
    console.log(recommended)
    let fontHandler=()=>{return window.innerWidth>600?12:7}
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels : ['Existing (as per your inputs)', 'Recommended (Spring Money)'],
        datasets: [{
                label: 'Old Regime',
                data: [429190,302639],
                backgroundColor: (color)=>{
                  console.log(color)
                  let colors=color.raw==recommended?'rgba(16, 142, 102, 0.15)':'rgba(82, 94, 204, 0.15)'
                  return colors;
                },
                borderColor:(color)=>{
                  let colors=color.raw==recommended?'rgba(16, 142, 102)':'rgba(82, 94, 204)'
                  return colors;
                },
                borderWidth:1,
                borderRadius:4,
              },
              {
                label: 'New Regime',
                data: [395787,308482],
                backgroundColor: (color)=>{
                  let colors=color.raw==recommended?'rgba(16, 142, 102, 0.15)':'rgba(82, 94, 204, 0.15)'
                  return colors;
                },
                borderColor:(color)=>{
                  let colors=color.raw==recommended?'rgba(16, 142, 102)':'rgba(82, 94, 204)'
                  return colors;
                },
                borderWidth:1,
                borderRadius:4
              },]
    },
    options: {
      plugins: {
        legend: {
          display:false,
          position: 'top',
        },
        title: {
          display: false,
          text: 'Chart.js Bar Chart',
        },
      },
      scales: {
        y: {
          grid: {
            display:true, // Disable x-axis gridlines for better visibility
          },
          ticks: {
              // Include a dollar sign in the ticks
              callback: function(value, index, ticks) {
                  return  (new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR',maximumSignificantDigits: 1 }).format(value));
              },
              // font:{
              //   Size:fontHandler()
              // }
              font:{size: fontHandler()},
          }
        },
        x: {
          type: 'category',
          stacked: false,
          grid: {
            display: false,
          },
          ticks: {
            font:{size: fontHandler()}, // Set the font size for x-axis ticks
          },
        },
      }
    }
  
});
return () => {
  myChart.destroy()
}
  })
  

return (
    <section className="First">
        <div className="First-logo">
            <img src={logo} alt="Spring Money"/>
        </div>
        <div className="First-heading">
          Income Tax Savings Report
        </div>
        <div className="First-content">
          The Financial X-ray report provides a snapshot of your financial well-being, highlighting positive aspects and areas requiring attention. It covers five main areas: Savings and Budgeting, Loans and Debts, Investments, Taxation, and Insurance. Use the insights from the X-ray report to make informed decisions and implement improvements where necessary, ensuring stress free financial future.
        </div>
        <div className="barChart">
          <canvas id="myChart" height="200"></canvas>
        </div>
        <div className="firstTable">
            <div className='table'>
              <div className='row tableHeading'>
                <div className='dataCommon firstTableHeading'>Total Tax Payable</div>
                <div className='dataCommon center'>Old Regime</div>
                <div className='dataCommon center'>New Regime</div>
              </div>
              <div className='row'>
                <div className='dataCommon'>Existing (as per your inputs)</div>
                <div className='dataCommon center'>₹ 4,29,190</div>
                <div className='dataCommon center'>₹ 3,95,787</div>
              </div>
              <div className='row'>
                <div className='dataCommon'>As per recommendation by Spring Money</div>
                <div className='recommendedTableData dataCommon center'>₹ 3,02,639</div>
                <div className='dataCommon center'>₹ 3,95,787</div>
              </div>
            </div>
        </div>
        <div className="firstEndContent">
          See the detailed comparison table on the next page to make informed decisions and implement improvements where necessary, ensuring maximum savings on income tax.<br/><br/>
          The calculations and recommendations provided by Spring Money are based on the assumption that all the recommendations will be followed by you. Any deviation from any recommendation has an impact on the entire calculation affecting the recommendations which may result in different conclusions and advice.
        </div>
        <Footer></Footer>
    </section>
);
};
export default First;