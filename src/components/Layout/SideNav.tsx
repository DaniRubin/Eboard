import styled from "styled-components";
import ebaordLogo from '../../assets/EboardLogo.svg';
import satLogo from '../../assets/SatelliteLogo.svg';
import prodLogo from "../../assets/ProductionLogo.svg";
import telecommandLogo from "../../assets/TelecomandIcon.svg";
import kashahLogo from "../../assets/KashahIcon.svg";
import esufLogo from "../../assets/EsufIcon.svg";
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
const SideNavOptionStyle = styled.div<{ isTitle: boolean, isSelected: boolean }>((props) => {
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
      &:hover {
        background-color: ${props.isTitle ? '#3A3A3A' : '#BBB'};
      }
      div {
        margin-top: 8px;
      }
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
                       onClick={() => {
                       }}/>
        <SideNavOption logo={prodLogo} logoText={"productionLogo"} OptionText={"Production"} isTitle={false}
                       isSelected={window.location.pathname === '/'}
                       onClick={() => navigate('/')}/>
        <SideNavOption logo={satLogo} logoText={"satLogo"} OptionText={"Satellite"} isTitle={false}
                       isSelected={window.location.pathname.includes('satellite')}
                       onClick={() => navigate('/satellite/Sat1')}/>
        <SideNavOption logo={telecommandLogo} logoText={"telecommand logo"} OptionText={"Telecommand"} isTitle={false}
                       isSelected={window.location.pathname === '/telecommand'}
                       onClick={() => navigate('/telecommand')}/>
        <SideNavOption logo={kashahLogo} logoText={"kashah logo"} OptionText={"Kashah"} isTitle={false}
                       isSelected={window.location.pathname === '/kashah'}
                       onClick={() => navigate('/kashah')}/>
        <SideNavOption logo={esufLogo} logoText={"Esuf logo"} OptionText={"Esuf"} isTitle={false}
                       isSelected={window.location.pathname === '/Esuf'}
                       onClick={() => navigate('/Esuf')}/>
    </SideNavStyle>

}

type SideNavOptionProps = {
    logo: any,
    logoText: string,
    OptionText: string,
    isTitle: boolean,
    onClick: () => void,
    isSelected: boolean
};

const SideNavOption = (props: SideNavOptionProps) => (
    <SideNavOptionStyle isTitle={props.isTitle} isSelected={props.isSelected} onClick={props.onClick}>
        <NavImage src={props.logo} alt={props.logoText} isTitle={props.isTitle}/>
        <div>{props.OptionText}</div>
    </SideNavOptionStyle>
)


export default SideNav;