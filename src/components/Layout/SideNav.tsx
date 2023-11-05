import styled from "styled-components";
import satLogo from '../../assets/SatelliteLogo.png';
import prodLogo from "../../assets/ProductionLogo.png";

const SideNavStyle = styled.div`
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  //padding: 24px 7px 820px 8px;
  flex-direction: column;
  border-right: 1px solid rgba(58, 58, 58, 0.20);
  background: #3A3A3A;
  gap: 20px;
`
const SideNavOptionStyle = styled.div<{ isTitle: boolean }>((props) => {
    return `color: var(--light-grey, #E8E8E8);
      text-align: center;
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-top: 12px;
      padding: 12px;
      cursor: ${props.isTitle ? 'arrow' : 'pointer'};
      &:hover {
        background-color: ${props.isTitle ? '#3A3A3A' : 'black'};
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
const SideNav = () => (
    <SideNavStyle>
        <SideNavOption logo={satLogo} logoText={"satLogo"} OptionText={"Eboard"} isTitle={true}/>
        <SideNavOption logo={prodLogo} logoText={"productionLogo"} OptionText={"Production"} isTitle={false}/>
    </SideNavStyle>
)

type SideNavOptionProps = {
    logo: any,
    logoText: string,
    OptionText: string,
    isTitle: boolean
};

const SideNavOption = (props: SideNavOptionProps) => (
    <SideNavOptionStyle isTitle={props.isTitle}>
        <NavImage src={props.logo} alt={props.logoText} isTitle={props.isTitle}/>
        <div>{props.OptionText}</div>
    </SideNavOptionStyle>
)


export default SideNav;