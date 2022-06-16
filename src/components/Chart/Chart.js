import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({dataPoints}) => {
  const dataPointValues = dataPoints.map((e) => e.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className='chart'>
      {dataPoints.map((dataPoints) => (
        <ChartBar key={dataPoints.label} value={dataPoints.value} maxValue={totalMaximum} label={dataPoints.label} />
      ))}
    </div>
  );
};

export default Chart;
