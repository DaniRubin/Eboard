import styled from "styled-components";

const ActiveButtonWrapper = styled.div<{ enabled: boolean }>((props) => {
    return `display: flex;
      width: 80px;
      height: 30px;
      padding: 6px 11px 6px 7px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 20px;
      background: ${props.enabled ? '#9ADBA0' : '#BBB'};
      box-shadow: ${props.enabled ? "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset" : "box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10)"};
      -webkit-user-select: none; 
      -ms-user-select: none;
      user-select: none; 
      
    `
})
const ActiveButtonText = styled.div`
  color: #F8F8F8;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`


type Props = {
    enabled: boolean,
    onClick: () => {}
};

const ActiveButton = ({enabled, onClick}: Props) => (
    <ActiveButtonWrapper enabled={enabled} onClick={onClick}>
        <ActiveButtonText>{enabled ? 'Active' : 'All'}</ActiveButtonText>
    </ActiveButtonWrapper>
)

export default ActiveButton;