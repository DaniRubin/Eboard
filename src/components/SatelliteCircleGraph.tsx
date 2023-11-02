import './SatelliteCircleGraph.css'

const data = { name: 'satellite name', value: 90, time: "00:00:00", minutes: "60 min" };
// const COLORS_YELLOW = {
//     light: '#FFDAB9',   
//     medium: '#FFB248',  
//     hard: '#FFA900',   
//   };

  const COLORS_RED = {
    light: '#FFB6C1',   // Light shade of red (Light Pink)
    medium: '#FF5733',  // Medium shade of red
    hard: '#FF0000',    // Hard shade of red
  };
  // const COLORS_GREEN = {light:'#7ADBA5',medium: '#4CC790',hard: '#48bf53'};


const SatelliteCircleGraph = () => {
  return (
    <>
    
     <div className="flex-wrapper">
        <div className="single-chart">
            <text  className="sat_title">{data.name}</text>
            <svg viewBox="0 0 36 36" className="circular-chart">
                <defs>
                    <linearGradient id="Satellite_Gradient">
                    <stop offset="0%" stop-color={COLORS_RED.hard} />
                    <stop offset="100%" stop-color={COLORS_RED.light}/>
                    </linearGradient>
                </defs>
                <path className="circle-bg"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path stroke="url(#Satellite_Gradient)" className="circle"
                    stroke-dasharray={`${data.value}, 100`}
                    marker-end="url(#round)"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <a className="background-percentage">
                    <rect x="13.3" y="9.7" width="9.8" height="4.5" rx="1.5" fill={COLORS_RED.medium} />
                    <text x="18.5" y="13" className="percentage_mini">{data.value}%</text>
                    <text x="18" y="20.35" className="time" fill={COLORS_RED.medium}>{data.time}</text>
                    <text x="18" y="25" className="time_minutes">{data.minutes}</text>
                </a>
            </svg>
            </div>
        </div>
    </>
  )
}

export default SatelliteCircleGraph
