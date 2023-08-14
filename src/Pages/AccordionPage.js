import Accordion from "../Components/UI/Accordion/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "q1",
      label: "Question 1",
      content: "The answer to question 1",
    },
    {
      id: "q2",
      label: "Question 2",
      content: "The answer to question 2",
    },
    {
      id: "q3",
      label: "Question 3",
      content: "The answer to question 3",
    },
  ];
  return (
    <>
      <h1>Accordion Example</h1>
      <Accordion items={items} />;
    </>
  );
}

export default AccordionPage;
