import React, {useState} from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart, Line } from 'react-chartjs-2'
import Calendar from 'react-calendar';

ChartJS.register(...registerables);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My Weight',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const WeightTracker = () => {
  const time = new Date()
  const [date, setDate] = useState(time);
 
  const onChange = (selectedDate) => {
    console.log(date)
    return setDate(selectedDate);
  };

  return (
    <div class="analytics"  style={{ 
      width: '100%', 
      height: '45%', 
      display: 'flex', 
      flexDirection: 'row' ,
    }}>
      <div class="chart">
        <Line
          data={data}
          width={800}
          height={600}
          options={{ maintainAspectRatio: false }}
          style={{ width: '50%', height: '30%' }}
        />
        
      </div>
      <div class="calander" style={{ width: '300px', height: '200px' }}>
          <Calendar onChange={onChange} value={date} />
          <p>Selected date: {date.toString()}</p>
      </div>
    </div>
    
  );
};

export default WeightTracker;
