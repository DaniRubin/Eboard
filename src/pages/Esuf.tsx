import styled from "styled-components";
import Header from "../components/Layout/Header";
import logo from '../assets/EsufIconHeader.svg';
import HalfPieChart from "../components/Graphs/HalfPieChart/HalfPieChart";
import LastUpdated from "../components/General/LastUpdated";
import {useCallback, useEffect, useState} from "react";
import {MOCKED} from "../App";
import {GenerateMockEsufPageResponse} from "../Mock";
import ProgressBarVertical from "../components/Graphs/ProgressBarVertical/ProgressBarVertical";

const satellitesList = ['sat1', 'sat2', 'sat3', 'sat4', 'sat5', 'sat6', 'sat7']

const Esuf = () => {
    const [response, setResponse] = useState<any>()
    const [minPriority, setMinPriority] = useState<number>(1)
    const [maxPriority, setMaxPriority] = useState<number>(20)
    const [selectedSat, setSelectedSat] = useState<string[]>(satellitesList)

    const handleChangeMinPriority = (val) => {
        if (val < maxPriority && val >= 1) setMinPriority(val)
    }
    const handleChangeMaxPriority = (val) => {
        if (val > minPriority && val <= 20) setMaxPriority(val)
    }
    const toggleSatSelection = (val) => {
        const satList = [...selectedSat]
        if (satList.includes(val))
            setSelectedSat(satList.filter(sat => sat !== val))
        else {
            satList.push(val)
            setSelectedSat(satList)
        }
    }
    const fetchData = useCallback(async () => {
        try {
            if (MOCKED) return setResponse(GenerateMockEsufPageResponse())
            let res = await fetch("http://...") // Add here the min and the max values
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
        <>
            <Header text={"Esuf Dashboard"} logo={logo}/>
            <MainBoard>
                <MainBoardUpperPanel>
                    <LastUpdated time={new Date()}/>
                </MainBoardUpperPanel>

                <div style={{display: "flex", gap: '20px'}}>
                    <div style={{display: 'flex', flexDirection: 'column', width: '15%'}}>
                        <FilterSection>
                            <PriorityWrapper>
                                Priority
                                <div style={{display: 'flex', alignItems: 'center', gap: '3px'}}>
                                    <InputStyle type={'number'} value={minPriority}
                                                onChange={e => handleChangeMinPriority(e.target.value)}/>
                                    - <InputStyle type={'number'} value={maxPriority}
                                                  onChange={e => handleChangeMaxPriority(e.target.value)}/>
                                </div>
                                Satellites
                                <SatFilterBox>
                                    {satellitesList.map((sat => (
                                        <SatButton satName={sat} enabled={selectedSat.includes(sat)}
                                                   onClick={() => toggleSatSelection(sat)}/>
                                    )))}
                                </SatFilterBox>

                                <FilterButton onClick={fetchData}>Filter</FilterButton>
                            </PriorityWrapper>
                        </FilterSection>
                        <FilterSection>
                            {response && <ProgressBarVertical headerText={"Total"}
                                                              completedAmount={response.total.completedAmount||0}
                                                              totalAmount={response.total.totalAmount||0}
                                                              plannedAmount={response.total.plannedAmount||0}
                                                              cfgPlannedAmount={response.total.cfgPlannedAmount||0}/>}
                        </FilterSection>
                    </div>
                    <MainSection>
                        {response && response.data.map(info => {
                            return <HalfPieChart country={info.country} completedAmount={info.completedAmount}
                                                 totalAmount={info.totalAmount} plannedAmount={info.plannedAmount}
                                                 cfgPlannedAmount={info.cfgPlannedAmount}/>
                        })}
                    </MainSection>
                </div>
            </MainBoard>
        </>
    )
}
type PropsSatButton = {
    enabled: boolean,
    onClick: () => {},
    satName: string
};

const SatButton = ({enabled, onClick, satName}: PropsSatButton) => (
    <SatButtonWrapper enabled={enabled} onClick={onClick}>
        <SatButtonText>{satName}</SatButtonText>
    </SatButtonWrapper>
)

export default Esuf


const SatButtonWrapper = styled.div <{ enabled: boolean }>((props) => {
    return `display: flex;
      width: 50px;
      height: 30px;
      padding: 6px 11px 6px 7px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 10px;
      background: ${props.enabled ? '#9ADBA0' : '#BBB'};
      -webkit-user-select: none; 
      -ms-user-select: none;
      user-select: none; 
      
    `
})
const SatButtonText = styled.div`
  color: #F8F8F8;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
`


const SatFilterBox = styled.div`
  display: flex;
  border-radius: 10px;
  width: 80%;
  background: var(--light-grey, #E8E8E8);
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  flex-wrap: wrap;
  padding: 10px 0px;
`

const FilterSection = styled.div`
  display: flex;
  margin-top: 10px;
  //width: 20%;
  padding: 21px 6px 27px 6px;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background: var(--white, #F8F8F8);
  //height: 100%;

`
const FilterButton = styled.div`
  display: flex;
  width: 60%;
  height: 30px;
  padding: 6px;
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
  width: 50px;
  padding: 10px;
  font-size: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #4CAF50;
  }
`
const PriorityWrapper = styled.div`
  font-size: 24px;
  //margin-top: 10px;
  font-weight: 600;
  color: #3a3a3a;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: column;
`
const MainBoardUpperPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const MainSection = styled.div`
  display: flex;
  margin-top: 10px;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: 7px;
  align-content: flex-start;
  height: 85vh;
  overflow-y: scroll;
`
const MainBoard = styled.div`
  margin: 16px 35px;
`