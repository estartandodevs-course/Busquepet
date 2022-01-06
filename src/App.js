import React from "react";
// import Routes from "components/Routes";
import "config/firebase.config";
import "./global.scss";
import AdopterLocation from "screens/AdopterLocation";

function App() {
  return (
    <div className="App">
      <AdopterLocation />
    </div>
  );
}

export default App;
