import styled from "styled-components";
import Header from "../components/Layout/Header";
import logo from '../assets/EsufIconHeader.svg';
import HalfPieChart from "../components/Graphs/HalfPieChart/HalfPieChart";
import LastUpdated from "../components/LastUpdated";
import {useCallback, useEffect, useState} from "react";
import {MOCKED} from "../App";
import {GenerateMockEsufPageResponse} from "../Mock";


const Esuf = () => {
    const optionsTimes = [
        {value: '24 hours', label: '24 hours'},
    ]

    const [response, setResponse] = useState<any>()
    const [minPriority, setMinPriority] = useState<number>(1)
    const [maxPriority, setMaxPriority] = useState<number>(20)

    const handleChangeMinPriority = (val) => {
        if (val < maxPriority && val >= 1) setMinPriority(val)
    }
    const handleChangeMaxPriority = (val) => {
        if (val > minPriority && val <= 20) setMaxPriority(val)
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
                    <PriorityWrapper>Priority
                        <InputStyle type={'number'} value={minPriority}
                                    onChange={e => handleChangeMinPriority(e.target.value)}/>
                        - <InputStyle type={'number'} value={maxPriority}
                                      onChange={e => handleChangeMaxPriority(e.target.value)}/>
                        <FilterButton onClick={fetchData}>Filter</FilterButton>
                    </PriorityWrapper>
                    {/*<CostumeSelect options={optionsTimes} defaultValue={optionsTimes[0]} onChange={() => null}/>*/}
                    <LastUpdated time={new Date()}/>
                </MainBoardUpperPanel>
                <MainSection>
                    {response && response.data.map(info => {
                        return <HalfPieChart country={info.country} completedAmount={info.completedAmount}
                                             totalAmount={info.totalAmount} plannedAmount={info.plannedAmount}
                                             cfgPlannedAmount={info.cfgPlannedAmount}/>
                    })}
                </MainSection>
            </MainBoard>
        </>
    )
}

export default Esuf


const FilterButton = styled.div`
  display: flex;
  width: 80px;
  height: 30px;
  padding: 6px ;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 20px;
  background: lightgray;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none; 
`

const InputStyle = styled.input`
  width: 50px;
  padding: 10px;
  font-size: 20px;
  margin: 10px 0;
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
  font-weight: 600;
  color: #3a3a3a;
  display: flex;
  align-items: center;
  gap: 7px;
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
`
const MainBoard = styled.div`
  margin: 16px 35px;
`