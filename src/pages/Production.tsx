import {useCallback, useEffect, useState} from 'react';

import styled from "styled-components";
import TotalCircleGraph from '../components/Graphs/CircleGraph/TotalCircleGraph'
import SatelliteCircleGraph from '../components/Graphs/CircleGraph/SatelliteCircleGraph'
import CostumeSelect from "../components/General/CostumeSelect";
import RealTimeExceptions from "../components/Tables/RealTimeExceptions";
import LastUpdated from "../components/General/LastUpdated";
import InfoBox from "../components/General/InfoBox";
import Header from "../components/Layout/Header";
import logo from '../assets/ProductionLogoHeader.svg';
import {useNavigate} from "react-router";
import {MockMainPageResponse} from '../Mock'
import {MOCKED} from "../App";
import ActiveButton from "../components/General/ActiveButton";
import ProgressBar from "../components/Graphs/ProgressBar/ProgressBar";

const optionsSatFamily = [
    {value: 'All', label: 'All'},
    {value: 'type1', label: 'SAT FAMILY 1'},
    {value: 'type2', label: 'SAT FAMILY 2'},
    {value: 'type3', label: 'SAT FAMILY 3'}
];
const optionsTimes = [
    {value: '24 hours', label: '24 hours'},
    {value: '2 hours', label: '2 hours'},
    {value: '12 hours', label: '12 hours'},
    {value: '2 days', label: '2 days'},
    {value: '1 week', label: '1 week'},
];

const Production = () => {
    const navigate = useNavigate()
    const [satTypesToDisplay, setSatTypesToDisplay] = useState<string>(optionsSatFamily[0].value)
    const [showEnabledOnly, setShowEnabledOnly] = useState<boolean>(false)
    const [response, setResponse] = useState<any>()

    const fetchData = useCallback(async () => {
        try {
            if (MOCKED) return setResponse(MockMainPageResponse)
            let res = await fetch("http://...")
            res = await res.json()
            setResponse(res)
        } catch (err) {
            console.log("Cannot fetch data from server")
        }
    }, [])

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>{
            response ? <>
                <Header text={"Production Dashboard"} logo={logo}/>
                <MainBoard>
                    <MainBoardUpperPanel>
                        <CostumeSelect options={optionsSatFamily} defaultValue={optionsSatFamily[0]}
                                       onChange={(option) => {
                                           setSatTypesToDisplay(option.value)
                                       }}/>
                        <CostumeSelect options={optionsTimes} defaultValue={optionsTimes[0]} onChange={() => {
                        }}/>
                        <ActiveButton enabled={showEnabledOnly} onClick={() => setShowEnabledOnly(!showEnabledOnly)}/>
                        <LastUpdated time={response.lastUpdatedTime}/>
                    </MainBoardUpperPanel>

                    <SectionContainer>
                        <SatelliteContainer>
                            {Object.values(response.SatInfo).map((satInfo) => {
                                if (satInfo.type === satTypesToDisplay || satTypesToDisplay == "All")
                                    if ((showEnabledOnly && satInfo.time !== '-') || !showEnabledOnly)
                                        return <SatelliteCircleGraph satelliteName={satInfo.satelliteName}
                                                                     value={satInfo.value}
                                                                     time={satInfo.time}
                                                                     limit={satInfo.limit}
                                                                     onClick={() => navigate(`/satellite/${satInfo.satelliteName}`)}/>
                            })}

                        </SatelliteContainer>
                        <OverviewContainer>
                            <ProgressBar value={response.Reception.received} maxValue={response.Reception.planned}
                                         headerText={'Received images'}/>

                            <TotalCircleGraph value={response.SatInfo['TOTAL']["value"]}/>
                            <RealTimeExceptions downloads={response.LateProducts}/>
                            <SectionContainer>
                                <InfoBox text={'LF metadata problem: '} value={response.LFMetadataProblem}
                                         isPositiveValue={false}/>
                                <InfoBox text={'In Progress products: '} value={response.InProgressProducts}
                                         isPositiveValue={true}/>
                            </SectionContainer>
                        </OverviewContainer>
                    </SectionContainer>
                </MainBoard>
            </> : null
        }</>
    )
}

export default Production

const MainBoard = styled.div`
  margin: 16px 35px;
`
const MainBoardUpperPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  flex-wrap: wrap;
  flex-direction: column;
`

const SectionContainer = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  width: 100%;
`
