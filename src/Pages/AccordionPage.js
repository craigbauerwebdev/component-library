import Accordion from "../Components/UI/Accordion/Accordion";

function AccordionPage({ items }) {
  return (
    <>
      <h1>Accordion Example</h1>
      <Accordion items={items} />;
    </>
  );
}

export default AccordionPage;
