import { useState } from "react";
import Dropdown from "../Components/UI/Dropdown/Dropdown";

function DropdownPage() {
  const [selected, setSelected] = useState(null);
  const handleSelect = (selection) => {
    setSelected(selection);
  };
  const options = [
    { label: "I Like Red", value: "red" },
    { label: "I Like Blue", value: "blue" },
    { label: "I Like Green", value: "green" },
    { label: "I like Pink", value: "pink" },
    { label: "Ilike Grey", value: "grey" },
  ];
  return (
    <>
      <h1>Dropdown Example</h1>
      <Dropdown selected={selected} onSelect={handleSelect} options={options} />
      ;
    </>
  );
}

export default DropdownPage;
