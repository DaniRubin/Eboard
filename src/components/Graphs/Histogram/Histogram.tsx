import styled from "styled-components";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Cell,
    ResponsiveContainer
} from "recharts";

type Props = {
    data: {
        count: number,
        seconds: number
    }[],
};
const Histogram = ({data}: Props) => (
    <HistogramWrapper>
        <HistogramTitle>distribution time distribution</HistogramTitle>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={data}
                margin={{
                    top: 0,
                    right: 20,
                    left: 10,
                    bottom: 20
                }}
            >
                <XAxis stroke="#A3A3A3" dataKey="seconds" label={{value: 'Distribution time', position: 'bottom'}}
                       padding={{left: 10, right: 10}}/>
                <YAxis stroke="#A3A3A3" label={{value: 'Products count', position: 'left', angle: -90, offset: -10}}/>
                <Tooltip cursor={false}/>
                <Bar dataKey="count" fill="#black" background={{fill: "#F8F8F8"}}>
                    {
                        data.map((entry, index) => {
                            const color = entry.seconds > 300 ? '#FEEAEC' : '#DAF1DD';
                            return <Cell fill={color} radius={[20, 20, 0, 0]}/>;
                        })
                    }
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    </HistogramWrapper>
)

export default Histogram;


const HistogramWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 20px;
  background: var(--white, #F8F8F8);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px 0px;

  color: #3A3A3A;

`
const HistogramTitle = styled.div`
  color: var(--dark-grey, #3A3A3A);
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
`
