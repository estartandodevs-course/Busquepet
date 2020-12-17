
import React from "react";
// import Routes from "./components/Routes";
import "./app.scss";
// import "./config/firebase.config";
import "./global.scss";
import Feed from "./pages/feed";


function App() {
  return (
    <div className="App">
      {/* <Routes /> */}
      <Feed></Feed>
    </div>
  );
}

export default App;
