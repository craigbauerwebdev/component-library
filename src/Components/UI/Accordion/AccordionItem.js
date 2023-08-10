import { useEffect, useState } from "react";
import { RiArrowDownCircleFill, RiArrowLeftCircleFill } from "react-icons/ri";

function AccordionItem({ item, index, expandedIndex, updateIndex }) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsExpanded(index === expandedIndex);
  });

  const icon = isExpanded ? (
    <RiArrowDownCircleFill />
  ) : (
    <RiArrowLeftCircleFill />
  );

  return (
    <div onClick={() => updateIndex(index)} key={item.id}>
      <div className="accordion-label">
        {item.label}
        {icon}
      </div>
      {isExpanded && <div className="accordion-content">{item.content}</div>}
    </div>
  );
}

export default AccordionItem;
