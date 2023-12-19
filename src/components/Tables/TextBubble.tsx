import styled from "styled-components";
import dayTimeIcon from '../../assets/passboard/dayTime.svg'
import nightTimeIcon from '../../assets/passboard/nightTime.svg'
import eoSatTypeIcon from '../../assets/passboard/eoSatType.svg'
import sarSatTypeIcon from '../../assets/passboard/sarSatType.svg'

type Props = {
    country: string,
    logo: any;
    top: number;
    left: number;
    isOpen: boolean,
    onClick: () => void
    data: {
        eo_day: {
            start: string,
            end: string,
            amount: string
        },
        eo_night: {
            start: string,
            end: string,
            amount: string
        },
        sar: {
            start: string,
            end: string,
            amount: string
        },
    }
}

const TextBubble = ({data, logo, country, top, left, isOpen, onClick}: Props) => {
    return (
        <TextBubbleWrapper top={top} left={left} isOpen={isOpen} onClick={onClick}>
            <HeaderWrapper>{<img src={logo} height={"20px"}/>}{country}</HeaderWrapper>
            <Triangle/>

            {isOpen && <>
                {
                    data.eo_day && <PassBoardRow>
                        <div>EO</div>
                        <TimeComponent>{data.eo_day.start}-{data.eo_day.end}</TimeComponent>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <IconAmountWrapper>{data.eo_day.amount}</IconAmountWrapper>
                            <IconWrapper height={'22px'} src={dayTimeIcon}/>
                        </div>
                    </PassBoardRow>
                }

                {data.eo_night && <PassBoardRow>
                    <div>EO</div>
                    <TimeComponent>{data.eo_night.start}-{data.eo_night.end}</TimeComponent>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <IconAmountWrapper>{data.eo_night.amount}</IconAmountWrapper>
                        <IconWrapper height={'22px'} src={nightTimeIcon}/>
                    </div>
                </PassBoardRow>}

                {data.sar && <PassBoardRow>
                    <div>SAR</div>
                    <TimeComponent>{data.sar.start}-{data.sar.end}</TimeComponent>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <IconAmountWrapper>{data.sar.amount}</IconAmountWrapper>
                        <IconWrapper height={'22px'} src={sarSatTypeIcon}/>
                    </div>
                </PassBoardRow>}
            </>}
        </TextBubbleWrapper>
    );
};

const TimeComponent = styled.div`
  color: #8E8E8E;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
`
const IconWrapper = styled.img`
  margin: 3px;
`
const IconAmountWrapper = styled.div`
  background-color: #9ADBA0;
  height: 22px;
  width: 22px;
  border-radius: 27px;
  //padding: 0px 4px 1px 3px;
  color: #F8F8F8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;

`
const PassBoardRow = styled.div`
  margin: 10px 5px;
  height: 32px;
  border-radius: 5px;
  background: #E8E8E8;
  color: #3A3A3A;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 5px 0px 13px;
`
const HeaderWrapper = styled.div`
  color: #3A3A3A;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  flex-direction: column;
  //margin: 20px auto 10px auto;
  //gap: 15px;
`
const TextBubbleWrapper = styled.div<{ top: number, left: number, isOpen: boolean }>(props => `
  position: absolute;
  width: 200px;
  background-color: white;
  color: black;
  padding: 10px 0px 0px 0px;
  border-radius: 10px;
  z-index: ${props.isOpen ? '500' : '100'};
  top: ${props.isOpen ? props.top : props.top + 130}px;
  left: ${props.left}px;
`)
const Triangle = styled.div`
  position: absolute;
  bottom: -20px;
  left: 50%;
  margin-left: -30px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 30px 20px 30px;
  border-color: transparent transparent white transparent;
  transform: rotate(180deg);
`
export default TextBubble;