import { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";
import Panel from "../../Panel";

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
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  const icon = isOpen ? <GoChevronDown /> : <GoChevronLeft />;

  return (
    <div className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value || "Select..."}
        {icon}
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
