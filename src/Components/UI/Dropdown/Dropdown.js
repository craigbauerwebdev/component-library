import { useState } from "react";

function Dropdown({ options, selected, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((current) => !current); // based on prev state
  };
  const handleOptionClick = (option) => {
    setIsOpen(false);
    onSelect(option.label);
  };
  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  return (
    <>
      <div onClick={handleClick}>{selected || "Select..."}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </>
  );
}

export default Dropdown;
