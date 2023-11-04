import "@fontsource/poppins";
import styled from "styled-components";

import TotalCircleGraph from './components/TotalCircleGraph'
import SatelliteCircleGraph from './components/SatelliteCircleGraph'
import './App.css'
import CostumeSelect from "./components/CostumeSelect";
import RealTimeExceptions from "./components/RealTimeExceptions";
import SatelliteProfile from "./components/SatelliteProfile";
import Header from "./components/Layout/Header";
import LastUpdated from "./components/LastUpdated";

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
    {/*<SatelliteProfile satelliteData={satelliteData}/>*/
    }

    const data = {name: 'satellite name', value: 90, time: "00:00:00", minutes: "60 min"};

    return (
        <>
            <Header/>
            <MainBoard>
                <MainBoardUpperPanel>
                    <CostumeSelect options={options}/>
                    <CostumeSelect options={options}/>
                    <LastUpdated time={"10:10:10"}/>
                </MainBoardUpperPanel>

                <div style={{display: "flex", marginTop: '10px', alignItems: 'stretch'}}>
                    <SatelliteContainer>
                        <SatelliteCircleGraph data={data}/>
                        <SatelliteCircleGraph data={data}/>
                        <SatelliteCircleGraph data={data}/>
                        <SatelliteCircleGraph data={data}/>
                        <SatelliteCircleGraph data={data}/>
                        <SatelliteCircleGraph data={data}/>
                        <SatelliteCircleGraph data={data}/>
                        <SatelliteCircleGraph data={data}/>
                        <SatelliteCircleGraph data={data}/>
                        <SatelliteCircleGraph data={data}/>
                        <SatelliteCircleGraph data={data}/>
                        <SatelliteCircleGraph data={data}/>
                    </SatelliteContainer>

                    <OverviewContainer>
                        <TotalCircleGraph/>
                        <RealTimeExceptions downloads={downloads}/>
                    </OverviewContainer>
                </div>


            </MainBoard>
        </>
    )
}

export default App


const MainBoard = styled.div`
  //display: flex;
  margin: 32px 70px;
`
const MainBoardUpperPanel = styled.div`
  display: flex;
`
const SatelliteContainer = styled.div`
  display: flex;
  //border: 1px solid black;
  width: 60%;
  align-items: flex-start;
  align-content: flex-start;
  gap: 15px;
  flex-shrink: 0;
  flex-wrap: wrap;
`

const OverviewContainer = styled.div`
  display: flex;
  //border: 1px solid black;
  width: 38%;
  margin-left: 2%;
  align-items: stretch;
  align-content: stretch;
  gap: 15px;
  flex-shrink: 0;
  flex-wrap: wrap;
  flex-direction: column;
  
`
