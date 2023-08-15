import { useState, useEffect, useRef } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";
import Panel from "../../Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdown = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!dropdown.current) {
        return;
      }
      if (!dropdown.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true); // set last arg to true to look for event handlers in the capture phase
    return () => document.removeEventListener("click", handler);
  }, []);

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
    <div className="w-48 relative" ref={dropdown}>
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
