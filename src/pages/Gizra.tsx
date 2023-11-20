import {useCallback, useEffect, useState} from 'react';

import styled from "styled-components";
import LastUpdated from "../components/General/LastUpdated";
import Header from "../components/Layout/Header";
import logo from '../assets/gizraIconHeader.svg';
import {useNavigate} from "react-router";
import {MockMainPageResponse} from '../Mock'
import {MOCKED} from "../App";
import InProgress from "../components/General/WorkInProgress";


const Gizra = () => {
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
                <Header text={"Gizra Dashboard"} logo={logo}/>
                <MainBoard>
                    <MainBoardUpperPanel>
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

export default Gizra

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
