import { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const updateIndex = (index) => {
    setExpandedIndex(index);
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

  return <div>{renderedItems}</div>;
}

export default Accordion;
