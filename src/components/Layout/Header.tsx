import styled from "styled-components";
import logo from './LogoProduction.png';

const HeaderPanel = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    padding: 32px 770px 32px 68px;
    align-items: center;
    flex-shrink: 0;
    border-bottom: 1px solid rgba(58, 58, 58, 0.20);
    background: #BBB;
`

const HeaderText = styled.div`
  color: var(--white, #F8F8F8);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 16px;
`
const HeaderImage = styled.img`
  width: 36px;
  height: 33px;
  flex-shrink: 0;
`

const Header = () => (
    <HeaderPanel>
        <HeaderImage src={logo} alt="Logo" />;
        <HeaderText>Production  Dashboard</HeaderText>
    </HeaderPanel>
)

export default Header;