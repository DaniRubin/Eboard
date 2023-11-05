import './TotalCircleGraph.css'
import { COLORS_YELLOW, COLORS_RED, COLORS_GREEN } from '../assets/colors'

type Props = {
    value: number,
  };

const TotalCircleGraph = ({ value }: Props) => {
    const getColor = (percentageValue: number) => {
        if (percentageValue < 80) return COLORS_RED
        else if (percentageValue > 80 && percentageValue < 90) return COLORS_YELLOW
        return COLORS_GREEN
      }
    
      const color = getColor(value);

  return (
    <div className="flex-wrapper-total">
        <div className="single-chart-total">
            <svg viewBox="0 0 36 36" className="circular-chart-total">
                <defs>
                    <linearGradient id="Total_Gradient">
                    <stop offset="0%" stopColor={color.light} />
                    <stop offset="100%" stopColor={color.light}/>
                    </linearGradient>
                </defs>
                <path className="circle-bg"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path stroke="url(#Total_Gradient)" className="circle"
                    strokeDasharray={`${value}, 100`}
                    markerEnd="url(#round)"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <a className="background-percentage">
                    <text x="18" y="13" className="title">TOTAL</text>
                    <rect x="10.5" y="15" width="15" height="7.5" rx="2.5" fill={color.medium} />
                    <text x="18" y="20.35" className="percentage">{value}%</text>
                </a>
            </svg>
        </div>
    </div>
  )
}

export default TotalCircleGraph
