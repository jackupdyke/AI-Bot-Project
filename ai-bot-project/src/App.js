//import logo from './logo.svg';
import { Desktop } from "./Figma/ChatBot.js";
import "./App.css";
import React from "react";

function App() {
  const [data, setData] = React.useState(null);
  //const [openairequest, setOpenairequest] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  // React.useEffect(() => {
  //   fetch("/open")
  //     .then((res) => res.json())
  //     .then((openairequest) => setOpenairequest(openairequest.message));
  // }, []);

  return (
    <div className="App">
      <p>{!data ? "Loading..." : data}</p>
      {/* <p>{!openairequest ? "Loading..." : openairequest}</p> */}
      <Desktop />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
