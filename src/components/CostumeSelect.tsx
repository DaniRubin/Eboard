import Select from 'react-select'

type Props = {
  options: {
  value: string;
  label: string;
  }[]
};


const CostumeSelect = ({ options } : Props) => (
  <Select options={options}
    menuPlacement="auto"
    menuPosition="fixed"
     styles={{
    option: (baseStyles, { isSelected }) => ({
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
    control: (baseStyles, { isFocused }) => ({
      ...baseStyles,
      borderColor: isFocused? 'gray' : 'white',
      width: "12rem",
      boxShadow: "0.5px 0.5px 2.5px 2.5px #e8e8e8;",
      fontFamily: "Poppins",
    }),}} />
)

export default CostumeSelect;