import styled from "styled-components";
import logo from '../../../assets/Iran.png';

type Props = {
    completedAmount: number,
    totalAmount: number,
    plannedAmount: number,
    cfgPlannedAmount: number,
    country: string
}

const HalfPieChart = ({completedAmount, totalAmount, plannedAmount, cfgPlannedAmount, country}: Props) => {
    const percentageCompleted = Math.floor((completedAmount / totalAmount) * 100)
    const percentagePlanned = Math.floor((plannedAmount / totalAmount) * 100)
    const percentageCfgPlanned = Math.floor((cfgPlannedAmount / totalAmount) * 100)

    return <HalfPieChartWrapper>
        <HeaderWrapper><img src={logo} height={"20px"}/>{country}</HeaderWrapper>

        <MultiGraph>
            <MetadataBlock>
                <Percentage percentage={percentageCompleted}>{percentageCompleted}%</Percentage>
                <Amount>{completedAmount}/{totalAmount}</Amount>
            </MetadataBlock>
            <Graph data-name={`Non Taken ${100 - (percentageCompleted + cfgPlannedAmount + plannedAmount)}%`}
                   color={"#FFC8CD"} percentage={100}>
            </Graph>
            <Graph data-name={`Completed ${percentageCompleted}%`} color={"#00A10F"}
                   percentage={percentageCfgPlanned + percentageCompleted + percentagePlanned}>
            </Graph>
            <Graph data-name={`CFG-Planned ${percentageCfgPlanned}%`} color={"#6AC672"}
                   percentage={percentageCfgPlanned + percentagePlanned}>
            </Graph>
            <Graph data-name={`Planned ${percentagePlanned}%`} color={"#9ADBA0"} percentage={percentagePlanned}>
            </Graph>
        </MultiGraph>
    </HalfPieChartWrapper>
};

const HeaderWrapper = styled.div`
  color: #3A3A3A;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px
`

const HalfPieChartWrapper = styled.div`
  border-radius: 15px;
  background: var(--white, #F8F8F8);
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-wrap: wrap;
  width: 28%;
  min-width: 450px;
  justify-content: center;
  padding: 20px;
  gap: 10px;
  align-items: center;
  flex-direction: column;
`
const MultiGraph = styled.div`
  width: 400px;
  height: 200px;
  position: relative;
  color: black;
  font-size: 22px;
  font-weight: 600;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;

  &:before {
    content: '';
    width: 400px;
    height: 200px;
    border: 75px solid #FFC8CD;
    border-bottom: none;
    position: absolute;
    box-sizing: border-box;
    transform-origin: 50% 0%;
    border-radius: 400px 400px 0 0;
    left: 0;
    top: 0;
  }
`

const Graph = styled.div<{ color: string, percentage: number }>((props) => {
    return `
  width: 400px;
  height: 200px;
  border: 75px solid ${props.color};
  border-top: none;
  position: absolute;
  transform-origin: 50% 0% 0;
  border-radius: 0 0 400px 400px;
  left: 0;
  top: 100%;
  z-index: 5;
  animation: 1s fillGraphAnimation ease-in;
  transform: rotate(calc(1deg * (${props.percentage} * 1.8)));
  box-sizing: border-box;
  cursor: pointer;

  &:after {
    content: attr(data-name);
    counter-reset: varible ${props.percentage};
    background:${props.color};
    box-sizing: border-box;
    border-radius: 2px;
    color: #fff;
    font-weight: 200;
    font-size: 12px;
    height: 20px;
    padding: 3px 5px;
    top: 0px;
    position: absolute;
    left: 0;
    transform: rotate(calc(-1deg *${props.percentage} * 1.8)) translate(-30px, 0px);
    transition: 0.2s ease-in;
    transform-origin: 0 50% 0;
    opacity: 0;
  }

  &:hover {
    opacity: 0.8;

    &:after {
      opacity: 1;
      left: 30px;
      border: 1px solid black;
      font-size: 20px;
      color: black;
      height: 40px;
    }
  }

  @keyframes fillGraphAnimation {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
  }
`

})

const Percentage = styled.div<{ percentage: number }>((props) => {
    let color = 'grey'
    if (props.percentage < 80) color = '#FE7670'
    else if (props.percentage >= 80 && props.percentage < 90) color = '#F90'
    else if (props.percentage >= 90) color = '#09C31A'
    return `
          display: flex;
          width: 59px;
          height: 29px;
          padding: 6px 12px;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
          border-radius: 10px;
          background: ${color};
        `
})

const Amount = styled.div`
  color: var(--grey, #8E8E8E);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const MetadataBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`

export default HalfPieChart;
