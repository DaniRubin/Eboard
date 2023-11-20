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
import Telecommand from "./pages/Telecomand";
import KashahDistribution from "./pages/KashahDistribution";
import Esuf from "./pages/Esuf";
import KashahReception from "./pages/KashahReception";
import Potential from "./pages/Potential";
import Gizra from "./pages/Gizra";

export const MOCKED = true

const App = () => {
    return (
        <Wrapper>
            <div style={{marginLeft: "160px"}}>
                <BrowserRouter>
                    <SideNav/>
                    <Routes>
                        <Route index element={<Production/>}/>
                        <Route path="satellite/:satellite" element={<Satellite/>}/>
                        <Route path="telecommand" element={<Telecommand/>}/>
                        <Route path="kashah/distribution" element={<KashahDistribution/>}/>
                        <Route path="kashah/reception" element={<KashahReception/>}/>
                        <Route path="Esuf" element={<Esuf/>}/>
                        <Route path="potential" element={<Potential/>}/>
                        <Route path="gizra" element={<Gizra/>}/>
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