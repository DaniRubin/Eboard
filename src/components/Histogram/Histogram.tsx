import styled from "styled-components";

const HistogramWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: var(--white, #F8F8F8);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);
  
  color: #3A3A3A;
`
const Histogram = () => (
    <HistogramWrapper>
        <h1>Histogram - distribution</h1>
        <h2>Work in progress</h2>
    </HistogramWrapper>
)

export default Histogram;