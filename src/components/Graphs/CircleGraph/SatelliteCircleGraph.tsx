import './SatelliteCircleGraph.css'
import {COLORS_YELLOW, COLORS_RED, COLORS_GREEN, COLORS_GRAY} from '../../../assets/colors'

type Props = {
    satelliteName: string,
    value: number,
    time: string,
    limit: string,
    onClick: () => void
};

const SatelliteCircleGraph = ({satelliteName, value, time, limit, onClick}: Props) => {
    if (satelliteName === 'TOTAL') return null
    const isDisabled = (value === 0 && time === '-')

    const getColor = (percentageValue: number) => {
        if (isDisabled) return COLORS_GRAY
        else if (percentageValue < 80) return COLORS_RED
        else if (percentageValue >= 80 && percentageValue < 90) return COLORS_YELLOW
        return COLORS_GREEN
    }

    const color = getColor(value);
    const rand = Math.random()

    return (
        <div key={satelliteName} className="flex-wrapper" onClick={isDisabled ? null : onClick}>
            <div className="single-chart"
                 style={{opacity: isDisabled ? 0.4 : 1, cursor: isDisabled ? 'arrow' : 'pointer'}}>
                <text className="sat_title">{satelliteName}</text>
                <svg viewBox="0 0 36 36" className="circular-chart-satellite">
                    <defs>
                        <linearGradient id={`Satellite_Gradient_${rand}`}>
                            <stop offset="0%" stopColor={color.light}/>
                            <stop offset="100%" stopColor={color.light}/>
                        </linearGradient>
                    </defs>
                    <path className="circle-bg"
                          d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path stroke={`url(#Satellite_Gradient_${rand})`} className="circle"
                          strokeDasharray={`${value}, 100`}
                          markerEnd="url(#round)"
                          d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <a className="background-percentage">
                        <rect x="13.3" y="9.7" width="9.8" height="4.5" rx="1.5" fill={color.medium}/>
                        <text x="18.5" y="13" className="percentage_mini">{value}%</text>
                        <text x="18" y="20.35" className="time" fill={color.medium}>{time}</text>
                        <text x="18" y="25" className="time_minutes">{limit} min</text>
                    </a>
                </svg>
            </div>
        </div>
    )
}

export default SatelliteCircleGraph
