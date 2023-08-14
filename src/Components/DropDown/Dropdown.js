import { useState } from "react";

function Dropdown({ options }) {
  //console.log(options);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((current) => !current);
  };
  const renderedOptions = options.map((option) => {
    return <div key={option.value}>{option.label}</div>;
  });
  return (
    <>
      <div onClick={handleClick}>Select...</div>
      {isOpen && <div>{renderedOptions}</div>}
    </>
  );
}

export default Dropdown;
