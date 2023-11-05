import styled from "styled-components";

const HeaderPanel = styled.div`
  display: flex;
  width: 100%;
  height: 3vh;
  padding-top: 32px;
  padding-bottom: 32px;
  align-items: center;
  flex-shrink: 0;
  border-bottom: 1px solid rgba(58, 58, 58, 0.20);
  background: #ffffff;
`

const HeaderText = styled.div`
  color: var(--white, #000);
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
  margin-left: 3.2rem;
  flex-shrink: 0;
`

type Props = {
    text: string,
    logo: any
};

const Header = (props: Props) => (
    <HeaderPanel>
        <HeaderImage src={props.logo} alt="Logo"/>
        <HeaderText>{props.text}</HeaderText>
    </HeaderPanel>
)

export default Header;