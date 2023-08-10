import { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const updateIndex = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  const renderedItems = items.map((item, index) => {
    return (
      <AccordionItem
        key={item.id}
        item={item}
        index={index}
        expandedIndex={expandedIndex}
        updateIndex={updateIndex}
      />
    );
  });

  return <div className="accordion-wrapper">{renderedItems}</div>;
}

export default Accordion;
