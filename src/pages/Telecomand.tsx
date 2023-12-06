import styled from "styled-components";
import Header from "../components/Layout/Header";
import logo from '../assets/TelecomandIconHeader.svg';
import CostumeSelect from "../components/General/CostumeSelect";
import LastUpdated from "../components/General/LastUpdated";
import Table from "../components/Tables/Table";
import PieChartComponent from "../components/Graphs/PieChart/PieChart";
import {useCallback, useEffect, useState} from "react";
import {MOCKED} from "../App";
import {GenerateMockKashahReceptionResponse, GenerateMockTelecommandResponse} from "../Mock";


const optionsTimes = [
    {value: '24', label: '24 hours'},
    {value: '48', label: '2 days'},
    {value: '96', label: '4 days'},
    {value: '168', label: '1 week'},
];
const optionalSats = [
    {value: 'All', label: 'All'},
    {value: 'sat1', label: 'sat1'},
    {value: 'sat2', label: 'sat2'},
    {value: 'sat3', label: 'sat3'},
    {value: 'sat4', label: 'sat4'},
    {value: 'sat5', label: 'sat5'},
];
const COLORS = ['green', 'orange', 'red', 'lightgrey']
const COLORS_types = [
    '#000080', // Navy Blue
    '#4169E1', // Royal Blue
    '#1E90FF'  // Dodger Blue
];

const calculateOperational = (resp, sat) => {
    const data = [
        {name: 'Success', value: 0},
        {name: 'Future', value: 0},
        {name: 'Failed', value: 0},
        {name: 'Unknown', value: 0}
    ]
    Object.keys(resp).forEach((key: string) => {
        if (sat === 'All' || key === sat) {
            Object.keys(resp[key]).forEach((innerKey: string) => {
                data[0].value += resp[key][innerKey]['Success']
                data[1].value += resp[key][innerKey]['Future']
                data[2].value += resp[key][innerKey]['Failed']
                data[3].value += resp[key][innerKey]['Unknown']
            })
        }
    })
    return data
}
const calculateTypes = (resp, sat) => {
    const data = [
        {name: 'Delayed', value: 0},
        {name: 'Immediate', value: 0},
        {name: 'Replacing', value: 0},
    ]
    Object.keys(resp).forEach((key: string) => {
        if (sat === 'All' || key === sat) {
            data[0].value += resp[key]['delayed']['Success'] + resp[key]['delayed']['Future'] + resp[key]['delayed']['Failed'] + resp[key]['delayed']['Unknown']
            data[1].value += resp[key]['immediate']['Success'] + resp[key]['immediate']['Future'] + resp[key]['immediate']['Failed'] + resp[key]['immediate']['Unknown']
            data[2].value += resp[key]['replacement']['Success'] + resp[key]['replacement']['Future'] + resp[key]['replacement']['Failed'] + resp[key]['replacement']['Unknown']
        }
    })
    return data
}
const calculateSubPie = (resp, type, sat) => {
    const data = [
        {name: 'Success', value: 0},
        {name: 'Future', value: 0},
        {name: 'Failed', value: 0},
        {name: 'Unknown', value: 0}
    ]
    Object.keys(resp).forEach((key: string) => {
        if (sat === 'All' || key === sat) {
            data[0].value += resp[key][type]['Success']
            data[1].value += resp[key][type]['Future']
            data[2].value += resp[key][type]['Failed']
            data[3].value += resp[key][type]['Unknown']
        }
    })
    return data
}

const Telecommand = () => {
    const [response, setResponse] = useState<any>(null)
    const [selectedTime, setSelectedTime] = useState<any>(optionsTimes[0])
    const [selectedSat, setSelectedSat] = useState<any>(optionalSats[0])

    const fetchData = useCallback(async (hours: number, sat: string) => {
        try {
            if (MOCKED) return setResponse(() => GenerateMockTelecommandResponse())
            let res = await fetch("http://...")
            res = await res.json()
            setResponse(res)
        } catch (err) {
            console.log("Cannot fetch data from server")
        }
    }, [])

    useEffect(() => {
        fetchData(selectedTime.value, selectedSat.value)
    }, [selectedTime])

    const mapResponseToTotal = (pieData) => {
        let counter = 0
        pieData.forEach((dat) => {
            counter += dat.value
        })
        return counter
    }
    return (
        <>
            <Header text={"Telecommand Dashboard"} logo={logo}/>
            {response ?
                <MainBoard>
                    <MainBoardUpperPanel>
                        <CostumeSelect options={optionalSats} defaultValue={selectedSat} onChange={setSelectedSat}/>
                        <CostumeSelect options={optionsTimes} defaultValue={selectedTime} onChange={setSelectedTime}/>
                        <LastUpdated time={response.lastUpdatedTime}/>
                    </MainBoardUpperPanel>

                    <SectionContainer>
                        <div style={{display: 'flex', gap: '15px'}}>
                            <div style={{width: '70%'}}>
                                <PieChartComponent data={calculateOperational(response.data, selectedSat.value)}
                                                   title={'Operational Command Uplink Status'}
                                                   height={400} width={600} colors={COLORS}
                                                   total={mapResponseToTotal(calculateOperational(response.data, selectedSat.value))}/>
                            </div>
                            <div style={{width: '30%'}}>
                                <PieChartComponent data={calculateTypes(response.data, selectedSat.value)}
                                                   title={'Command Uplink Types Distribution'}
                                                   height={400} width={300} colors={COLORS_types}
                                                   total={mapResponseToTotal(calculateTypes(response.data, selectedSat.value))}/>
                            </div>
                        </div>
                        <div style={{display: 'flex', gap: '15px'}}>
                            <PieChartComponent data={calculateSubPie(response.data, 'delayed', selectedSat.value)}
                                               title={'Delayed Command Uplink Status'}
                                               height={300} width={400} colors={COLORS}
                                               total={mapResponseToTotal(calculateSubPie(response.data, 'delayed', selectedSat.value))}/>
                            <PieChartComponent data={calculateSubPie(response.data, 'immediate', selectedSat.value)}
                                               title={'Immediate Command Uplink Status'}
                                               height={300} width={400} colors={COLORS}
                                               total={mapResponseToTotal(calculateSubPie(response.data, 'immediate', selectedSat.value))}/>
                            <PieChartComponent data={calculateSubPie(response.data, 'replacement', selectedSat.value)}
                                               title={'Replacing Command Uplink Status'}
                                               height={300} width={400} colors={COLORS}
                                               total={mapResponseToTotal(calculateSubPie(response.data, 'replacement', selectedSat.value))}/>
                        </div>
                    </SectionContainer>
                </MainBoard> : null}
        </>
    )
}

export default Telecommand

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
