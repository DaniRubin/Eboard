import {useCallback, useEffect, useState} from 'react';

import styled from "styled-components";
import LastUpdated from "../components/General/LastUpdated";
import Header from "../components/Layout/Header";
import logo from '../assets/potentialIconHeader.svg';
import map from '../assets/map.png';
import {useNavigate} from "react-router";
import {GenerateMockPotentialPageResponse, MockMainPageResponse} from '../Mock'
import {MOCKED} from "../App";
import TextBubble from "../components/Tables/TextBubble";
import IranLogo from '../assets/Iran.png';


const Potential = () => {
    const navigate = useNavigate()
    const [response, setResponse] = useState<any>()
    const [selectedCountry, setSelectedCountry] = useState<string>(null)

    const fetchData = useCallback(async () => {
        try {
            if (MOCKED) return setResponse(GenerateMockPotentialPageResponse)
            let res = await fetch("http://...")
            res = await res.json()
            setResponse(res)
        } catch (err) {
            console.log("Cannot fetch data from server")
        }
    }, [])

    const toggleCountry = (country) => {
        if (country === selectedCountry) setSelectedCountry(null)
        else setSelectedCountry(country)
    }
    useEffect(() => {
        fetchData()
    }, [])

    const countriesList = [
        {country: 'Iran', top: 270, left: 1350, logo: IranLogo},
        {country: 'Gaza', top: 270, left: 880, logo: IranLogo},
        {country: 'Egypt', top: 430, left: 750, logo: IranLogo},
        {country: 'Syria', top: 130, left: 1000, logo: IranLogo},
        {country: 'Lebanon', top: 200, left: 910, logo: IranLogo},
        {country: 'Iraq', top: 250, left: 1120, logo: IranLogo},
        {country: 'Sudan', top: 650, left: 800, logo: IranLogo},
        {country: 'Yemen', top: 690, left: 1200, logo: IranLogo},
    ]

    // {country: 'Iran', top: 170, left: 1150, logo: IranLogo},
    // {country: 'Gaza', top: 210, left: 720, logo: IranLogo},
    // {country: 'Egypt', top: 380, left: 600, logo: IranLogo},
    // {country: 'Syria', top: 70, left: 850, logo: IranLogo},
    // {country: 'Lebanon', top: 140, left: 770, logo: IranLogo},
    // {country: 'Iraq', top: 220, left: 960, logo: IranLogo},
    // {country: 'Sudan', top: 500, left: 670, logo: IranLogo},
    // {country: 'Yemen', top: 530, left: 970, logo: IranLogo},

    return (
        <>{
            response ? <>
                <Header text={"Potential Dashboard"} logo={logo}/>
                <MainBoard>
                    <MainBoardUpperPanel>
                        <LastUpdated time={response.lastUpdatedTime}/>
                    </MainBoardUpperPanel>

                    <SectionContainer>
                        <BackgroundImage src={map} width={'1600px'} onClick={() => toggleCountry(null)}/>
                        {countriesList.map(countryData => {
                            return <TextBubble country={countryData.country} logo={countryData.logo}
                                               top={countryData.top}
                                               left={countryData.left}
                                               isOpen={selectedCountry === countryData.country}
                                               onClick={() => toggleCountry(countryData.country)}
                                               data={{
                                                   eo_day: {
                                                       start: response.data[countryData.country].eo_day.firstTime,
                                                       end: response.data[countryData.country].eo_day.lastTime,
                                                       amount: response.data[countryData.country].eo_day.countOfPasses,
                                                   },
                                                   eo_night: {
                                                       start: response.data[countryData.country].eo_night.firstTime,
                                                       end: response.data[countryData.country].eo_night.lastTime,
                                                       amount: response.data[countryData.country].eo_night.countOfPasses,
                                                   },
                                                   sar: {
                                                       start: response.data[countryData.country].sar.firstTime,
                                                       end: response.data[countryData.country].sar.lastTime,
                                                       amount: response.data[countryData.country].sar.countOfPasses,
                                                   },
                                               }}/>
                        })}
                    </SectionContainer>
                </MainBoard>
            </> : null
        }</>
    )
}

export default Potential

const MainBoard = styled.div`
  margin: 16px 35px;
`
const BackgroundImage = styled.img`
  height: 82vh;
  width: 1600px;
  object-fit: cover;
  border-radius: 20px;
`
const MainBoardUpperPanel = styled.div`
  display: flex;
`
const SectionContainer = styled.div`
  display: flex;
  margin-top: 10px;
  //justify-content: space-between;
  width: 100%;
`
