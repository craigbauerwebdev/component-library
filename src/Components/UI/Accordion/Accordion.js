import { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const updateIndex = (index) => {
    // get most uptodate piece of state (to avoid stale state reference)
    // functional update when new value depends on old value
    setExpandedIndex((current) => {
      if (current === index) {
        return -1;
      } else {
        return index;
      }
    });
    // v Works fine here v
    /* if (index === expandedIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    } */
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
