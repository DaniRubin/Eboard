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
import './App.css'
import TotalCircleGraph from './components/TotalCircleGraph'
import SatelliteCircleGraph from './components/SatelliteCircleGraph'
import CostumeSelect from "./components/CostumeSelect";
import RealTimeExceptions from "./components/RealTimeExceptions";
import Header from "./components/Layout/Header";
import LastUpdated from "./components/LastUpdated";
import InfoBox from "./components/InfoBox";
import SideNav from "./components/Layout/SideNav";

const App = () => {

    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'}
    ];

    const downloads = [
        {downloadId: 'chocolate', time: '10:00'},
        {downloadId: 'strawberry', time: '20:00'},
        {downloadId: 'vanilla', time: '30:00'},
        {downloadId: 'dsffs', time: '30:00'},
        {downloadId: 'gfdgd', time: '30:00'},
        {downloadId: 'sdfdsf', time: '30:00'},
        {downloadId: 'sdvsdv', time: '30:00'},
        {downloadId: 'nhgnghf', time: '30:00'},
        {downloadId: 'gsfg', time: '30:00'},
        {downloadId: 'vanfdfdilla', time: '30:00'},
        {downloadId: 'nfn', time: '30:00'},
        {downloadId: 'vanidfglla', time: '30:00'},
        {downloadId: 'vanfbvdfilla', time: '30:00'}
    ];
    const satellitesInfoList = [
        {satelliteName: 'Sat1', value: 90, time: "00:00:00", minutes: "60 min"},
        {satelliteName: 'Sat2', value: 72, time: "00:00:00", minutes: "60 min"},
        {satelliteName: 'Sat3', value: 15, time: "00:00:00", minutes: "60 min"},
        {satelliteName: 'Sat4', value: 87, time: "00:00:00", minutes: "60 min"},
        {satelliteName: 'Sat5', value: 90, time: "00:00:00", minutes: "60 min"},
        {satelliteName: 'Sat6', value: 88, time: "00:00:00", minutes: "60 min"},
        {satelliteName: 'Sat7', value: 9, time: "00:00:00", minutes: "60 min"},
        {satelliteName: 'Sat8', value: 44, time: "00:00:00", minutes: "60 min"},
        {satelliteName: 'Sat9', value: 55, time: "00:00:00", minutes: "60 min"},
        {satelliteName: 'Sat10', value: 66, time: "00:00:00", minutes: "60 min"},
        {satelliteName: 'Sat11', value: 77, time: "00:00:00", minutes: "60 min"},
        {satelliteName: 'Sat12', value: 99, time: "00:00:00", minutes: "60 min"},
    ];

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

    const data = {satelliteName: 'satellite name', value: 90, time: "00:00:00", minutes: "60 min"};

    return (
        <>
            <SideNav/>
            <div style={{marginLeft: "160px"}}>
            <Header/>
                <MainBoard>
                    <MainBoardUpperPanel>
                        <CostumeSelect options={options}/>
                        <CostumeSelect options={options}/>
                        <LastUpdated time={"10:10:10"}/>
                    </MainBoardUpperPanel>

                    <SectionContainer>
                        <SatelliteContainer>
                            {satellitesInfoList.map((satInfo) => {
                                return <SatelliteCircleGraph satelliteName={satInfo.satelliteName}
                                                             value={satInfo.value}
                                                             time={satInfo.time}
                                                             limit={satInfo.minutes}/>

                            })}

                        </SatelliteContainer>
                        <OverviewContainer>
                            <TotalCircleGraph value={50}/>
                            <RealTimeExceptions downloads={downloads}/>
                            <SectionContainer>
                                <InfoBox text={'LF metadata problem: '} value={5} isPositiveValue={false}/>
                                <InfoBox text={'In Progress products: '} value={10} isPositiveValue={true}/>
                            </SectionContainer>
                        </OverviewContainer>
                    </SectionContainer>


                </MainBoard>
            </div>
        </>
    )
}

export default App


const MainBoard = styled.div`
  //display: flex;
  margin: 32px 35px;
`
const MainBoardUpperPanel = styled.div`
  display: flex;
`
const SatelliteContainer = styled.div`
  display: flex;
  width: 67%;
  gap: 20px;
  margin-left: 8px;
  flex-wrap: wrap;
  justify-content: center;
`

const OverviewContainer = styled.div`
  display: flex;
  width: 33%;
  //margin-left: 2%;
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
