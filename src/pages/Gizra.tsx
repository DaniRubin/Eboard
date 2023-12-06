import {useCallback, useEffect, useState} from 'react';

import styled from "styled-components";
import LastUpdated from "../components/General/LastUpdated";
import Header from "../components/Layout/Header";
import logo from '../assets/gizraIconHeader.svg';
import {GenerateMockGizraResponse, MockMainPageResponse} from '../Mock'
import {MOCKED} from "../App";
import IranLogo from '../assets/Iran.png';
import CostumeSelect from "../components/General/CostumeSelect";
import PassBoard from "../components/Tables/PassBoard";
import PieChartComponent from "../components/Graphs/PieChart/PieChart";


const optionsCountryFamily = [
    {value: 'IRN', label: 'Iran'},
    {value: 'SYR', label: 'Syria'},
    {value: 'LBN', label: 'Lebanon'},
    {value: 'PSE', label: 'Gaza'}
];
const optionsTimes = [
    {value: '24 hours', label: '24 hours'},
    // {value: '2 hours', label: '2 hours'},
    // {value: '12 hours', label: '12 hours'},
    // {value: '2 days', label: '2 days'},
    // {value: '1 week', label: '1 week'},
];

const COLORS = [
    '#00FF7F', // Spring Green
    '#008000', // Green
    '#3CB371', // Medium Sea Green
    '#32CD32', // Lime Green
    '#008080', // Teal
    '#228B22', // Forest Green
    '#556B2F',  // Dark Olive Green
    '#2E8B57', // Sea Green
    '#7FFF00', // Chartreuse
    '#00FF00', // Lime Green
];

type Filters = {
    minPriority: number,
    maxPriority: number,
    sensor: {
        eo: boolean,
        sar: boolean,
        commercial: boolean
    },
    status: {
        completed: boolean,
        ready: boolean,
        planned: boolean,
        notTaken: boolean
    }
}
const Gizra = () => {
    const [response, setResponse] = useState<any>(null)
    const [selectedCountry, setSelectedCountry] = useState<any>(optionsCountryFamily[0])

    const [filterState, setFilterState] = useState<Filters>({
        minPriority: 1,
        maxPriority: 13,
        sensor: {
            eo: true,
            sar: true,
            commercial: true,
        },
        status: {
            ready: true,
            completed: true,
            notTaken: true,
            planned: true
        },
    })

    const handleChangeMinPriority = (val) => {
        if (val < filterState.maxPriority && val >= 1) {
            const newFilter = JSON.parse(JSON.stringify(filterState))
            newFilter.minPriority = val
            setFilterState(newFilter)
        }
    }
    const handleChangeMaxPriority = (val) => {
        if (val > filterState.minPriority && val <= 13) {
            const newFilter = JSON.parse(JSON.stringify(filterState))
            newFilter.maxPriority = val
            setFilterState(newFilter)
        }
    }
    const handleChangeSensorFilter = (eo, sar, commercial) => {
        const newFilter = JSON.parse(JSON.stringify(filterState))
        newFilter.sensor = {
            eo: eo,
            sar: sar,
            commercial: commercial
        }
        setFilterState(newFilter)
    }
    const handleChangeStatusFilter = (ready, completed, planned, notTaken) => {
        const newFilter = JSON.parse(JSON.stringify(filterState))
        newFilter.status = {
            ready: ready,
            completed: completed,
            planned: planned,
            notTaken: notTaken
        }
        setFilterState(newFilter)
    }

    const fetchData = useCallback(async (ctr) => {
        try {
            if (MOCKED) return setResponse(() => GenerateMockGizraResponse(ctr))
            let res = await fetch("http://...")
            res = await res.json()
            setResponse(res)
        } catch (err) {
            console.log("Cannot fetch data from server")
        }
    }, [])

    useEffect(() => {
        fetchData(selectedCountry.label)
    }, [selectedCountry])

    const mapResponseToTotal = (pieData) => {
        let counter = 0
        pieData.forEach((dat) => {
            counter += dat.value
        })
        return counter
    }
    return (
        <>{
            response ? <>
                <Header text={"Gizra Dashboard"} logo={logo}/>
                <MainBoard>
                    <MainBoardUpperPanel>
                        <CostumeSelect options={optionsCountryFamily} defaultValue={selectedCountry}
                                       onChange={(option) => {
                                           setSelectedCountry(option)
                                       }}/>
                        <CostumeSelect options={optionsTimes} defaultValue={optionsTimes[0]} onChange={() => {
                        }}/>
                        <LastUpdated time={response.lastUpdatedTime}/>
                    </MainBoardUpperPanel>

                    <SectionContainer>
                        <div style={{width: '40%'}}>
                            <PassBoard data={response.passboard} logo={IranLogo} country={response.country}/>
                        </div>
                        <GizraMainSection>
                            <PieSectionHeader>Total Gizra</PieSectionHeader>
                            <PieSections>
                                <PieChartComponent data={response.totalCollection}
                                                   title={'Total Collection'} height={300} width={380} colors={COLORS}
                                                   total={mapResponseToTotal(response.totalCollection)}/>
                                <PieChartComponent data={response.totalKms} title={'Total KM'}
                                                   height={300} width={380} colors={COLORS}
                                                   total={mapResponseToTotal(response.totalKms)}/>
                            </PieSections>

                            <PieSectionHeader>Filter Gizra</PieSectionHeader>
                            <FiltersSection>
                                {/*// TODO: Add all the filters*/}
                                <Filter width={20}> Priority:
                                    <InputStyle type={'number'} value={filterState.minPriority}
                                                onChange={e => handleChangeMinPriority(e.target.value)}/>
                                    - <InputStyle type={'number'} value={filterState.maxPriority}
                                                  onChange={e => handleChangeMaxPriority(e.target.value)}/>
                                </Filter>
                                <Filter width={27}> Sensor:
                                    <FilterButton
                                        onClick={() => handleChangeSensorFilter(!filterState.sensor.eo, filterState.sensor.sar, filterState.sensor.commercial)}
                                        enabled={filterState.sensor.eo} text={'EO'}/>
                                    <FilterButton
                                        onClick={() => handleChangeSensorFilter(filterState.sensor.eo, !filterState.sensor.sar, filterState.sensor.commercial)}
                                        enabled={filterState.sensor.sar} text={'Sar'}/>
                                    <FilterButton
                                        onClick={() => handleChangeSensorFilter(filterState.sensor.eo, filterState.sensor.sar, !filterState.sensor.commercial)}
                                        enabled={filterState.sensor.commercial} text={'Commercial'}/>
                                </Filter>
                                <Filter width={43}> Status:
                                    <FilterButton
                                        onClick={() => handleChangeStatusFilter(filterState.status.ready, !filterState.status.completed, filterState.status.planned, filterState.status.notTaken)}
                                        enabled={filterState.status.completed} text={'Completed'}/>
                                    <FilterButton
                                        onClick={() => handleChangeStatusFilter(!filterState.status.ready, filterState.status.completed, filterState.status.planned, filterState.status.notTaken)}
                                        enabled={filterState.status.ready} text={'Ready'}/>
                                    <FilterButton
                                        onClick={() => handleChangeStatusFilter(filterState.status.ready, filterState.status.completed, !filterState.status.planned, filterState.status.notTaken)}
                                        enabled={filterState.status.planned} text={'Planned'}/>
                                    <FilterButton
                                        onClick={() => handleChangeStatusFilter(filterState.status.ready, filterState.status.completed, filterState.status.planned, !filterState.status.notTaken)}
                                        enabled={filterState.status.notTaken} text={'Not Taken'}/>
                                </Filter>
                                {/*TODO: Change filter button to filter the section's data*/}
                                <FilterButtonFinal onClick={()=>fetchData(selectedCountry.label)}>Filter</FilterButtonFinal>

                            </FiltersSection>
                            <PieSections>
                                <PieChartComponent data={response.totalCollection}
                                                   title={'Collection'} height={270} width={250}
                                                   total={mapResponseToTotal(response.totalCollection)}/>
                                <PieChartComponent data={response.totalKms} title={'Customer'} height={270} width={250}
                                                   total={mapResponseToTotal(response.totalKms)}/>
                                <PieChartComponent data={response.totalKms} title={'RFI'} height={270} width={250}
                                                   total={mapResponseToTotal(response.totalKms)}/>
                            </PieSections>
                        </GizraMainSection>
                    </SectionContainer>
                </MainBoard>
            </> : null
        }</>
    )
}


const FilterButton = ({enabled, onClick, text}) => (
    <SatButtonWrapper enabled={enabled} onClick={onClick}>
        {text}
    </SatButtonWrapper>
)


const FilterButtonFinal = styled.div`
  display: flex;
  width: 10%;
  height: 60px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-radius: 10px;
  background: #515151;
  color: #E8E8E8;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);
`

const InputStyle = styled.input`
  width: 40px;
  padding: 10px 4px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #4CAF50;
  }
`

const Filter = styled.div <{ width: number }>(props => `
                                    border-radius: 10px;
                                    background: #F8F8F8;
                                    width: ${props.width}%;
                                    height: 40px;
                                    display: flex;
                                    color: #3A3A3A;
                                    font-size: 15px;
                                    font-weight: 500;
                                    align-items: center;
                                    gap: 10px;
                                    padding: 10px;
                                    align-items: center;
                                    justify-content: center;
                                    `)

const SatButtonWrapper = styled.div <{ enabled: boolean }>((props) => {
    return `
    display: flex;
      height: 25px;
      padding: 7px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      background: ${props.enabled ? '#9ADBA0' : '#BBB'};
      -webkit-user-select: none; 
      -ms-user-select: none;
      user-select: none; 
      color: #F8F8F8;
      text-align: center;
      font-size: 14px;
      font-weight: 600;
      border-radius: 10px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10) inset;
    `
})

export default Gizra

const MainBoard = styled.div`
  margin: 16px 35px;
`
const PieSectionHeader = styled.div`
  color: #8E8E8E;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`
const PieSections = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  //margin: 20px
`
const FiltersSection = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  margin: 5px
`
const GizraMainSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 58%;
  gap: 15px;
`
const MainBoardUpperPanel = styled.div`
  display: flex;
`
const SectionContainer = styled.div`
  display: flex;
  margin-top: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`
