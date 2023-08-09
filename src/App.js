import Button from "./Buttons/Button";

function App() {
  return (
    <div className="App">
      Buttons
      <Button>Button With No Props</Button>
      <Button primary rounded>
        Primary
      </Button>
      <Button primary outline>
        Primary
      </Button>
      <Button secondary>Secondary</Button>
      <Button success>Success</Button>
      <Button warning>Warning</Button>
      <Button danger>Cancel Account</Button>
      <Button danger outline>
        Cancel Account
      </Button>
    </div>
  );
}

export default App;
