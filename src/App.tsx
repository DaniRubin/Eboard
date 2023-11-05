import "@fontsource/poppins";
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';

import styled from "styled-components";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SideNav from "./components/Layout/SideNav";
import Production from "./pages/Production";
import Satellite from "./pages/Satellite";
import NoPage from "./pages/NoPage";

const App = () => {

    // const satelliteData = {
    //     satelliteName: 'Satellite A',
    //     averageTime: '2.5 seconds',
    //     limitTime: '3 seconds',
    //     productsCount: 100,
    //     onTimeProducts: 80,
    //     lateProducts: 20,
    //     cep90: '3.2 seconds',
    //     productsInProgress: '10',
    //     metadataProblems: 5
    // };
    // {/*<SatelliteProfile satelliteData={satelliteData}/>*/
    // }

    return (
        <Wrapper>
            <div style={{marginLeft: "160px"}}>
                <BrowserRouter>
                    <SideNav/>
                    <Routes>
                        <Route index element={<Production/>}/>
                        <Route path="satellite" element={<Satellite/>}/>
                        <Route path="*" element={<NoPage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </Wrapper>
    )
}

export default App

const Wrapper = styled.div`
  text-align: center;
`