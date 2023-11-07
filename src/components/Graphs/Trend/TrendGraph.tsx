import styled from "styled-components";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';


type Props = {
    data: {
        timeFrame: string,
        seconds: number
    }[],
    numberOfHours: number,
};

const TrendGraph = ({data, numberOfHours}: Props) => (
    <TrendWrapper>
        <TrendTitle>distribution trend</TrendTitle>
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{top: 5, right: 40, left: 20, bottom: 60}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="timeFrame" label={{value: 'Time', position: 'bottom'}}/>
                <YAxis/>
                <Tooltip/>
                {/*<Legend />*/}
                <Line type="monotone" dataKey="seconds" stroke="#9ADBA0" strokeWidth={'3px'} activeDot={{r: 7}}/>
                {/*<Line type="monotone" dataKey="uv" stroke="#82ca9d"/>*/}
            </LineChart>
        </ResponsiveContainer>

    </TrendWrapper>
)

export default TrendGraph;


const TrendWrapper = styled.div`
  width: 100%;
  height: 430px;
  border-radius: 20px;
  background: var(--white, #F8F8F8);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);
  padding: 10px 0px;

  color: #3A3A3A;
`


const TrendTitle = styled.div`
  color: var(--dark-grey, #3A3A3A);
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
`