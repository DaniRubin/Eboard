import {useCallback, useEffect, useState} from 'react';

import styled from "styled-components";
import CostumeSelect from "../components/General/CostumeSelect";
import LastUpdated from "../components/General/LastUpdated";
import Header from "../components/Layout/Header";
import logo from '../assets/kashahReceptionIconHeader.svg';
import {useNavigate} from "react-router";
import {GenerateMockKashahReceptionResponse} from '../Mock'
import {MOCKED} from "../App";
import Table from "../components/Tables/Table";
import PieChartComponent from "../components/Graphs/PieChart/PieChart";

const optionsTimes = [
    {value: '24 hours', label: '24 hours'},
    // {value: '2 hours', label: '2 hours'},
    // {value: '12 hours', label: '12 hours'},
    // {value: '2 days', label: '2 days'},
    // {value: '1 week', label: '1 week'},
];
export const INTERESTING_COUNTRIES = ['country1', 'country2', 'country3', 'country4', 'country5']

const mapResponseToTable = (res) => {
    const tableData = []
    Object.keys(res.data).forEach(type => {
        let tableRow = {
            satType: type,
            total: res.data[type].count,
            else: 0
        }
        Object.keys(res.data[type].distribution).forEach(country => {
            if (INTERESTING_COUNTRIES.includes(country))
                tableRow[country] = res.data[type].distribution[country]
            else
                tableRow['else'] += res.data[type].distribution[country]
        })
        tableData.push(tableRow)
    })
    return tableData
}
const mapResponseToCountryCharts = (res) => {
    const countryCharts = {}
    Object.keys(res.data).forEach(type => {
        Object.keys(res.data[type].distribution).forEach(country => {
            if (!(country in countryCharts)) countryCharts[country] = {name: country, value: 0}
            countryCharts[country]['value'] += res.data[type].distribution[country]
        })
    })
    return Object.values(countryCharts)
}
const mapResponseToTotal = (res) => {
    let counterTotal = 0
    Object.keys(res.data).forEach(type => {
        counterTotal += res.data[type].count
    })
    return counterTotal
}
const mapResponseToTypesCharts = (res) => {
    const typesCharts = []
    Object.keys(res.data).forEach(type => {
        typesCharts.push({name: type, value: res.data[type].count})
    })
    return typesCharts
}

const KashahReception = () => {
    const [response, setResponse] = useState<any>(null)

    const fetchData = useCallback(async () => {
        try {
            if (MOCKED) return setResponse(() => GenerateMockKashahReceptionResponse())
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
                <Header text={"Kashah Reception Dashboard"} logo={logo}/>
                <MainBoard>
                    <MainBoardUpperPanel>
                        <CostumeSelect options={optionsTimes} defaultValue={optionsTimes[0]} onChange={() => {
                        }}/>
                        <LastUpdated time={response.lastUpdatedTime}/>
                    </MainBoardUpperPanel>

                    <SectionContainer>
                        <Table data={mapResponseToTable(response)}/>
                        <div style={{display: 'flex', gap: '30px', justifyContent: "center"}}>
                            <PieChartComponent data={mapResponseToCountryCharts(response)}
                                               title={'Countries distribution'} total={mapResponseToTotal(response)}/>
                            <PieChartComponent data={mapResponseToTypesCharts(response)} title={'Types distribution'}
                                               total={mapResponseToTotal(response)}/>
                        </div>
                    </SectionContainer>
                </MainBoard>
            </> : null
        }
        </>
    )
}

export default KashahReception

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
  flex-direction: column;
  gap: 30px;
`
