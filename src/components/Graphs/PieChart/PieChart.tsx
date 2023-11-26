import {PieChart, Pie, Cell, Tooltip, Legend} from 'recharts';
import styled from "styled-components";

type Props = {
    data: {
        name: string,
        value: number,
    }[],
    title: string,
    total: number
}
const PieChartComponent = ({data, title, total}: Props) => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#ff80ed', '#00ffff', '#ffd700', '#d3ffce']; // Add more colors as needed

    return (
        <PieChartWrapper>
            <HeaderWrapper>{title}</HeaderWrapper>
            <PieChart width={500} height={400}>
                <Pie
                    data={data}
                    cx={250}
                    cy={150}
                    innerRadius={0}
                    fill="#8884d8"
                    paddingAngle={0}
                    dataKey="value"
                    isAnimationActive={true} // Disable animation for an instant render
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
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
  //width: 100%;
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