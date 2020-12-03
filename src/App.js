import Text from './components/Text/Text';
import Icone from './assets/images/Coracao.svg';
const { Button } = require("./components/button/Index");

function App() {
  return (
    <>
      <Button name="Vamos" icon={Icone} class="purple"></Button>
    </>
  );
}

export default App;
