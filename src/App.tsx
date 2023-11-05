import "@fontsource/poppins";
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';

import styled from "styled-components";
import TotalCircleGraph from './components/CircleGraph/TotalCircleGraph'
import SatelliteCircleGraph from './components/CircleGraph/SatelliteCircleGraph'
import CostumeSelect from "./components/CostumeSelect";
import RealTimeExceptions from "./components/Tables/RealTimeExceptions";
import Header from "./components/Layout/Header";
import LastUpdated from "./components/LastUpdated";
import InfoBox from "./components/InfoBox";
import SideNav from "./components/Layout/SideNav";

const App = () => {

    const optionsSatFamily = [
        {value: 'All', label: 'All'},
        {value: 'SAT FAMILY 1', label: 'SAT FAMILY 1'},
        {value: 'SAT FAMILY 2', label: 'SAT FAMILY 2'},
        {value: 'SAT FAMILY 3', label: 'SAT FAMILY 3'}
    ];
    const optionsTimes = [
        {value: '24 hours', label: '24 hours'},
        {value: '2 hours', label: '2 hours'},
        {value: '12 hours', label: '12 hours'},
        {value: '2 days', label: '2 days'},
        {value: '1 week', label: '1 week'},
    ];

    const response = {
        SatInfo: [
            {satelliteName: 'Sat1', value: 90, time: "00:00:00", minutes: "60 min"},
            {satelliteName: 'Sat2', value: 72, time: "00:00:00", minutes: "60 min"},
            {satelliteName: 'Sat3', value: 15, time: "00:00:00", minutes: "60 min"},
            {satelliteName: 'Sat4', value: 87, time: "00:00:00", minutes: "60 min"},
            {satelliteName: 'Sat5', value: 90, time: "00:00:00", minutes: "60 min"},
            {satelliteName: 'Sat6', value: 88, time: "00:00:00", minutes: "60 min"},
            {satelliteName: 'Sat7', value: 9, time: "00:00:00", minutes: "60 min"},
            {satelliteName: 'Sat8', value: 44, time: "00:00:00", minutes: "60 min"},
            {satelliteName: 'Sat9', value: 0, time: "-", minutes: "60 min"},
            {satelliteName: 'Sat10', value: 66, time: "00:00:00", minutes: "60 min"},
            {satelliteName: 'Sat11', value: 77, time: "00:00:00", minutes: "60 min"},
            {satelliteName: 'Sat12', value: 99, time: "00:00:00", minutes: "60 min"},
        ],
        LateProducts: [
            {downloadId: 'chocolate', time: '10:00', urgent: true},
            {downloadId: 'strawberry', time: '20:00', urgent: true},
            {downloadId: 'vanilla', time: '30:00', urgent: true},
            {downloadId: 'dsffs', time: '30:00', urgent: false},
            {downloadId: 'gfdgd', time: '30:00', urgent: true},
            {downloadId: 'sdfdsf', time: '30:00', urgent: false},
            {downloadId: 'sdvsdv', time: '30:00', urgent: true},
            {downloadId: 'nhgnghf', time: '30:00', urgent: false},
            {downloadId: 'gsfg', time: '30:00', urgent: true},
            {downloadId: 'vanfdfdilla', time: '30:00', urgent: false},
            {downloadId: 'nfn', time: '30:00', urgent: true},
            {downloadId: 'vanidfglla', time: '30:00', urgent: true},
            {downloadId: 'vanfbvdfilla', time: '30:00', urgent: true}
        ],
        lastUpdatedTime: "10:11:12",
        LFMetadataProblem: 1,
        InProgressProducts: 4
    }

    // const satelliteData = {
    //     satelliteName: 'Satellite A',
    //     averageTime: '2.5 seconds',
    //     limitTime: '3 seconds',
    //     productsCount: 100,
    //     onTimeProducts: 80,
    //     lateProducts: 20,
    //     cep90: '3.2 seconds',
    //     productsInProgress: '10',
    //     metadataProblems: 5
    // };
    // {/*<SatelliteProfile satelliteData={satelliteData}/>*/
    // }

    return (
        <Wrapper>
            <SideNav/>
            <div style={{marginLeft: "160px"}}>
                <Header/>
                <MainBoard>
                    <MainBoardUpperPanel>
                        <CostumeSelect options={optionsSatFamily}/>
                        <CostumeSelect options={optionsTimes}/>
                        <LastUpdated time={response.lastUpdatedTime}/>
                    </MainBoardUpperPanel>

                    <SectionContainer>
                        <SatelliteContainer>
                            {response.SatInfo.map((satInfo) => {
                                return <SatelliteCircleGraph satelliteName={satInfo.satelliteName}
                                                             value={satInfo.value}
                                                             time={satInfo.time}
                                                             limit={satInfo.minutes}/>

                            })}

                        </SatelliteContainer>
                        <OverviewContainer>
                            <TotalCircleGraph value={50}/>
                            <RealTimeExceptions downloads={response.LateProducts}/>
                            <SectionContainer>
                                <InfoBox text={'LF metadata problem: '} value={response.LFMetadataProblem} isPositiveValue={false}/>
                                <InfoBox text={'In Progress products: '} value={response.InProgressProducts} isPositiveValue={true}/>
                            </SectionContainer>
                        </OverviewContainer>
                    </SectionContainer>


                </MainBoard>
            </div>
        </Wrapper>
    )
}

export default App

const Wrapper = styled.div`
  text-align: center;
`
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
`

const OverviewContainer = styled.div`
  display: flex;
  width: 30%;
  align-items: stretch;
  align-content: stretch;
  gap: 15px;
  flex-shrink: 0;
  flex-wrap: wrap;
  flex-direction: column;
`

const SectionContainer = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  width: 100%;
`
