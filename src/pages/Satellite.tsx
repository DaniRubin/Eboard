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
import {useParams, useNavigate} from 'react-router';
import {useEffect} from "react";

const Satellite = () => {
    const {satellite} = useParams();
    const navigate = useNavigate();
    const knownSatellites = ['Sat1', 'Sat2', 'Sat3', 'Sat4', 'Sat5', 'Sat6', 'Sat7', 'Sat8', 'Sat9', 'Sat10', 'Sat11', 'Sat12']

    useEffect(() => {
        if (!knownSatellites.includes(satellite || "")) {
            navigate('/null')
        }
    }, [satellite])


    const optionsSat = knownSatellites.map((s) => ({label: s, value: s}))
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
            <Header text={`${satellite} Dashboard`} logo={logo}/>
            <MainBoard>
                <MainBoardUpperPanel>
                    <CostumeSelect options={optionsSat} defaultValue={optionsSat.filter((option) => option.value === satellite)} onChange={(option) => {
                        navigate(`/satellite/${option.value}`)
                    }}/>
                    <CostumeSelect options={optionsTimes} defaultValue={optionsTimes[0]} onChange={() => {
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
  width: 60%;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: 7px;
  align-content: flex-start;
`

const OverviewContainer = styled.div`
  display: flex;
  width: 38%;
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
