import styled from "styled-components";

const TrendWrapper = styled.div`
  width: 100%;
  height: 430px;
  border-radius: 20px;
  background: var(--white, #F8F8F8);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);
  
  color: #3A3A3A;
`
const TrendGraph = () => (
    <TrendWrapper>
        <h1>Trend Graph - production</h1>
        <h2>Work in progress</h2>
    </TrendWrapper>
)

export default TrendGraph;