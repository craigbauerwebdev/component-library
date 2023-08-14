import { useState } from "react";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((current) => !current); // based on prev state
  };
  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option.label);
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
      <div onClick={handleClick}>{value || "Select..."}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </>
  );
}

export default Dropdown;
