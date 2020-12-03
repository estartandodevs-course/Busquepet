import Icone from './assets/images/Coracao.svg';
const { Button } = require("./components/button/Button");

function App() {
  return (
    <>
      <Button name="Vamos" icon={Icone} class="purple"></Button>
    </>
  );
}

export default App;
