import ButtonPage from "./Pages/ButtonPage";
import AccordionPage from "./Pages/AccordionPage";
import Dropdown from "./Components/DropDown/Dropdown";

function App() {
  const options = [
    { label: "I Like Red", value: "red" },
    { label: "I Like Blue", value: "blue" },
    { label: "I Like Green", value: "green" },
    { label: "I like Pink", value: "pink" },
    { label: "Ilike Grey", value: "grey" },
  ];
  return (
    <div className="App">
      <Dropdown options={options} />
      <AccordionPage />
      <ButtonPage />
    </div>
  );
}

export default App;
