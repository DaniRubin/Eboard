import styled from "styled-components";
import ebaordLogo from '../../assets/EboardLogo.svg';
import satLogo from '../../assets/SatelliteLogo.svg';
import prodLogo from "../../assets/ProductionLogo.svg";
import telecommandLogo from "../../assets/TelecomandIcon.svg";
import kashahLogo from "../../assets/KashahIcon.svg";
import esufLogo from "../../assets/EsufIcon.svg";
import infoLogo from "../../assets/InfoIcon.svg";
import {useNavigate} from "react-router-dom";

const SideNavStyle = styled.div`
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(58, 58, 58, 0.20);
  background: #3A3A3A;
  //gap: 20px;
`
const SideNavOptionStyle = styled.div<{ isTitle: boolean, isSelected: boolean, isLast: boolean }>((props) => {
    return `
    color: var(--light-grey, #E8E8E8);
      text-align: center;
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin: ${props.isTitle ? '12px auto' : '0px'};;
      padding: 20px;
      cursor: ${props.isTitle ? 'arrow' : 'pointer'};
      background-color: ${props.isSelected ? '#515151' : '#3A3A3A'};
      margin-top: ${props.isLast ? 'auto' : 'null'};
      &:hover {
        background-color: ${props.isTitle ? '#3A3A3A' : '#BBB'};
      }
      div {
        margin-top: 8px;
      };
`
})

const NavImage = styled.img<{ isTitle: boolean }>((props) => {
    return `width: ${props.isTitle ? '70px' : '35px'};
    margin: auto;
    flex-shrink:0;`
});

const SideNav = () => {
    const navigate = useNavigate();

    return <SideNavStyle>
        <SideNavOption logo={ebaordLogo} logoText={"satLogo"} OptionText={"Eboard"} isTitle={true} isSelected={false}
                       onClick={() => null}/>
        <SideNavOption logo={prodLogo} logoText={"productionLogo"} OptionText={"Production"}
                       isSelected={window.location.pathname === '/'} onClick={() => navigate('/')}/>
        <SideNavOption logo={satLogo} logoText={"satLogo"} OptionText={"Satellite"}
                       isSelected={window.location.pathname.includes('satellite')}
                       onClick={() => navigate('/satellite/Sat1')}/>
        <SideNavOption logo={telecommandLogo} logoText={"telecommand logo"} OptionText={"Telecommand"}
                       isSelected={window.location.pathname === '/telecommand'}
                       onClick={() => navigate('/telecommand')}/>
        <SideNavOption logo={kashahLogo} logoText={"kashah logo"} OptionText={"Kashah"}
                       isSelected={window.location.pathname === '/kashah'} onClick={() => navigate('/kashah')}/>
        <SideNavOption logo={esufLogo} logoText={"Esuf logo"} OptionText={"Esuf"}
                       isSelected={window.location.pathname === '/Esuf'} onClick={() => navigate('/Esuf')}/>
        <SideNavOption logo={infoLogo} logoText={"Info logo"} OptionText={"About us"} isLast={true}
                       isSelected={window.location.pathname === '/Info'} onClick={() => null}/>
    </SideNavStyle>

}

type SideNavOptionProps = {
    logo: any,
    logoText: string,
    OptionText: string,
    isTitle: boolean,
    onClick: () => void,
    isSelected: boolean,
    isLast: boolean
};

const SideNavOption = (props: SideNavOptionProps) => (
    <SideNavOptionStyle isTitle={props.isTitle} isLast={props.isLast} isSelected={props.isSelected}
                        onClick={props.onClick}>
        <NavImage src={props.logo} alt={props.logoText} isTitle={props.isTitle}/>
        <div>{props.OptionText}</div>
    </SideNavOptionStyle>
)


export default SideNav;