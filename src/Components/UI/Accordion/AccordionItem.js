import { useEffect, useState } from "react";

function AccordionItem({ item, index, expandedIndex, updateIndex }) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsExpanded(index === expandedIndex);
  });

  return (
    <div onClick={() => updateIndex(index)} key={item.id}>
      <div>{item.label}</div>
      {isExpanded && <div>{item.content}</div>}
    </div>
  );
}

export default AccordionItem;
