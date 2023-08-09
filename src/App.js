import Button from "./Components/UI/Button";
import { FaBitcoin } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";
import { FaStickerMule } from "react-icons/fa";

function App() {
  const handleClick = () => {
    console.log("Clicked!");
  };

  return (
    <div className="App">
      Buttons
      <Button primary rounded className="mb-20" onClick={handleClick}>
        Button With No Props
      </Button>
      <Button primary rounded>
        <FaBitcoin />
        Primary
      </Button>
      <Button primary outline>
        <FaBitcoin />
        Primary
      </Button>
      <Button secondary>
        <DiCodeigniter />
        Secondary
      </Button>
      <Button success>
        <FaStickerMule />
        Success
      </Button>
      <Button warning>Warning</Button>
      <Button danger>Cancel Account</Button>
      <Button danger outline>
        Cancel Account
      </Button>
    </div>
  );
}

export default App;
