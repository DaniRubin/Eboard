import Select from 'react-select'
import styled from "styled-components";


const SelectWrapper = styled.div`
  & .select-option {
    margin: 8px;
  }
`

type Props = {
    options: {
        value: string;
        label: string;
    }[]
};

const CostumeSelect = ({options}: Props) => (
    <SelectWrapper>
        <Select options={options}
                defaultValue={options[0]}
                className={"select-option"}
                menuPlacement="auto"
                menuPosition="fixed"
                styles={{
                    option: (baseStyles, {isSelected}) => ({
                        ...baseStyles,
                        borderColor: 'white',
                        color: 'black',
                        width: "12rem",
                        fontFamily: "Poppins",
                        background: 'white',
                        borderLeft: '1rem solid;',
                        borderLeftColor: isSelected ? 'rgb(80,80,80)' : 'white',
                        borderLeftWidth: isSelected ? '0.5rem' : 0,
                    }),
                    control: (baseStyles, {isFocused}) => ({
                        ...baseStyles,
                        borderColor: isFocused ? 'gray' : 'white',
                        width: "12rem",
                        boxShadow: "0.5px 0.5px 2.5px 2.5px #e8e8e8;",
                        fontFamily: "Poppins",
                    }),
                }}/>
    </SelectWrapper>
)

export default CostumeSelect;