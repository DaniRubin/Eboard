import logo from '../assets/SatelliteLogoHeader.svg';
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
import {useEffect, useState} from "react";
import {generateSatellite} from "../Mock";

const knownSatellites = ['Sat1', 'Sat2', 'Sat3', 'Sat4', 'Sat5', 'Sat6', 'Sat7', 'Sat8', 'Sat9', 'Sat10', 'Sat11', 'Sat12']
const optionsSat = knownSatellites.map((s) => ({label: s, value: s}))
const optionsTimes = [
    {value: '24 hours', label: '24 hours'},
    {value: '2 hours', label: '2 hours'},
    {value: '12 hours', label: '12 hours'},
    {value: '2 days', label: '2 days'},
    {value: '1 week', label: '1 week'},
];

const Satellite = () => {
    const {satellite} = useParams();
    const navigate = useNavigate();

    const [response, setResponse] = useState<any>(generateSatellite())

    useEffect(() => {
        if (!knownSatellites.includes(satellite || "")) navigate('/null')
        setResponse(generateSatellite())
    }, [satellite])

    return (
        <>
            <Header text={`${satellite} Dashboard`} logo={logo}/>
            <MainBoard>
                <MainBoardUpperPanel>
                    <CostumeSelect options={optionsSat}
                                   defaultValue={optionsSat.filter((option) => option.value === satellite)}
                                   onChange={(option) => {
                                       navigate(`/satellite/${option.value}`)
                                   }}/>
                    <CostumeSelect options={optionsTimes} defaultValue={optionsTimes[0]} onChange={() => {
                    }}/>
                    <LastUpdated time={response.lastUpdatedTime}/>
                </MainBoardUpperPanel>

                <SectionContainer>
                    <SatelliteContainer>
                        <TrendGraph data={response.Trend} numberOfHours={24}/>
                        <div style={{display: "flex", width: '100%', height: '260px', gap: '20px'}}>
                            <SatelliteCircleGraph satelliteName={response.Statistics.satelliteName}
                                                  value={Number(response.Statistics.percentage)}
                                                  time={response.Statistics.averageTime}
                                                  limit={response.Statistics.limitTime} onClick={() => {
                            }}/>
                            <RealTimeExceptions downloads={response.LateProducts}/>
                        </div>
                    </SatelliteContainer>
                    <OverviewContainer>
                        <SatelliteProfile satelliteData={response.Statistics}/>
                        <Histogram data={response.Histogram}/>
                    </OverviewContainer>
                </SectionContainer>
                <ServicesTime satType={response.SatType} data={response.ServicesTime}/>
            </MainBoard>
        </>
    )
}

export default Satellite

const MainBoard = styled.div`
  margin: 16px 35px;
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
