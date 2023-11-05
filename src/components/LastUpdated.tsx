import styled from "styled-components";

const LastUpdatedWrapper = styled.div`
  float: right;
  margin-left: auto;
  font-family: Poppins;
  color: var(--text-grey, #BBB);
  display: flex;
  align-items: center;
  div {
    display: inline-block;
  }
`
const TimePart = styled.div`
  margin-left: 8px;
  display: inline-block;
  color: var(--grey, #8E8E8E);
`

type Props = {
    time: string
};

const LastUpdated = ({time}: Props) => (
    <LastUpdatedWrapper>
        <div>Last update time:</div>
        <TimePart>{time}</TimePart>
    </LastUpdatedWrapper>
)

export default LastUpdated;