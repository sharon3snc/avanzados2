import { useState } from "react";
import ParentContainer from "./ParentContainer";
import ColorPicker from "./ColorPicker";
import Text from "./Text";

const ColorPickerExample = () => {
    const [color, setColor] = useState("#000000");
  
    const handleColorChange = (newColor) => {
      setColor(newColor);
    };

  return (
    <ParentContainer>
      <ColorPicker onColorChange={handleColorChange}/>
      <Text color={color}>Este texto cambia de color</Text>
    </ParentContainer>
  );
};

export default ColorPickerExample;