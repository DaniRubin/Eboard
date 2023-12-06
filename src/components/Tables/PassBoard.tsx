import styled from "styled-components";
import dayTimeIcon from '../../assets/passboard/dayTime.svg'
import nightTimeIcon from '../../assets/passboard/nightTime.svg'
import eoSatTypeIcon from '../../assets/passboard/eoSatType.svg'
import sarSatTypeIcon from '../../assets/passboard/sarSatType.svg'

type Props = {
    country: string,
    logo: any;
    data: {
        name: string,
        time: number,
        dayTime: boolean,
        eo: boolean,
    }[]
}

const PassBoardComponent = ({data, logo, country}: Props) => {
    return (
        <PassBoardWrapper>
            <HeaderWrapper>{<img src={logo} height={"40px"}/>}{country}</HeaderWrapper>
            <PassesSection>
                {data.map((row, index) => (
                    <PassBoardRow>
                        <div>{row.name}</div>
                        <TimeComponent>{row.time}</TimeComponent>
                        <div>
                            {row.dayTime ? <IconWrapper src={dayTimeIcon}/> : <IconWrapper src={nightTimeIcon}/>}
                            {row.eo ? <IconWrapper src={eoSatTypeIcon}/> : <IconWrapper src={sarSatTypeIcon}/>}
                        </div>
                    </PassBoardRow>

                ))}
            </PassesSection>
        </PassBoardWrapper>
    );
};

const PassesSection = styled.div`
  height: 70vh;
  overflow-y: scroll;
  margin-right: 15px;
`
const HeaderWrapper = styled.div`
  color: #3A3A3A;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  display: flex;
  align-items: center;
  flex-direction: column;
  //margin: 20px auto 10px auto;
  gap: 15px;
`
const TimeComponent = styled.div`
  color: #8E8E8E;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`
const IconWrapper = styled.img`
  margin: 3px;
`
const PassBoardWrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  height: 80vh;
  flex-shrink: 0;
  border-radius: 15px;
  background: var(--white, #F8F8F8);
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.05);
`
const PassBoardRow = styled.div`
  margin: 10px 20px;
  height: 50px;
  border-radius: 5px;
  background: #E8E8E8;
  color: #3A3A3A;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
`
export default PassBoardComponent;