import {useState, useEffect} from 'react';
import styled from "styled-components";

type Props = {
    value: number,
    maxValue: number,
    headerText: string
}

const ProgressBar = ({value, maxValue, headerText}: Props) => {
    const [width, setWidth] = useState(0);
    const [color, setColor] = useState('#9ADBA0');

    useEffect(() => {
        const progressBarWidth = Math.floor((value / maxValue) * 100);
        setWidth(progressBarWidth);
        if (progressBarWidth >= 90) setColor('#9ADBA0')
        else if (progressBarWidth >= 80) setColor('#FFC46C')
        else setColor('#FE7670')
    }, [value, maxValue]);

    return (
        <>
            <ProgressWrapperHeader>{headerText}</ProgressWrapperHeader>
            <ProgressWrapper>
                <ProgressBarStyle color={color}>
                    <ProgressBarFill color={color} style={{width: `${width}%`}}/>
                    <ProgressBarText>{value} / {maxValue}</ProgressBarText>
                </ProgressBarStyle>

                <ProgressPercentage>
                    <PercentageText color={color}>{width}%</PercentageText>
                </ProgressPercentage>
            </ProgressWrapper>
        </>
    );

};

export default ProgressBar;

const ProgressWrapperHeader = styled.div`
  color: #3A3A3A;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: -10px;
`
const ProgressWrapper = styled.div`
  display: flex;
  gap: 15px;
`
const ProgressBarStyle = styled.div<{ color: string }>((props) => {
    return `
      width: 100%;
      height: 40px;
      background-color: #E8E8E8;
      border: 10px solid ${props.color};
      border-radius: 10px;
`
})

const ProgressBarFill = styled.div<{ color: string }>((props) => {
    return `
      height: 100%;
      background-color: ${props.color};
      transition: width 0.3s;
`
})
const ProgressBarText = styled.div`
  position: relative; /* Use relative positioning */
  text-align: center; /* Center the text horizontally */
  color: var(--white, #3A3A3A);
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: -37px;
`
const ProgressPercentage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  background-color: #F8F8F8;
  width: 72px;
`
const PercentageText = styled.div<{ color: string }>((props) => {
    return `
  text-align: center; /* Center the text horizontally */
  color: ${props.color};
  font-family: Poppins;
  font-size: 20px;
  font-weight: 700;
`
})
