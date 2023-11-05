import styled from "styled-components";

const InfoBoxWrapper = styled.div`
  display: flex;
  width: 45%;
  height: 40px;

  color: var(--grey, #8E8E8E);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  padding: 8px 12px 8px 13px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 5px;
  background: var(--white, #F8F8F8);

  div {
    display: inline-block;
  }
`
const InfoBoxValueWrapper = styled.div<{ isPositiveValue: boolean }>((props) => {
    return `
      margin-left: 10px;
      color: ${props.isPositiveValue ? 'var(--green, #9ADBA0)': 'var(--red, #FE7670)'};
      font-weight: 700;
    `
});
type Props = {
    text: string
    value: number
    isPositiveValue: boolean
};

const InfoBox = ({text, value, isPositiveValue}: Props) => (
    <InfoBoxWrapper>
        <div>{text}</div>
        <InfoBoxValueWrapper isPositiveValue={isPositiveValue}>{value}</InfoBoxValueWrapper>
    </InfoBoxWrapper>
)

export default InfoBox;