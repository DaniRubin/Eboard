import './TotalCircleGraph.css'

const data = { name: 'TITLE', value: 90 };
const COLORS_GREEN = {light_green: '#A2EFD3',medium_green: '#4CC790',hard_green: '#48bf53'};


const TotalCircleGraph = () => {
  return (
    <div className="flex-wrapper">
        <div className="single-chart">
            <svg viewBox="0 0 36 36" className="circular-chart-total">
                <defs>
                    <linearGradient id="Total_Gradient">
                    <stop offset="0%" stopColor={COLORS_GREEN.hard_green} />
                    <stop offset="100%" stopColor={COLORS_GREEN.light_green}/>
                    </linearGradient>
                </defs>
                <path className="circle-bg"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path stroke="url(#Total_Gradient)" className="circle"
                    strokeDasharray={`${data.value}, 100`}
                    markerEnd="url(#round)"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <a className="background-percentage">
                    <text x="18" y="13" className="title">{data.name}</text>
                    <rect x="10.5" y="15" width="15" height="7.5" rx="2.5" fill={COLORS_GREEN.medium_green} />
                    <text x="18" y="20.35" className="percentage">{data.value}%</text>
                </a>
            </svg>
        </div>
    </div>
  )
}

export default TotalCircleGraph
