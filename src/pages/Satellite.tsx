import logo from '../assets/ProductionLogoHeader.svg';
import Header from "../components/Layout/Header";
import CostumeSelect from "../components/CostumeSelect";
import LastUpdated from "../components/LastUpdated";
import styled from "styled-components";
import TrendGraph from "../components/Graphs/Trend/TrendGraph";
import SatelliteCircleGraph from "../components/Graphs/CircleGraph/SatelliteCircleGraph";
import RealTimeExceptions from "../components/Tables/RealTimeExceptions";
import SatelliteProfile from "../components/Tables/SatelliteProfile";
import Histogram from "../components/Graphs/Histogram/Histogram";
import ServicesTime from "../components/ServicesTime";

const Satellite = () => {

    const optionsSatFamily = [
        {value: 'sat1', label: 'sat1'},
        {value: 'sat2', label: 'sat2'},
        {value: 'sat3', label: 'sat3'},
        {value: 'sat4', label: 'sat4'},
        {value: 'sat5', label: 'sat5'},
        {value: 'sat6', label: 'sat6'},
        {value: 'sat7', label: 'sat7'},
        {value: 'sat8', label: 'sat8'},
        {value: 'sat9', label: 'sat9'},
        {value: 'sat10', label: 'sat10'},
        {value: 'sat11', label: 'sat11'},
        {value: 'sat12', label: 'sat12'},
    ];
    const optionsTimes = [
        {value: '24 hours', label: '24 hours'},
        {value: '2 hours', label: '2 hours'},
        {value: '12 hours', label: '12 hours'},
        {value: '2 days', label: '2 days'},
        {value: '1 week', label: '1 week'},
    ];
    const response = {
        lastUpdatedTime: "10:11:12",
        LateProducts: [{downloadId: 'chocolate', time: '10:00', urgent: true},
            {downloadId: 'strawberry', time: '20:00', urgent: true},
            {downloadId: 'vanilla', time: '30:00', urgent: true},
            {downloadId: 'dsffs', time: '30:00', urgent: false},
            {downloadId: 'gfdgd', time: '30:00', urgent: true},
            {downloadId: 'sdfdsf', time: '30:00', urgent: false},
            {downloadId: 'sdvsdv', time: '30:00', urgent: true}
        ],
    }

    const satelliteData = {
        satelliteName: 'Satellite A',
        averageTime: '2.5 seconds',
        limitTime: '3 seconds',
        productsCount: 100,
        onTimeProducts: 80,
        lateProducts: 20,
        cep90: '3.2 seconds',
        productsInProgress: '10',
        metadataProblems: 5
    };

    return (
        <>
            <Header text={"Satellite Dashboard"} logo={logo}/>
            <MainBoard>
                <MainBoardUpperPanel>
                    <CostumeSelect options={optionsSatFamily} onChange={() => {
                    }}/>
                    <CostumeSelect options={optionsTimes} onChange={() => {
                    }}/>
                    <LastUpdated time={response.lastUpdatedTime}/>
                </MainBoardUpperPanel>

                <SectionContainer>
                    <SatelliteContainer>
                        <TrendGraph/>
                        <div style={{display: "flex", width: '100%', height: '260px', gap: '20px'}}>
                            <SatelliteCircleGraph satelliteName={'Sat1'} value={91} time={'00:00:00'} limit={'60 min'}/>
                            <RealTimeExceptions downloads={response.LateProducts}/>
                        </div>
                    </SatelliteContainer>
                    <OverviewContainer>
                        <SatelliteProfile satelliteData={satelliteData}/>
                        <Histogram/>
                    </OverviewContainer>
                </SectionContainer>
                <ServicesTime/>
            </MainBoard>
        </>
    )
}

export default Satellite

const MainBoard = styled.div`
  margin: 32px 35px;
`
const MainBoardUpperPanel = styled.div`
  display: flex;
`
const SatelliteContainer = styled.div`
  display: flex;
  width: 70%;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: 7px;
  align-content: flex-start;
`

const OverviewContainer = styled.div`
  display: flex;
  width: 30%;
  align-items: stretch;
  align-content: stretch;
  gap: 15px;
  flex-shrink: 0;
  //flex-wrap: wrap;
  flex-direction: column;
`

const SectionContainer = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
`
