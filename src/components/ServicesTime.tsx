import styled from "styled-components";

const ServicesTimesWrapper = styled.div`
  width: 100%;
  border-radius: 20px;
  background: var(--white, #F8F8F8);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);
  
  margin-top: 25px;
  padding:10px;
  color: #3A3A3A;
  h1 {
    margin:0px;
  }
`
const ServicesTime = () => (
    <ServicesTimesWrapper>
        <h1>Services Time</h1>
        <h2>Work in progress</h2>
    </ServicesTimesWrapper>
)

export default ServicesTime;