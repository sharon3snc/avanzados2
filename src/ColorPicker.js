import styled from 'styled-components'

const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

const ColorPickerButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${(props) => props.color};
`;

const ColorPicker = ({ onColorChange }) => {
    return (
      <ColorPickerContainer>
        <ColorPickerButton color="#FF0000" onClick={() => onColorChange("#FF0000")} />
        <ColorPickerButton color="#00FF00" onClick={() => onColorChange("#00FF00")} />
        <ColorPickerButton color="#0000FF" onClick={() => onColorChange("#0000FF")} />
      </ColorPickerContainer>
    );
  };

export default ColorPicker;
