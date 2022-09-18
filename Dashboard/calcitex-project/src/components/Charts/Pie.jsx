import React from 'react'
import{BiRupee } from 'react-icons/bi';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./pie.css";
/* import {Chart,Tooltip,ArcElement,Title,Legend} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
Chart.register(Tooltip,ArcElement,Title,Legend); */
/* const data = {
    labels: [
      'Equity',
      'Non Equity'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300,100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'red'
        
      ],
      hoverOffset: 4
    }]
  }; */
 /*  const options = {
    Legend: {
      display: true,
      position: "right"
    } 
}*/
const percentage = 66;
const  amount=408.00;
const Pie = () => {
    return (
        <div className="peiheader">
          <span className='text-2xl font-extrabold ml-2'>AMU</span>
        <div className='flex justify-between'>
          <div className="ml-4 circularbar" style={{width: 90, height:100}}>
            <CircularProgressbar value={percentage} text={`${amount}.00 cr`} styles={buildStyles({
                rotation: 0.25,    
                strokeLinecap: 'butt',
                textSize: '16px',
                fontWeight:600,
                pathTransitionDuration: 0.5,
                // pathTransition: 'none',
                // Colors
                pathColor: `rgba(245,9,5, ${percentage / 100})`,
                textColor: '#000',
                trailColor: '#fca5a5',
                backgroundColor: 'red',
              })}/>
          </div>
          <div className='piedetails mr-3 '>
            <span className='bts1'>'rr'</span><span className='piehead'>Equity</span>
            <span className='pietext'><BiRupee className='mtk'/><span className='pietext1'>280.77 cr</span><span className='mtk1'>({`${percentage}%`})</span></span>
            <span className='bts2'>'rr'</span><span className='piehead'>Non Equity</span>
            <span className='pietext'><BiRupee className='mtk'/><span className='pietext1'>127.23 cr</span><span className='mtk1'>({`${100-percentage}%`})</span></span>
          </div>
        </div>
        </div>
    )
}

export default Pie
