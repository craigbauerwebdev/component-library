import ButtonPage from "./Pages/ButtonPage";
import AccordionPage from "./Pages/AccordionPage";
import DropdownPage from "./Pages/DropdownPage";
import ModalPage from "./Pages/ModalPage";
//import Link from "./Navigation/Link/Link";
import Route from "./Navigation/Route";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App flex container mx-auto frid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
