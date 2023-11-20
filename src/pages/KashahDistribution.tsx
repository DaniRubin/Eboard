import {useCallback, useEffect, useState} from 'react';

import styled from "styled-components";
import CostumeSelect from "../components/General/CostumeSelect";
import LastUpdated from "../components/General/LastUpdated";
import Header from "../components/Layout/Header";
import logo from '../assets/KashahIconHeader.svg';
import {useNavigate} from "react-router";
import {MockMainPageResponse} from '../Mock'
import {MOCKED} from "../App";
import InProgress from "../components/General/WorkInProgress";

const optionsTimes = [
    {value: '24 hours', label: '24 hours'},
    {value: '2 hours', label: '2 hours'},
    {value: '12 hours', label: '12 hours'},
    {value: '2 days', label: '2 days'},
    {value: '1 week', label: '1 week'},
];

const KashahDistribution = () => {
    const navigate = useNavigate()
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
                <Header text={"Kashah Distribution Dashboard"} logo={logo}/>
                <MainBoard>
                    <MainBoardUpperPanel>
                        <CostumeSelect options={optionsTimes} defaultValue={optionsTimes[0]} onChange={() => {
                        }}/>
                        <LastUpdated time={response.lastUpdatedTime}/>
                    </MainBoardUpperPanel>

                    <SectionContainer>
                        <InProgress/>
                    </SectionContainer>
                </MainBoard>
            </> : null
        }</>
    )
}

export default KashahDistribution

const MainBoard = styled.div`
  margin: 16px 35px;
`
const MainBoardUpperPanel = styled.div`
  display: flex;
`
const SectionContainer = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  width: 100%;
`
