import {PieChart, Pie, Cell, Tooltip, Legend} from 'recharts';
import styled from "styled-components";

type Props = {
    data: {
        name: string,
        value: number,
    }[],
    title: string,
    total: number,
    width?: number,
    height?: number,
    colors?: string[],
}
let COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#ff80ed', '#00ffff', '#ffd700', '#d3ffce']; // Add more colors as needed
const PieChartComponent = ({data, title, total, height, width, colors}: Props) => {
    let colorsToUse = colors || COLORS
    return (
        <PieChartWrapper>
            <HeaderWrapper>{title}</HeaderWrapper>
            <PieChart width={width ? width : 500} height={height ? height : 400}>
                <Pie
                    data={data}
                    innerRadius={0}
                    fill="#8884d8"
                    paddingAngle={0}
                    dataKey="value"
                    isAnimationActive={true} // Disable animation for an instant render
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colorsToUse[index % colorsToUse.length]}/>
                    ))}
                </Pie>
                <Tooltip formatter={(label) => `${label}/${total} :  ${Math.floor((label / total) * 100)}%`}/>
                <Legend/>
            </PieChart>
        </PieChartWrapper>
    );
};

export default PieChartComponent;

const PieChartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  border-radius: 15px;
  background: var(--white, #F8F8F8);
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.05);
`

const HeaderWrapper = styled.div`
  color: #3A3A3A;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`