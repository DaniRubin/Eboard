import styled from "styled-components";

type Props = {
    completedAmount: number,
    totalAmount: number,
    plannedAmount: number,
    cfgPlannedAmount: number,
    headerText: string
}

const ProgressBarVertical = ({completedAmount, totalAmount, plannedAmount, cfgPlannedAmount, headerText}: Props) => {

    const percentageCompleted = Math.floor((completedAmount / totalAmount) * 100)
    const percentagePlanned = Math.floor((plannedAmount / totalAmount) * 100)
    const percentageCfgPlanned = Math.floor((cfgPlannedAmount / totalAmount) * 100)

    return (
        <>
            <ProgressWrapper>
                <ProgressWrapperHeader>{headerText}</ProgressWrapperHeader>
                <Percentage percentage={percentageCfgPlanned + percentageCompleted + percentagePlanned}>
                    {percentageCfgPlanned + percentageCompleted + percentagePlanned}%</Percentage>
                <ProgressBarStyle color={'#FE7670'}>
                    <ProgressBarFill color={'#09C31A'} style={{height: `${percentageCompleted}%`}}/>
                    <ProgressBarFill color={'#69CA72'} style={{height: `${percentageCfgPlanned}%`}}/>
                    <ProgressBarFill color={'#9ADBA0'} style={{height: `${percentagePlanned}%`}}/>
                </ProgressBarStyle>
                <Amount>{completedAmount}/{totalAmount}</Amount>


            </ProgressWrapper>
        </>
    );

};

export default ProgressBarVertical;


const Percentage = styled.div<{ percentage: number }>((props) => {
    let color = 'grey'
    if (props.percentage < 80) color = '#FE7670'
    else if (props.percentage >= 80 && props.percentage < 90) color = '#F90'
    else if (props.percentage >= 90) color = '#09C31A'
    return `
          display: flex;
          width: 59px;
          height: 29px;
          // padding: 6px 12px;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          background: ${color};
          
          font-size: 16px;
          font-weight: 600;
        `
})

const ProgressWrapperHeader = styled.div`
  color: #3A3A3A;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: -10px;
`
const ProgressWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  width: 70%;
`

const Amount = styled.div`
  color: #8E8E8E;
  font-size: 16px;
  font-weight: 600;
`

const ProgressBarStyle = styled.div<{ color: string }>((props) => {
    return `
      width: 80%;
      height: 300px;
      background-color: #FE7670;
      border-radius: 10px;
`
})

const ProgressBarFill = styled.div<{ color: string }>((props) => {
    return `
      height: 100%;
      background-color: ${props.color};
      transition: width 0.3s;
      border-radius: ${props.color === '#09C31A' ? '10px 10px 0px 0px': '0px'};
`
})