import ButtonPage from "./Pages/ButtonPage";
import AccordionPage from "./Pages/AccordionPage";
import DropdownPage from "./Pages/DropdownPage";
import Link from "./Navigation/Link/Link";
import Route from "./Navigation/Route";

function App() {
  return (
    <div className="App">
      <Link to="/dropdown">Dropdown</Link>
      <Link to="/accordion">Accordion</Link>
      <Link to="/buttons">Buttons</Link>
      <Route path="/dropdown">
        <DropdownPage />
      </Route>
      <Route path="/accordion">
        <AccordionPage />
      </Route>
      <Route path="/buttons">
        <ButtonPage />
      </Route>
    </div>
  );
}

export default App;
