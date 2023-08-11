import ButtonPage from "./Pages/ButtonPage";
import AccordionPage from "./Pages/AccordionPage";

function App() {
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
    <div className="App">
      <AccordionPage items={items} />
      <ButtonPage />
    </div>
  );
}

export default App;
