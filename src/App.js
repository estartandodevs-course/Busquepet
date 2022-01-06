import React from "react";
// import Routes from "components/Routes";
import "config/firebase.config";
import "./global.scss";
import Feed from "screens/Feed";

function App() {
  return (
    <div className="App">
      <Feed />
    </div>
  );
}

export default App;
