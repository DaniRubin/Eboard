import styled from "styled-components";
import logo from '../../assets/InProgress.svg'

const InProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 60vh;
  gap: 20px;
  color: #8E8E8E;
  text-align: center;
  font-size: 48px;
  font-weight: 600;
`

const InProgress = () => (
    <InProgressWrapper>
        <div>Work In Progress...</div>
        <img src={logo} alt={'In Progress'}/>
    </InProgressWrapper>
)

export default InProgress;