import styled from "styled-components";
import Header from "../components/Layout/Header";
import logo from '../assets/TelecomandIconHeader.svg';

const Telecommand = () => {
    return (
        <>
            <Header text={"Telecommand Dashboard"} logo={logo}/>
            <MainBoard>
                <h1>IFrame of Telecommand screen</h1>
            </MainBoard>
        </>
    )
}

export default Telecommand

const MainBoard = styled.div`
  margin: 16px 35px;
`